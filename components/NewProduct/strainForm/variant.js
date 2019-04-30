import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import PackInfo from "./packInfo";

const index = props => {
  let companies = props.newProduct.companies;
  let company = companies[props.variantIndex];
  let attributes = company.attributes.map((pack, index) => {
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
    <div className="w-full">
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        {props.variant}
      </p>
      <div className="inline-flex w-full">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Alias (E.G. 'Super Silver Haze') "
          value={company.alias}
          type="text"
          name="alias"
          onChange={e => {
            company.alias = e.target.value;
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="SOTI ID"
          value={company.sotiId}
          type="text"
          name="sotiId"
          onChange={e => {
            company.sotiId = e.target.value;
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-0 text-grey"
          placeholder="STT ID"
          value={company.sttId || ""}
          name="sttId"
          type="text"
          onChange={e => {
            company.sttId = e.target.value;
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
      </div>

      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="Summary"
        name="summary"
        value={company.summary}
        onChange={e => {
          company.summary = e.target.value;
          companies.splice(props.variantIndex, 1, company);
          props.updateNewProduct({
            type: "companies",
            companies: companies
          });
        }}
      />
      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="description (separate paragraphs *)"
        name="description"
        value={company.description.join("\n")}
        onChange={e => {
          company.description = e.target.value.split("\n");
          companies.splice(props.variantIndex, 1, company);
          props.updateNewProduct({
            type: "companies",
            companies: companies
          });
        }}
      />
      {attributes}
      <div className="w-full flex justify-end mt-4">
        <div
          onClick={e => {
            e.preventDefault();
            let newCompanies = props.newProduct.companies;
            newCompanies[props.variantIndex].attributes.push({
              size: 0,
              price: 0,
              stock: [
                { amount: 0, rop: 0, noe: 0, sold: 0 }
              ]
            });
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
