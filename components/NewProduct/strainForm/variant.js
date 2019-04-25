import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import PackInfo from "./packInfo";

const index = props => {
  let companyVariant = props.newProduct.companies[props.variantIndex];
  let packs = companyVariant.packs.map((pack, index) => {
    return (
      <PackInfo
        key={index}
        id={index}
        varientIndex={props.variantIndex}
        pack={pack}
        packIndex={index}
        {...props}
      />
    );
  });

  return (
    <div
      className="w-full mt-6 border-2 border-grey-lighter rounded"
      id={props.variant}
    >
      <img
        src={props.newProduct.companies[props.variantIndex].logo}
        className="w-100 h-auto"
      />
      <div className="uppercase bg-grey-dark w-full inline-flex relative">
        <div className="text-center w-full">
          <p className="p-2 text-center font-bold text-white text-xl">
            Adding Variations to {props.variant}
          </p>
        </div>
        <div
          onClick={() => {
            props.toggleCompanyVariant({
              company: props.variant,
              variants: props.newProduct.variants
            });
          }}
          className="absolute pin-r pin-t flex items-center w-10 hover:bg-teal-dark p-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faMinus} className="text-white fa-lg ml-1" />
        </div>
      </div>
      <div className="inline-flex w-full p-4">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Alias (E.G. 'Super Silver Haze Feminized') "
          type="text"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="SOTI ID"
          type="number"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-0 text-grey"
          placeholder="STT ID"
          type="number"
        />
      </div>
      <div className="w-full pt-0 p-4">
        <textarea
          cols="4"
          rows="80"
          className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
          placeholder="Summary"
        />
        <textarea
          cols="4"
          rows="80"
          className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
          placeholder="description"
        />
      </div>
      <p className="uppercase bg-grey-dark  w-full p-2 mb-2 text-center font-bold text-white text-xl">
        Prices {"&"} Packs
      </p>
      {packs}
      <div className="w-full flex justify-end my-4">
        <div
          onClick={e => {
            e.preventDefault();
            let newCompanies = props.newProduct.companies;
            newCompanies[props.variantIndex].packs.push({});
            props.togglePackInput(newCompanies);
          }}
          className="inline-flex items-center flex bg-grey-lighter px-6 justify-end text-right cursor-pointer scale-items mr-5"
        >
          <div className="-ml-8 w-10 bg-teal p-2 flex items-center justify-center cursor-pointer hover:bg-teal-dark rounded-full ">
            <FontAwesomeIcon icon={faPlus} className="text-white fa-lg" />
          </div>
          <div className="p-2 uppercase font-bold ml-2">Add More Options</div>
        </div>
      </div>
    </div>
  );
};

export default index;
