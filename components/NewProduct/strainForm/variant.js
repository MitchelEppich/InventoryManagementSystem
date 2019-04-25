import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import PackInfo from "./packInfo";

const index = props => {
  let companyVariant = props.newProduct.companies[props.variantIndex];
  let packs = companyVariant.packs.map((pack, index) => {
    return (
      <PackInfo
        key={index}
        varientIndex={props.variantIndex}
        pack={pack}
        packIndex={index}
        {...props}
      />
    );
  });

  return (
    <div className="w-full">
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Adding Variations to {props.variant}
      </p>
      <div className="inline-flex w-full">
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
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="STT ID"
          type="number"
        />
      </div>

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
      {packs}
      <div className="w-full flex justify-end mt-4">
        <div
          onClick={e => {
            e.preventDefault();
            let newCompanies = props.newProduct.companies;
            newCompanies[props.variantIndex].packs.push({});
            props.togglePackInput(newCompanies);
          }}
          className="inline-flex items-center flex bg-grey-lighter px-6 justify-end text-right cursor-pointer scale-items"
        >
          <div className="-ml-8 w-10 bg-teal p-2 flex items-center justify-center cursor-pointer hover:bg-teal-dark rounded-full">
            <FontAwesomeIcon icon={faPlus} className="text-white fa-lg" />
          </div>
          <div className="p-2 uppercase font-bold ml-2">Add More</div>
        </div>
      </div>
    </div>
  );
};

export default index;
