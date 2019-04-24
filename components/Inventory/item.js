import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const item = props => {
  let productView = props.productView;
  let showAll = props.misc.showAllId == props.index;
  let editing = props._id == props.misc.currentEdit._id ? true : false;
  let companyCircles = props.company.map((val, index) => {
    let color = "",
      accronym;
    switch (val) {
      case "beaver seeds":
        color = "bg-green ";
        accronym = "BVR";
        break;
      case "crop king seeds":
        color = "bg-red text-white";
        accronym = "CKS";
        break;
      case "sonoma seeds":
        color = "bg-white";
        accronym = "SON";
        break;
      case "sunwest genetics":
        color = "bg-yellow";
        accronym = "SWG";
        break;
    }
    return (
      <span
        key={index}
        style={{ height: "35px", width: "35px" }}
        className={
          "mx-auto rounded-full font-bold shadow-md flex items-center justify-center text-xs " +
          color
        }
      >
        {accronym}
      </span>
    );
  });
  let subHeadings = props.misc.iSubHeadings.map((heading, index) => {
    return (
      <span key={index} className="text-grey w-1/8 px-2 py-2 text-sm uppercase">
        {heading}
      </span>
    );
  });

  let editable = ["qty(loose)", "R.O.P."];
  let itemColumns = [
    "status",
    "qty(loose)",
    "R.O.P.",
    "N.O.E.",
    "sold(total)",
    "breeder",
    "location",
    "category"
  ].map((column, index) => {
    if (editable.includes(column) && editing) {
      return (
        <input
          onChange={e => {
            props.handleInventoryEdit(column, e.target.value);
          }}
          className="w-1/8 pt-1 text-sm text-grey text-center"
          type="number"
          min="0"
          aria-label={props[column]}
          name={props[column]}
          defaultValue={props[column]}
        />
      );
    }
    return (
      <div className=" w-1/8  text-sm text-grey text-center">
        {props[column]}
      </div>
    );
  });

  return (
    <div className="w-full">
      <div
        onClick={() => {
          let id = showAll ? null : props.index;
          props.toggleShowAll(id);
        }}
        className={
          "h-auto w-full flex justify-start bg-white border border-1 border-grey-light py-2 hover:border-teal-light items-center "
        }
      >
        <div className="w-300 py-2 pl-2 text-sm text-grey text-left">
          {props.name.replace("Cannabis Seeds", "")}
        </div>
        <div className="w-1/8 pt-1 text-sm text-grey text-center flex flex-wrap">
          {companyCircles}
        </div>
        {itemColumns}
      </div>
      {showAll ? (
        <div className="w-full flex pl-4 bg-grey-light text-grey p-2">
          {subHeadings}
        </div>
      ) : null}
    </div>
  );
};

export default item;
