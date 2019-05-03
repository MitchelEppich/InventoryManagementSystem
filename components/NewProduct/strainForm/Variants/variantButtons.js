const index = props => {
  let buttons = props.newProduct.variants.map((variant, index) => {
    return (
      <div
        key={variant + index}
        onClick={() => {
          props.toggleCompanyVariant({
            companyName: variant.company.name,
            companies: props.newProduct.companies
          });
        }}
        className={`${
          props.newProduct.companies.includes(variant.company.name)
            ? "logo--" +
              variant.company.name.replace(/ /g, "").toLowerCase() +
              ""
            : "logo--" +
              variant.company.name.replace(/ /g, "").toLowerCase() +
              "--greyed"
        } h-150 w-150 rounded cursor-pointer`}
      />
    );
  });
  return <React.Fragment>{buttons}</React.Fragment>;
};

export default index;
