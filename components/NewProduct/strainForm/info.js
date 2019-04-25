import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Variant from "./variant";

const index = props => {
  let companyVariantButtons = props.newProduct.companies.map(
    (company, index) => {
      return (
        <input
          key={index}
          className="w-200 h-200 rounded bg-grey-lighter  cursor-pointer"
          name={company.name}
          value={company.name}
          type="button"
          onClick={() => {
            let removed = false;
            let newVariants = props.newProduct.variants.filter(variant => {
              variant != company.name;
              // removed = true;
            });
            props.addCompanyVariant(
              removed ? newVariants : [...newVariants, company.name]
            );
          }}
        />
      );
    }
  );
  let variants = props.newProduct.variants.map((variant, index) => {
    return <Variant key={index} {...props} />;
  });
  return (
    <React.Fragment>
      <div className="inline-flex w-full justify-between flex">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="Strain Name"
          type="text"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Breeder"
          type="text"
        />
        <select className="w-1/5 uppercase text-grey-light p-2 mx-1 my-2 pl-4   border-2 border-input-grey rounded-lg">
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
          type="number"
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="CBD %"
          type="number"
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="CBN %"
          type="number"
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Sativa %"
          type="number"
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Indica %"
          type="number"
        />
        <input
          className="w-1/6 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Ruderalis %"
          type="number"
        />
      </div>
      <div className="w-full inline-flex my-2">
        <select className="w-1/3 uppercase p-2 mx-1 pl-2 text-grey-light border-2 border-input-grey rounded-lg">
          <option value="size" disabled>
            Genetic
          </option>
          <option value="Feminized">Feminized</option>
          <option value="Autoflower">Autoflower</option>
          <option value="Regular">Regular</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Mix">Mix</option>
          <option value="CBD">CBD</option>
        </select>
        <select className="w-1/3 uppercase p-2 mx-1 pl-2 text-grey-light border-2 border-input-grey rounded-lg">
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
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Yield Outside"
          type="number"
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Yield Both"
          type="number"
        />
      </div>
      <div className="w-full inline-flex my-2">
        <select className="w-1/5 uppercase p-2 mx-1 text-grey-light border-2 border-input-grey rounded-lg">
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
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Location"
          type="text"
        />
        <input
          className="w-2/5 p-2 uppercase pl-4 mx-1 text-grey"
          placeholder="Effects (use `,` to separate)"
          type="text"
        />
      </div>
      {/* <div className="inline-flex w-full flex items-center justify-between">
        <input
          className="w-2/3 p-2 uppercase pl-4 my-2 text-grey"
          placeholder="price:"
          type="number"
        />
        <select className="w-1/3 uppercase p-2 mx-2 pl-2 text-grey-light border-2 border-input-grey rounded-lg">
          <option value="size" disabled>
            Select a Pack Size...
          </option>
          <option value="5">5 Packs</option>
          <option value="10">10 Packs</option>
          <option value="15">15 Packs</option>
          <option value="25">25 Packs</option>
          <option value="50">50 Packs</option>
        </select>
        <div className="w-10 bg-teal p-2 flex items-center justify-center cursor-pointer hover:bg-teal-dark rounded-full">
          <FontAwesomeIcon icon={faPlus} className="text-white fa-lg" />
        </div>
      </div> */}

      {/* <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="description:"
      /> */}

      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Stock Control:
      </p>
      <div className="w-full inline-flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="qty (packed):"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="qty (loose):"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="lower limit:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="upper limit:"
          type="number"
        />
      </div>
      <div className="inline-flex w-full">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="# sold:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Re-order point:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="location:"
          type="text"
        />
      </div>
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Company Variants:
      </p>
      <div className="flex justify-between w-full">{companyVariantButtons}</div>
      {variants}
    </React.Fragment>
  );
};

export default index;
