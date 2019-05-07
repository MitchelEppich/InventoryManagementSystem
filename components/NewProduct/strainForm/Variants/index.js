import Variant from "./variant";

const index = props => {
  let variants = props.newProduct.companies.map((companyName, index) => {
    let i = props.newProduct.variants.findIndex((variant, index) => {
      return variant.company.name == companyName;
    });
    return (
      <Variant
        key={index}
        companyName={companyName}
        variantIndex={i}
        {...props}
      />
    );
  });

  return <React.Fragment>{variants}</React.Fragment>;
};

export default index;
