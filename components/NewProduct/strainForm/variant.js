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
    <div className="border border-black m-1 w-full">
      <label>{props.variant}</label>
      <input type="text" placeholder="Alias" />
      <input type="text" placeholder="sotiId" />
      <input type="number" placeholder="sttId" />
      <textarea placeholder="Summary" />
      <textarea placeholder="Description" />
      <div className="flex flex-wrap w-full">{packs}</div>
      <button
        type="button"
        className="bg-green"
        onClick={e => {
          e.preventDefault();
          let newCompanies = props.newProduct.companies;
          newCompanies[props.variantIndex].packs.push({});
          props.togglePackInput(newCompanies);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default index;
