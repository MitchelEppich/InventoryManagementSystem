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
  // let companyCircles = props.company.map((val, index) => {
  //   let color = "",
  //     accronym;
  //   switch (val) {
  //     case "beaver seeds":
  //       color = "bg-green text-white";
  //       accronym = "BVR";
  //       break;
  //     case "crop king seeds":
  //       color = "bg-red text-white";
  //       accronym = "CKS";
  //       break;
  //     case "sonoma seeds":
  //       color = "bg-white";
  //       accronym = "SON";
  //       break;
  //     case "sunwest genetics":
  //       color = "bg-yellow";
  //       accronym = "SWG";
  //       break;
  //   }
  //   return (
  //     <span
  //       key={index}
  //       style={{ height: "35px", width: "35px" }}
  //       className={
  //         "mx-auto rounded-full font-bold shadow-md flex items-center justify-center text-xs " +
  //         color
  //       }
  //     >
  //       {accronym}
  //     </span>
  //   );
  // });

  return (
    <div
      onClick={() => {
        if (!editing) {
          props.toggleEdit(props._id);
        }
      }}
      className={
        "h-auto w-full flex flex-wrap justify-start bg-white border border-grey-lighter hover:border-teal-dark items-center " +
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
        className="h-full w-100 pt-4 text-sm text-grey text-center cursor-pointer"
      >
        {editing ? "SAVE" : props.index + 1}
      </div> */}

      {editing ? (
        <form className="h-12 py-1 flex justify-between">
          <input
            onChange={e => {
              props.handleInventoryEdit("name", e.target.value);
            }}
            className="h-full w-200 pt-1 text-sm text-grey text-center"
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
            className="h-full w-100 pt-1 text-sm text-grey text-center"
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
            className="h-full w-100 pt-1 text-sm text-grey text-center"
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
            className="h-full w-300 pt-1 px-1 text-sm text-grey text-center"
            type="text"
            min="0"
            aria-label="description"
            name="description"
            defaultValue={props.description}
          />
          {/* <input
            onChange={e => {
              props.handleInventoryEdit("barcode", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-grey text-center"
            type="number"
            min="0"
            aria-label="barcode"
            name="barcode"
            defaultValue={props.barcode}
          /> */}
          <input
            onChange={e => {
              props.handleInventoryEdit("category", e.target.value);
            }}
            className="h-full w-100 pt-1 text-sm text-grey text-center"
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
            className="h-full w-100 pt-1 text-sm text-grey text-center"
            type="number"
            min="0"
            aria-label="price"
            name="price"
            defaultValue={props.rop}
          />
        </form>
      ) : (
        <div className="w-full inline-flex flex justify-around">
          <div className="h-full w-1/6 py-2 text-base text-grey text-left pl-3">
            {props.name.replace("Cannabis Seeds", "")}
          </div>
          <div className="h-full w-24 pt-4 text-sm text-grey text-center">
            {props._id}
          </div>
          {/* <div className="h-full w-1/6 pt-3 text-sm text-grey text-center flex flex-wrap">
            {companyCircles}
          </div> */}
          <div className="h-full w-1/2 py-2 px-8 text-sm text-grey text-left">
            {props.description}
          </div>
          {/* <div className="h-full w-100 pt-4 text-sm text-grey text-center">
            {props.barcode}
          </div> */}
          <div className="h-full w-1/6 pt-4 text-sm text-grey text-center">
            {props.category}
          </div>
          <div className="h-full w-1/6 pt-4 text-sm text-grey text-center">
            ${props.price}
          </div>
        </div>
      )}
    </div>
  );
};

export default item;
