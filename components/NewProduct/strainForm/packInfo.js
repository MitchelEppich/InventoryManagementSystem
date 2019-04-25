const index = props => {
  return (
    <div className="border border-blue m-1 w-full">
      <input
        type="button"
        className="bg-red"
        value="Remove"
        onClick={e => {
          e.preventDefault();
          let newCompanies = props.newProduct.companies;
          delete newCompanies[props.variantIndex].packs[props.packIndex];
          props.togglePackInput(newCompanies);
        }}
      />
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <input type="number" />
      <input type="number" />
    </div>
  );
};

export default index;
