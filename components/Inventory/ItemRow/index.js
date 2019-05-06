import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle,
  faAngleDown,
  faAngleUp,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import { genKey } from "../../scripts";
import SubHeadings from "./subHeadings";
import CompanyData from "./companyData";
import GeneralData from "./generalData";

const item = props => {
  let showAll = props.misc.showAllId == props.index; //show extra company specific data

  return (
    <div
      className={` w-full ${
        showAll ? "border-teal-darker border" : ""
      }  hover:border-teal-light`}
    >
      <div
        onClick={() => {
          let id = showAll ? null : props.index;
          props.toggleShowAll(id);
        }}
        className={` h-auto w-full flex justify-start ${
          showAll
            ? "bg-teal-darker text-white"
            : "bg-white text-grey border border-grey-lighter"
        }  py-2 uppercase hover:border-teal-light items-center cursor-pointer`}
      >
        <div className="w-1/4 p-2 text-sm text-left">
          {props.item.name.toLowerCase().replace("Cannabis Seeds", "")}
        </div>
        <GeneralData {...props} />
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={showAll ? faAngleUp : faAngleDown}
            className="fa-2x pr-2 -ml-2 mr-2"
          />
        </div>
        {showAll ? (
          <div
            onClick={() => {
              props.toggleFormType("strain");
              Router.push("/newProduct");
              props.toggleEdit(props);
            }}
            className="w-32 text-center"
          >
            <FontAwesomeIcon icon={faEdit} className="fa-lg text-white" />
          </div>
        ) : null}
      </div>
      {showAll ? (
        <React.Fragment>
          <div className="w-full flex bg-teal-lightest shadow py-2 pl-2">
            <SubHeadings {...props} />
          </div>
          <CompanyData {...props} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default item;
