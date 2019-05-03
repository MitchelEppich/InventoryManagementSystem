import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { genKey } from "../../../scripts";
import PackInfo from "../packInfo";

const index = props => {
  let variants = props.newProduct.variants;
  let variant = variants[props.variantIndex];
  let attributes = variant.attributes.map((pack, index) => {
    return (
      <PackInfo
        key={index + 100}
        id={index}
        varientIndex={props.variantIndex}
        pack={pack}
        packIndex={index}
        {...props}
      />
    );
  });

  let inputFields = [
    {
      value: "alias",
      placeholder: "Alias (E.G. 'Super Silver Haze') ",
      classes: "w-3/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
    },
    {
      value: "sotiId",
      placeholder: "SOTI ID",
      classes: "w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
    },
    {
      value: "sttId" || "",
      placeholder: "STT ID",
      classes: "w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-0 text-grey"
    }
  ].map((input, index) => {
    return (
      <input
        key={input.value + input.placeholder}
        className={input.classes}
        placeholder={input.placeholder}
        value={variant[input.value]}
        type="text"
        name={input.placeholder}
        onChange={e => {
          variant[input.value] = e.target.value;
          variants.splice(props.variantIndex, 1, variant);
          props.updateNewProduct({
            type: "variants",
            variants: variants
          });
        }}
      />
    );
  });

  return (
    <div className="w-full shadow-md overflow-hidden rounded mt-3 mb-2">
      <p className="uppercase bg-teal w-full p-2 text-center font-bold text-white text-xl">
        {props.companyName}
      </p>
      <div className="p-4">
        <div className="w-full flex justify-end my-2 ">
          <input
            type="button"
            className="bg-red text-white uppercase p-2 rounded border-0 hover:bg-red-dark cursor-pointer"
            value="delete company variant"
            onClick={e => {
              e.preventDefault();
              props.deleteCompanyVariant({
                _id: variants[props.variantIndex]._id,
                variants: variants,
                companies: props.newProduct.companies
              });
            }}
          />
        </div>
        <div className="inline-flex w-full">
          {inputFields}
        
        </div>

        <textarea
          cols="4"
          rows="80"
          className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
          placeholder="Summary"
          name="summary"
          value={variant.summary}
          onChange={e => {
            variant.summary = e.target.value;
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
        />
        <textarea
          cols="4"
          rows="80"
          className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
          placeholder="description (separate paragraphs *)"
          name="description"
          value={variant.description.join("\n")}
          onChange={e => {
            variant.description = e.target.value.split("\n");
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
        />
        {attributes}
        <div className="w-full flex justify-end mt-4">
          <div
            onClick={e => {
              e.preventDefault();
              let newVariants = props.newProduct.variants;
              newVariants[props.variantIndex].attributes.push({
                size: 0,
                price: 0,
                stock: [{ amount: 0, rop: 0, noe: 0, sold: 0 }]
              });
              props.togglePackInput(newVariants);
            }}
            className="inline-flex items-center flex bg-grey-lighter px-6 justify-end text-right cursor-pointer scale-items mr-1"
          >
            <div className="-ml-8 w-10 bg-teal p-2 flex items-center justify-center cursor-pointer hover:bg-teal-dark rounded-full ">
              <FontAwesomeIcon icon={faPlus} className="text-white fa-lg" />
            </div>
            <div className="p-2 uppercase font-bold ml-2">Add More Options</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
