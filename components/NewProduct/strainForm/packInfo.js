import { genKey } from "../../scripts";

const index = props => {
  let variants = props.newProduct.variants;
  let variant = variants[props.variantIndex];
  let pack = variant.attributes[props.packIndex];
  let distro = props.newProduct.distro;

  return (
    <div className="w-full">
      <p className="uppercase bg-grey-lighter w-full p-2 mt-3 mb-2 text-center text-grey text-lg rounded">
        Pack Variant {props.packIndex + 1 + "/" + variant.attributes.length}
      </p>
      <div className="inline-flex w-full flex items-center justify-between">
        <select
          name="size"
          value={pack.size}
          onChange={e => {
            variant.attributes[props.packIndex].size = parseInt(e.target.value);
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
          className="w-1/5 uppercase p-2 pb-2 h-10 mx-2 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option>Select a Size...</option>
          {[
            "3",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40",
            "50",
            "100",
            "200",
            "500"
          ].map(value => {
            return <option value={value}>{value} Pack</option>;
          })}
        </select>
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="price"
          value={pack.price || ""}
          type="number"
          name="price"
          min="0"
          onChange={e => {
            variant.attributes[props.packIndex].price = parseFloat(
              e.target.value
            );
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="amount"
          value={pack.stock[distro].amount || ""}
          type="number"
          name="amount"
          min="0"
          onChange={e => {
            variant.attributes[props.packIndex].stock[distro].amount = parseInt(
              e.target.value
            );
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="ROP"
          value={pack.stock[distro].rop || ""}
          type="number"
          name="rop"
          min="0"
          onChange={e => {
            variant.attributes[props.packIndex].stock[distro].rop = parseInt(
              e.target.value
            );
            variant.attributes[props.packIndex].stock[distro].noe = parseInt(
              e.target.value
            );
            variants.splice(props.variantIndex, 1, variant);
            props.updateNewProduct({
              type: "variants",
              variants: variants
            });
          }}
        />
        <input
          type="button"
          className="bg-red text-white uppercase p-2 rounded border-0 hover:bg-red-dark cursor-pointer"
          value="Remove"
          onClick={e => {
            e.preventDefault();
            let newVariants = props.newProduct.variants;
            props.deletePackVariant({
              _id: pack._id,
              variants: newVariants,
              variantIndex: props.variantIndex,
              packIndex: props.packIndex
            });
          }}
        />
      </div>
    </div>
  );
};

export default index;
