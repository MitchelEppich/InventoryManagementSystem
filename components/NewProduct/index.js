import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MerchForm from "./merchForm";
import StrainForm from "./strainForm";

const index = props => {
  let formType;
  switch (props.newProduct.formType) {
    case "strain":
      formType = <StrainForm {...props} />;
      break;
    case "merch":
      formType = <MerchForm {...props} />;
      break;
    default:
      break;
  }
  return (
    <div className="w-full">
      <div className="w-full mx-auto text-center py-4">
        <h2 className="text-3xl font-bold uppercase text-teal">
          Add New Product
        </h2>
      </div>
      <div className="pb-24 full flex flex-wrap justify-between content-center rounded-b-lg">
        {formType}
      </div>
    </div>
  );
};

export default index;
