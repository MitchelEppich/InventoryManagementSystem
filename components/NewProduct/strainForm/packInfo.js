const index = props => {
  let companies = props.newProduct.companies;
  let company = companies[props.variantIndex];
  let pack = company.attributes[props.packIndex];
  let distro = props.newProduct.distro;

  return (
    <div className="w-full">
      <p className="uppercase bg-grey-light w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Pack Variant {props.packIndex + 1 + "/" + company.attributes.length}
      </p>
      <div className="inline-flex w-full flex items-center justify-between">
        <select
          name="size"
          onChange={e => {
            company.attributes[props.packIndex].size = parseInt(e.target.value);
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
          className="w-1/5 uppercase p-2 pb-2 h-10 mx-2 pl-2 text-grey-light border-2 border-input-grey"
        >
          <option>Select a Size...</option>
          <option value="3">3 Packs</option>
          <option value="5">5 Packs</option>
          <option value="7">7 Packs</option>
          <option value="10">10 Packs</option>
          <option value="15">15 Packs</option>
          <option value="25">25 Packs</option>
          <option value="50">50 Packs</option>
        </select>
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="price"
          value={pack.price || "Price"}
          type="number"
          name="price"
          onChange={e => {
            company.attributes[props.packIndex].price = parseFloat(
              e.target.value
            );
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="amount"
          value={pack.stock[distro].amount || "Amount"}
          type="number"
          name="amount"
          onChange={e => {
            company.attributes[props.packIndex].stock[distro].amount = parseInt(
              e.target.value
            );
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="ROP"
          value={pack.stock[distro].rop || "ROP"}
          type="number"
          name="rop"
          onChange={e => {
            company.attributes[props.packIndex].stock[distro].rop = parseInt(
              e.target.value
            );
            company.attributes[props.packIndex].stock[distro].noe = parseInt(
              e.target.value
            );
            companies.splice(props.variantIndex, 1, company);
            props.updateNewProduct({
              type: "companies",
              companies: companies
            });
          }}
        />
        <input
          type="button"
          className="bg-red text-white uppercase p-2 rounded border-0 hover:bg-red-dark cursor-pointer"
          value="Remove"
          onClick={e => {
            e.preventDefault();
            let newCompanies = props.newProduct.companies;
            newCompanies[props.variantIndex].attributes.splice(
              props.packIndex,
              1
            );
            props.togglePackInput(newCompanies);
          }}
        />
      </div>
    </div>
  );
};

export default index;
