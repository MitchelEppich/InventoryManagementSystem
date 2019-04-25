import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const item = props => {
  let showAll = props.misc.showAllId == props.index; //show extra company specific data
  let editing = props._id == props.misc.currentEdit._id ? true : false;
  let country = 0;
  let iSubHeadings = props.misc.iSubHeadings;
  let subHeadings = iSubHeadings.map((heading, index) => {
    return (
      <span
        key={index}
        className="text-grey w-1/8 px-2 py-2 text-sm capitalize"
      >
        {heading}
      </span>
    );
  });
  let companyData = [];
  let companyCircles = props.company.map((val, index) => {
    companyData.push(
      <div className="w-full flex pl-4 bg-grey-light text-grey p-2">
        {iSubHeadings.map((heading, i) => {
          if (["company", "alias"].includes(heading)) {
            return (
              <div key={i} className=" w-1/8 text-sm text-grey text-left pl-2">
                {props[heading][index]}
              </div>
            );
          }
          if (["sotiId", "sttId"].includes(heading)) {
            return (
              <div key={i} className=" w-1/8 text-sm text-grey text-left pl-2">
                {props[heading]}
              </div>
            );
          }
          if (heading == "price") {
            return (
              <div key={i} className=" w-1/8 text-sm text-grey text-left pl-2">
                {props[heading][index].join("/")}
              </div>
            );
          }
          if (heading == "status") {
            let packStatus = [5, 10, 25],
              qty,
              rop,
              status;
            packStatus = packStatus.map((packSize, j) => {
              qty = props.qtyPacked[country][index][j];
              rop = props.qtyPackedROP[country][index][j];
              status =
                rop / qty < 0.3 ? "low" : rop / qty > 0.8 ? "high" : "medium";
              return status;
            });
            return (
              <div key={i} className="w-1/8 text-sm text-grey text-left pl-2">
                {packStatus.join("/")}
              </div>
            );
          }
          return (
            <div
              key={index}
              className=" w-1/8 text-sm text-grey text-left pl-2"
            >
              {props[heading][country][index].join("/")}
            </div>
          );
        })}
      </div>
    );
    let color = "",
      accronym;
    switch (val) {
      case "beaver seeds":
        color = "bg-green text-white";
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

  let editable = ["qtyLoose", "qtyLooseROP"];
  let itemColumns = [
    "status",
    "qtyLoose",
    "qtyLooseROP",
    "qtyLooseNOE",
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
    if (["qtyLoose", "qtyLooseROP", "qtyLooseNOE"].includes(column)) {
      return (
        <div className=" w-1/8 text-sm text-grey text-center">
          {props[column][country]}
        </div>
      );
    }
    return (
      <div className=" w-1/8 text-sm text-grey text-center">
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
        <React.Fragment>
          <div className="w-full flex pl-4 bg-grey-light text-grey p-2">
            {subHeadings}
          </div>
          {companyData}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default item;
