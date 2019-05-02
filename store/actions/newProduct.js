/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  TOGGLE_FORM_TYPE: "TOGGLE_FORM_TYPE",
  TOGGLE_ENV_INPUTS: "TOGGLE_ENV_INPUTS",
  TOGGLE_COMPANY_VARIANT: "TOGGLE_COMPANY_VARIANT",
  TOGGLE_PACK_INPUT: "TOGGLE_PACK_INPUT",
  UPDATE_NEW_PRODUCT: "UPDATE_NEW_PRODUCT",
  SUBMIT_NEW_PRODUCT_FORM: "SUBMIT_NEW_PRODUCT_FORM",
  SUBMIT_EDIT_PRODUCT_FORM: "SUBMIT_EDIT_PRODUCT_FORM",
  RESET_STORE: "RESET_STORE",
  DELETE_COMPANY_VARIANT: "DELETE_COMPANY_VARIANT",
  DELETE_PACK_VARIANT: "DELETE_PACK_VARIANT"
};

const getActions = uri => {
  const objects = {
    toggleFormType: formType => {
      return {
        type: actionTypes.TOGGLE_FORM_TYPE,
        formType: formType,
        category: formType == "strain" ? 0 : 1
      };
    },
    toggleEnvInputs: envType => {
      return {
        type: actionTypes.TOGGLE_ENV_INPUTS,
        envType: envType
      };
    },
    toggleCompanyVariant: newVariantsObj => {
      let newVariant = newVariantsObj.company,
        oldVariants = newVariantsObj.variants,
        removed = false;
      let newVariants = oldVariants.filter(variant => {
        if (variant == newVariant) {
          removed = true;
          return false;
        }
        return true;
      });
      return {
        type: actionTypes.TOGGLE_COMPANY_VARIANT,
        newVariants: removed ? newVariants : [...newVariants, newVariant]
      };
    },
    togglePackInput: newCompanies => {
      return {
        type: actionTypes.TOGGLE_PACK_INPUT,
        companies: newCompanies
      };
    },
    updateNewProduct: obj => {
      switch (obj.type) {
        case "info":
          return {
            type: actionTypes.UPDATE_NEW_PRODUCT,
            info: obj.info
          };
        case "companies":
          return {
            type: actionTypes.UPDATE_NEW_PRODUCT,
            companies: obj.companies
          };
      }
    },
    resetStore: () => {
      return {
        type: actionTypes.RESET_STORE
      };
    },
    editProduct: data => {
      let newCompanies = data.companies;
      newCompanies = newCompanies
        .map((company, index) => {
          let newCompany = {
            alias: company.alias,
            sotiId: company.sotiId,
            sttId: company.sttId,
            summary: company.summary,
            description: company.description,
            attributes: company.attributes,
            name: company.company.name,
            _id: company._id ? company._id : null
          };
          return newCompany;
        })
        .filter(company => {
          return company.alias != "";
        });
      let info = data.info;
      info.location[0].distributor = info.location[0].distributor._id;
      let product = {
        ...info,
        variants: newCompanies
      };
      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.updateProduct,
          variables: { ...product }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            dispatch({
              type: actionTypes.SUBMIT_EDIT_PRODUCT_FORM
            });
            // dispatch(
            //   objects.updateInventory({
            //     inventory: inventory
            //   })
            // );
          })
          .catch(error => console.log(error));
      };
    },
    createNewProduct: data => {
      // let distro = data.distro; //distro index
      let type = 1;
      type = data.info.sativa > 60 ? 0 : type;
      type = data.info.indice < 60 ? 2 : type;

      //company variants
      let newVariants = data.companies
        .map((company, index) => {
          let newCompany = company;
          return {
            ...newCompany,
            releaseDate: "2018-06-01T07:00:00.000Z"
          };
        })
        .filter(company => {
          return data.variants.includes(company.name);
        });

      let newProduct = {
        ...data.info,
        variants: newVariants
      };

      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.createProduct,
          variables: { ...newProduct }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            let returnData = data.data.createStrain;
            dispatch({
              type: actionTypes.SUBMIT_NEW_PRODUCT_FORM,
              newStrain: returnData
            });
          })
          .catch(error => console.log(error));
      };
    },
    deleteCompanyVariant: obj => {
      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.deleteVariant,
          variables: { _id: obj._id }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            let companies = obj.companies,
              variants = obj.variants;
            let deleted = data.data.deleteVariant._id === obj._id;
            if (deleted) {
              let index = companies.findIndex(company => {
                return company._id === obj._id;
              });
              let variantIndex = variants.findIndex(variant => {
                return variant == companies[index].company.name;
              });
              companies.splice(index, 1, {
                company: companies[index].company,
                alias: "",
                sotiId: "",
                sttId: 0,
                summary: "",
                description: [],
                attributes: [
                  {
                    price: 0,
                    size: 0,
                    stock: [{ amount: 0, rop: 0, noe: 0 }]
                  }
                ]
              });
              variants.splice(variantIndex, 1);
            }
            dispatch({
              type: actionTypes.DELETE_COMPANY_VARIANT,
              deleted: deleted,
              companies: companies,
              variants: variants
            });
          })
          .catch(error => console.log(error));
      };
    },
    deletePackVariant: obj => {
      let companies = obj.companies;
      if (!obj._id) {
        companies[obj.variantIndex].attributes.splice(obj.packIndex, 1);
        return {
          type: actionTypes.TOGGLE_PACK_INPUT,
          companies: companies
        };
      }

      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.deleteAttribute,
          variables: { _id: obj._id }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            if (data.data.deleteAttribute._id) {
              companies[obj.variantIndex].attributes.splice(obj.packIndex, 1);
            }
            dispatch({
              type: actionTypes.DELETE_PACK_VARIANT,
              companies: companies
            });
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {
  createProduct: gql`
    mutation(
      $name: String
      $category: Int
      $breeder: String
      $origin: [Int]
      $cbd: [Float]
      $thc: [Float]
      $cbn: [Float]
      $effect: [Int]
      $yield: [Int]
      $genetic: Int
      $flowerTime: [Int]
      $difficulty: Int
      $indica: Float
      $sativa: Float
      $ruderalis: Float
      $environment: Int
      $location: [LocationInput]
      $variants: [VariantInput]
      $stock: [StockInput]
    ) {
      createStrain(
        input: {
          name: $name
          category: $category
          breeder: $breeder
          origin: $origin
          cbd: $cbd
          thc: $thc
          cbn: $cbn
          effect: $effect
          yield: $yield
          genetic: $genetic
          flowerTime: $flowerTime
          difficulty: $difficulty
          indica: $indica
          sativa: $sativa
          ruderalis: $ruderalis
          environment: $environment
          location: $location
          variants: $variants
          stock: $stock
        }
      ) {
        _id
        name
        category
        breeder
        origin
        cbd
        thc
        cbn
        effect
        yield
        genetic
        flowerTime
        difficulty
        indica
        sativa
        ruderalis
        environment
        location {
          _id
          aisle
          section
          color
          distributor {
            country
          }
        }
        variants {
          _id
          company {
            _id
            assetsUrl
            website
            phone
            socials
            email
          }
          sotiId
          alias
          description
          summary
          releaseDate
          sttId
          attributes {
            _id
            price
            size
            stock {
              _id
              amount
              rop
              noe
              sold
            }
          }
        }
        stock {
          _id
          amount
          rop
          noe
          sold
        }
      }
    }
  `,
  updateProduct: gql`
    mutation(
      $_id: String
      $name: String
      $category: Int
      $breeder: String
      $origin: [Int]
      $cbd: [Float]
      $thc: [Float]
      $cbn: [Float]
      $effect: [Int]
      $yield: [Int]
      $genetic: Int
      $flowerTime: [Int]
      $difficulty: Int
      $indica: Float
      $sativa: Float
      $ruderalis: Float
      $environment: Int
      $location: [LocationInput]
      $variants: [VariantInput]
      $stock: [StockInput]
    ) {
      updateStrain(
        input: {
          _id: $_id
          name: $name
          category: $category
          breeder: $breeder
          origin: $origin
          cbd: $cbd
          thc: $thc
          cbn: $cbn
          effect: $effect
          yield: $yield
          genetic: $genetic
          flowerTime: $flowerTime
          difficulty: $difficulty
          indica: $indica
          sativa: $sativa
          ruderalis: $ruderalis
          environment: $environment
          location: $location
          variants: $variants
          stock: $stock
        }
      ) {
        _id
        name
        category
        breeder
        origin
        cbd
        thc
        cbn
        effect
        yield
        genetic
        flowerTime
        difficulty
        indica
        sativa
        ruderalis
        environment
        location {
          _id
          aisle
          section
          color
          distributor {
            country
          }
        }
        variants {
          _id
          company {
            _id
            assetsUrl
            website
            phone
            socials
            email
          }
          sotiId
          alias
          description
          summary
          releaseDate
          sttId
          attributes {
            _id
            price
            size
            stock {
              _id
              amount
              rop
              noe
              sold
            }
          }
        }
        stock {
          _id
          amount
          rop
          noe
          sold
        }
      }
    }
  `,
  deleteVariant: gql`
    mutation($_id: String) {
      deleteVariant(input: { _id: $_id }) {
        _id
      }
    }
  `,
  deleteAttribute: gql`
    mutation($_id: String) {
      deleteAttribute(input: { _id: $_id }) {
        _id
      }
    }
  `
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
