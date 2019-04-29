import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Variant from "./variant";

const index = props => {
  let distro = props.newProduct.distro,
    env = props.newProduct.info.environment;
  let companyVariantButtons = props.newProduct.companies.map(
    (company, index) => {
      return (
        <div
          onClick={() => {
            props.toggleCompanyVariant({
              company: company.name,
              variants: props.newProduct.variants
            });
          }}
          key={index}
          className={`${
            props.newProduct.variants.includes(company.name)
              ? "logo--" + company.name.replace(/ /g, "").toLowerCase() + ""
              : "logo--" +
                company.name.replace(/ /g, "").toLowerCase() +
                "--greyed"
          } h-150 w-150 rounded shadow-lg cursor-pointer`}
        />
      );
    }
  );
  let variants = props.newProduct.variants.map((variant, index) => {
    let i = props.newProduct.companies.findIndex((company, index) => {
      return company.name == variant;
    });
    return <Variant key={i} variant={variant} variantIndex={i} {...props} />;
  });
  return (
    <React.Fragment>
      <p className="uppercase bg-teal w-full  p-2 my-2 text-center font-bold text-white text-xl">
        General Information
      </p>
      <div className="flex w-full ">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Strain Name"
          value={props.newProduct.info.name}
          name="name"
          type="text"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                name: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Breeder"
          value={props.newProduct.info.breeder}
          type="text"
          name="breeder"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                breeder: e.target.value
              }
            });
          }}
        />
        <select
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                origin: [parseInt(e.target.value)]
              }
            });
          }}
          name="origin"
          className="w-1/5 uppercase text-grey-light p-2 h-10 mx-1 my-2 pl-4  border-2 border-input-grey"
        >
          <option>Origin...</option>
          <option value="0">Canada</option>
          <option value="1">USA</option>
          <option value="2">Spain</option>
          <option value="3">Netherlands</option>
          <option value="4">United Kingdom</option>
          <option value="5">South Africa</option>
          <option value="6">Central America</option>
        </select>
      </div>
      <div className="flex w-full ">
        <div className="bg-green w-1/3 rounded-lg mx-1">
          <label className="w-1/3 p-2 my-2 pl-4">THC %:</label>
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="LOW"
            // value={props.newProduct.info.thc[0] || "THC%"}
            type="number"
            step="0.01"
            name="thc"
            min="0.01"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.thc.splice(0, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="HIGH"
            // value={props.newProduct.info.thc[1] || "THC%"}
            type="number"
            step="0.01"
            name="thc"
            min="0"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.thc.splice(1, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
        </div>
        <div className="w-1/3 bg-orange mx-1 rounded-lg">
          <label className="w-1/3 p-2 my-2 pl-4">CBD %:</label>
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="LOW"
            // value={props.newProduct.info.cbd[0] || "CBD%"}
            type="number"
            step="0.01"
            name="cbd"
            min="0"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.cbd.splice(0, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="HIGH"
            // value={props.newProduct.info.cbd[1] || "CBD%"}
            type="number"
            step="0.01"
            name="cbd"
            min="0"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.cbd.splice(1, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
        </div>
        <div className="bg-purple w-1/3 mx-1 rounded-lg">
          <label className="w-1/3 p-2 my-2 pl-4">CBN %:</label>
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="LOW"
            // value={props.newProduct.info.cbn[0] || "CBN%"}
            type="number"
            step="0.01"
            name="cbn"
            min="0"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.cbn.splice(0, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
          <input
            className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
            placeholder="HIGH"
            // value={props.newProduct.info.cbn[1] || "CBN%"}
            type="number"
            step="0.01"
            name="cbn"
            min="0"
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.cbn.splice(1, 1, parseFloat(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
        </div>
      </div>

      <div className="w-full flex">
        <input
          className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Sativa %"
          // value={props.newProduct.info.sativa || "Sativa%"}
          type="number"
          step="0.1"
          name="sativa"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                sativa: parseFloat(e.target.value) / 100
              }
            });
          }}
        />
        <input
          className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Indica %"
          // value={props.newProduct.info.indica || "Indica%"}
          type="number"
          step="0.1"
          name="indica"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                indica: parseFloat(e.target.value) / 100
              }
            });
          }}
        />
        <input
          className="w-1/3 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Ruderalis %"
          // value={props.newProduct.info.ruderalis || "Ruderalis%"}
          type="number"
          step="0.1"
          name="ruderalis"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                ruderalis: parseFloat(e.target.value) / 100
              }
            });
          }}
        />
      </div>
      <div className="w-full flex">
        <select
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                genetics: parseFloat(e.target.value)
              }
            });
          }}
          name="genetics"
          value={props.newProduct.info.genetics}
          className="w-1/3 uppercase p-1 mx-1 my-2 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option>Genetics</option>
          <option value="0">Feminized</option>
          <option value="1">Autoflower</option>
          <option value="2">Regular</option>
          <option value="3">CBD</option>
          <option value="4">Dwarf</option>
          <option value="5">Mix</option>
        </select>{" "}
        <select
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                difficulty: e.target.value
              }
            });
          }}
          name="difficulty"
          value={props.newProduct.info.difficulty}
          className="w-1/3 uppercase p-1 mx-1 my-2 text-grey-light border-2 border-input-grey"
        >
          <option>Difficulty</option>
          <option value="0">Easy</option>
          <option value="1">Moderate</option>
          <option value="2">Experienced</option>
          <option value="3">Master</option>
        </select>
        <select
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                environment: e.target.value
              }
            });
          }}
          name="environment"
          value={props.newProduct.info.environment}
          className="w-1/3 uppercase p-1 mx-1 my-2 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option>Environment</option>
          <option value="1">Indoor</option>
          <option value="2">Outdoor</option>
          <option value="0">Indoor / Outdoor</option>
        </select>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <label className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey">
            Flower Time:
          </label>
          <input
            className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
            placeholder="7"
            type="number"
            name="flowerTime"
            value={props.newProduct.info.flowerTime[0] || "FT"}
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.flowerTime.splice(0, 1, parseInt(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
          <input
            className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
            placeholder="10"
            type="number"
            name="flowerTime"
            value={props.newProduct.info.flowerTime[1] || "FT"}
            onChange={e => {
              let newInfo = props.newProduct.info;
              newInfo.flowerTime.splice(1, 1, parseInt(e.target.value));
              props.updateNewProduct({
                type: "info",
                info: {
                  ...newInfo
                }
              });
            }}
          />
        </div>
        <div className="w-1/2 flex">
          {env == 1 || env == 0 ? (
            <input
              className="w-full uppercase p-2 mx-1 my-2 text-grey border-2 border-input-grey"
              placeholder="Yield (Indoor)"
              type="number"
              name="yieldInside"
              value={props.newProduct.info.yield[0] || "Yield (Indoor)"}
              onChange={e => {
                props.updateNewProduct({
                  type: "info",
                  info: {
                    ...props.newProduct.info,
                    yield: [
                      parseInt(e.target.value),
                      props.newProduct.info.yield[1]
                    ]
                  }
                });
              }}
            />
          ) : null}
          {env == 2 || env == 0 ? (
            <input
              className="w-full uppercase p-2 mx-1 my-2 text-grey border-2 border-input-grey"
              placeholder="Yield (Outdoor)"
              type="number"
              name="yieldOutside"
              value={props.newProduct.info.yield[1] || "Yield (Outdoor)"}
              onChange={e => {
                props.updateNewProduct({
                  type: "info",
                  info: {
                    ...props.newProduct.info,
                    yield: [
                      props.newProduct.info.yield[0],
                      parseInt(e.target.value)
                    ]
                  }
                });
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="w-full flex">
        <input
          className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Location"
          type="text"
          name="location"
          value={props.newProduct.info.location[distro]}
          onChange={e => {
            //TODO:check if contents exists on focus/blur!!!
            let newLocation = props.newProduct.info.location;
            newLocation.splice(distro, 1, e.target.value);
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                location: newLocation
              }
            });
          }}
        />{" "}
        <input
          className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Amount"
          type="number"
          name="stockAmount"
          value={props.newProduct.info.stockAmount}
          onChange={e => {
            let stock = props.newProduct.info.stock;
            let newStock = stock[props.newProduct.distro];
            newStock.amount = parseInt(e.target.value);
            stock.splice(props.newProduct.distro, 1, newStock);
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                stock: stock
              }
            });
          }}
        />
        <input
          className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="ROP"
          value={props.newProduct.info.stockROP}
          type="number"
          name="stockROP"
          onChange={e => {
            let stock = props.newProduct.info.stock;
            let newStock = stock[props.newProduct.distro];
            newStock.rop = parseInt(e.target.value);
            stock.splice(props.newProduct.distro, 1, newStock);
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                stock: stock
              }
            });
          }}
        />
      </div>
      <div className="w-full flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="effects (use commas to separate)"
          type="text"
          name="effect"
          // value={props.newProduct.info.effect.join(",") || ""}
          onChange={e => {
            let newEffect = e.target.value.split(",");
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                effect: null
                // effect: [...newEffect]
              }
            });
          }}
        />
      </div>

      <p className="uppercase bg-teal w-full  p-2 my-2 text-center font-bold text-white text-xl">
        Company Variants
      </p>
      <div className="flex flex-wrap justify-around w-full mb-4">
        <p className="w-full my-4 text-xl font-bold uppercase">
          Please select all that apply:
        </p>
        {companyVariantButtons}
      </div>
      {variants}
    </React.Fragment>
  );
};

export default index;
