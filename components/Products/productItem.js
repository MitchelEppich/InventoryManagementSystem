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
        className={
          "w-5 h-5 pt-1 mx-auto rounded-full border border-crimson text-center text-xxs " +
          color
        }
      >
        {accronym}
      </span>
    );
  });

  return (
    <div
      onClick={() => {
        if (!editing) {
          props.toggleEdit(props._id);
        }
      }}
      className={
        "h-auto w-full flex flex-wrap justify-start bg-teal-dark border border-1 border-white hover:border-teal-dark " +
        (editing ? "" : "cursor-pointer")
      }
    >
      {/* <div
        onClick={e => {
          if (editing) {
            e.stopPropagation();
            props.submitInventoryEdit(props.misc.currentEdit);
          }
        }}
        className="h-full w-100 pt-4 text-sm text-crimson text-center cursor-pointer"
      >
        {editing ? "SAVE" : props.index + 1}
      </div> */}

      {editing ? (
        <form className="h-12 py-1 flex justify-between">
          <input
            onChange={e => {
              props.handleInventoryEdit("name", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="text"
            min="0"
            aria-label="name"
            name="name"
            defaultValue={props.name}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("id", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="text"
            min="0"
            aria-label="id"
            name="id"
            defaultValue={props.id}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("company", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="text"
            min="0"
            aria-label="company"
            name="company"
            defaultValue={props.company}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("description", e.target.value);
            }}
            className="h-full w-300 pt-1 px-1 text-sm text-crimson text-center"
            type="text"
            min="0"
            aria-label="description"
            name="description"
            defaultValue={props.description}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("barcode", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="number"
            min="0"
            aria-label="barcode"
            name="barcode"
            defaultValue={props.barcode}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("category", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="text"
            min="0"
            aria-label="category"
            name="category"
            defaultValue={props.category}
          />
          <input
            onChange={e => {
              props.handleInventoryEdit("price", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-crimson text-center"
            type="number"
            min="0"
            aria-label="price"
            name="price"
            defaultValue={props.rop}
          />
        </form>
      ) : (
        <React.Fragment>
          <div className="h-full w-100 py-2 text-sm text-crimson text-left">
            {props.name.replace("Cannabis Seeds", "")}
          </div>
          <div className="h-full w-100 pt-4 text-sm text-crimson text-center">
            {props._id}
          </div>
          <div className="h-full w-100 pt-3 text-sm text-crimson text-center flex flex-wrap">
            {companyCircles}
          </div>
          <div className="h-full w-300 py-2 px-8 text-sm text-crimson text-left">
            {props.description}
          </div>
          <div className="h-full w-100 pt-4 text-sm text-crimson text-center">
            {props.barcode}
          </div>
          <div className="h-full w-100 pt-4 text-sm text-crimson text-center">
            {props.category}
          </div>
          <div className="h-full w-100 pt-4 text-sm text-crimson text-center">
            ${props.price}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default item;
