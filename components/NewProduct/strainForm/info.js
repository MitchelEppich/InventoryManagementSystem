import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Variant from "./variant";

const index = props => {
  let companyVariantButtons = props.newProduct.companies.map(
    (company, index) => {
      return (
        <input
          key={index}
          className="w-150 h-150 rounded bg-grey-lighter cursor-pointer"
          name={company.name}
          value={company.name}
          type="button"
          onClick={() => {
            props.toggleCompanyVariant({
              company: company.name,
              variants: props.newProduct.variants
            });
          }}
        />
      );
    }
  );
  let variants = props.newProduct.variants.map((variant, index) => {
    return (
      <Variant key={index} variant={variant} variantIndex={index} {...props} />
    );
  });
  return (
    <React.Fragment>
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        General Information
      </p>
      <div className="inline-flex w-full justify-between flex">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Strain Name"
          value={props.newProduct.info.strainName}
          name="strainName"
          type="text"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                strainName: e.target.value
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
                origin: e.target.value
              }
            });
          }}
          name="origin"
          value={props.newProduct.info.origin}
          className="w-1/5 uppercase text-grey-light p-2 h-10 mx-1 my-2 pl-4   border-2 border-input-grey"
        >
          <option value="seed">Origin...</option>
          <option value="spain">Spain</option>
          <option value="usa">USA</option>
          <option value="mexico">Mexico</option>
        </select>
      </div>
      <div className="inline-flex w-full justify-between flex">
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="THC %"
          value={props.newProduct.info.thc}
          type="number"
          name="thc"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                thc: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="CBD %"
          value={props.newProduct.info.cbd}
          type="number"
          name="cbd"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                cbd: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="CBN %"
          value={props.newProduct.info.cbn || "CBN%"}
          type="number"
          name="cbn"
          min="0"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                cbn: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Sativa %"
          value={props.newProduct.info.sativa}
          type="number"
          name="sativa"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                sativa: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Indica %"
          value={props.newProduct.info.indica}
          type="number"
          name="indica"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                indica: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Ruderalis %"
          value={props.newProduct.info.ruderalis}
          type="number"
          name="ruderalis"
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                ruderalis: e.target.value
              }
            });
          }}
        />
      </div>
      <div className="w-full inline-flex my-2">
        <select
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                genetics: e.target.value
              }
            });
          }}
          name="genetics"
          value={props.newProduct.info.genetics}
          className="w-1/3 uppercase p-2 mx-1 h-10 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option value="genetics" disabled>
            Genetic
          </option>
          <option value="Feminized">Feminized</option>
          <option value="Autoflower">Autoflower</option>
          <option value="Regular">Regular</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Mix">Mix</option>
          <option value="CBD">CBD</option>
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
          className="w-1/3 uppercase p-2 mx-1 h-10 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option value="size" disabled>
            Select a Environment...
          </option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor-Outdoor">Indoor / Outdoor</option>
        </select>
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Yield Inside"
          type="number"
          name="yieldInside"
          value={props.newProduct.info.yieldInside}
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                yieldInside: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Yield Outside"
          type="number"
          name="yieldOutside"
          value={props.newProduct.info.yieldOutside}
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                yieldOutside: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Yield Both"
          type="number"
          name="yieldBoth"
          value={props.newProduct.info.yieldBoth}
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                yieldBoth: e.target.value
              }
            });
          }}
        />
      </div>
      <div className="w-full inline-flex my-2">
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
          className="w-1/5 uppercase p-2 mx-1 h-10 text-grey-light border-2 border-input-grey"
        >
          <option value="size" disabled>
            Difficult...
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Experienced">Experienced</option>
          <option value="Master">Master</option>
        </select>
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Flower Time"
          type="text"
          name="flowerTime"
          value={props.newProduct.info.flowerTime}
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                flowerTime: e.target.value
              }
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Location"
          type="text"
          name="location"
          value={props.newProduct.info.location}
          onChange={e => {
            //TODO:check if contents exists on focus/blur!!!
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                location: e.target.value
              }
            });
          }}
        />
        <input
          className="w-2/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="effect (use `,` to separate)"
          type="text"
          name="effect"
          value={props.newProduct.info.effect}
          onChange={e => {
            props.updateNewProduct({
              type: "info",
              info: {
                ...props.newProduct.info,
                effect: e.target.value
              }
            });
          }}
        />
      </div>
      <div className="w-full my-4">
        <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
          Stock Control
        </p>
        <div className="w-full inline-flex">
          <input
            className="w-1/3 p-2 uppercase pl-4 mx-1 my-2 text-grey"
            placeholder="qty (loose)"
            type="number"
            name="stockAmount"
            value={props.newProduct.info.stockAmount}
            onChange={e => {
              let stock = props.newProduct.info.stock;
              let newStock = stock[props.newProduct.distro];
              newStock.amount = e.target.value;
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
              newStock.rop = e.target.value;
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
      </div>

      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Which Company Sells?
      </p>
      <div className="flex justify-around w-full my-4">
        {companyVariantButtons}
      </div>
      {variants}
    </React.Fragment>
  );
};

export default index;
