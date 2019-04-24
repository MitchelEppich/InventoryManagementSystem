import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MerchForm from "./merchForm";
import StrainForm from "./strainForm";
import {
  faPlus,
  faCannabis,
  faMailBulk,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";

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
          Select an option to proceed:
        </h2>
      </div>
      <div className="w-main mx-auto justify-center flex mt-4 p-2">
        <div className="border-2 w-150 rounded border-grey-lighter scale-items mx-2 text-center">
          <div className="p-4">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-grey-lighter fa-4x"
            />
          </div>
          <div className="text-base uppercase text-white mt-3 bg-teal p-2">
            Strains
          </div>
        </div>
        <div className="border-2 w-150 rounded border-grey-lighter scale-items mx-2 text-center">
          <div className="p-4">
            <FontAwesomeIcon
              icon={faMailBulk}
              className="text-grey-lighter fa-4x"
            />
          </div>
          <div className="text-base uppercase text-white mt-3 bg-teal p-2">
            Merchandising
          </div>
        </div>
      </div>
      <div className="pb-24 pt-8 full flex flex-wrap justify-between content-center rounded-b-lg">
        {formType}
      </div>
    </div>
  );
};

export default index;
