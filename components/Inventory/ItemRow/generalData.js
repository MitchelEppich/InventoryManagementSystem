import { genKey } from "../../scripts";
import CompanyCircles from "./companyCircles";

const index = props => {
  let distro = props.newProduct.distro;
  let itemColumns = props.misc.iHeadings.map((column, index) => {
    let val = props.item[column] || "";
    switch (column) {
      case "name":
        return null;
      case "company":
        val = <CompanyCircles companyNames={props.item.variants} {...props} />;
        break;
      case "status":
        val =
          props.item["stock"][distro].amount > props.item["stock"][distro].rop
            ? "stocked"
            : "low";
        break;
      case "location":
        val = props.item[column][distro].section;
        break;
      case "ROP (Loose)":
        val = props.item["stock"][distro].rop;
      case "NOE (Loose)":
        val = props.item["stock"][distro].noe;
        break;
      case "qty (Loose)":
        val = props.item["stock"][distro].amount;
        break;
      case "breeder":
        val = props.item[column];
        break;
      case "category":
        val = props.item[column] == 0 ? "strain" : "merch";
        break;
      default:
        break;
    }
    return (
      <div
        key={genKey()}
        className="w-32 p-2 text-sm text-center uppercase flex justify-center items-center"
      >
        {val}
      </div>
    );
  });

  return <React.Fragment>{itemColumns}</React.Fragment>;
};
export default index;
