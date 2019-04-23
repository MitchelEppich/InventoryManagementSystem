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
        color = "bg-green";
        accronym = "BVR";
        break;
      case "crop king seeds":
        color = "bg-red";
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
        style={{ height: "30px", width: "30px" }}
        className={
          "mx-auto rounded-full shadow-md flex items-center justify-center text-xxs " +
          color
        }
      >
        {val}
      </span>
    );
  });
  let subHeadings = props.misc.iSubHeadings.map((heading, index) => {
    return (
      <span key={index} className="text-black w-100 px-2 py-2 text-sm">
        {heading}
      </span>
    );
  });

  return (
    <div
      onClick={() => {
        let id = showAll ? null : props.index;
        props.toggleShowAll(id);
      }}
      className={
        "h-auto w-full flex flex-wrap justify-start bg-grey-lightest border border-1 border-white hover:border-teal "
      }
    >
      {/* <div
        onClick={e => {
          if (editing) {
            e.stopPropagation();
            props.submitInventoryEdit(props.misc.currentEdit);
          }
        }}
        className=" w-100 pt-4 text-sm text-black text-center cursor-pointer"
      >
        {editing ? "SAVE" : props.index + 1}
      </div> */}
      <div className=" w-100 py-2 pl-2 text-sm text-black text-left">
        {props.name.replace("Cannabis Seeds", "")}
      </div>
      <div className=" w-100 pt-3 text-sm text-black text-center flex flex-wrap">
        {companyCircles}
      </div>
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.status}
      </div>
      {editing ? (
        <form className=" py-1 flex justify-between">
          <input
            onChange={e => {
              props.handleInventoryEdit("qtyL", e.target.value);
            }}
            className=" w-100 pt-1 text-sm text-black text-center"
            type="number"
            min="0"
            aria-label="quantityLoose"
            name="qtyL"
            defaultValue={props.qtyL}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("rop", e.target.value);
            }}
            className=" w-100 pt-1 text-sm text-black text-center"
            type="number"
            min="0"
            aria-label="rop"
            name="rop"
            defaultValue={props.rop}
          />
        </form>
      ) : (
        <React.Fragment>
          <div className=" w-100 pt-4 text-sm text-black text-center">
            {props.qtyL}
          </div>
          <div className=" w-100 pt-4 text-sm text-black text-center">
            {props.rop}
          </div>
        </React.Fragment>
      )}
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.noe}
      </div>
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.sold}
      </div>
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.breeder}
      </div>
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.location}
      </div>
      <div className=" w-100 pt-4 text-sm text-black text-center">
        {props.category}
      </div>
      {showAll ? <div className="w-full flex pl-4">{subHeadings}</div> : null}
    </div>
  );
};

export default item;
