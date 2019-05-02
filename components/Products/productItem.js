import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

let CompanyCircle = _ => {
  let color = "",
    accronym;
  [
    { name: "beaver seeds", color: "bg-green text-white", accronym: "BVR" },
    { name: "crop king seeds", color: "bg-red text-white", accronym: "CKS" },
    { name: "sonoma seeds", color: "bg-white", accronym: "SON" },
    { name: "sunwest genetics", color: "bg-yellow", accronym: "SWG" }
  ].map((company, index) => {
    if (_.toLowerCase().includes(company.name.toLowerCase())) {
      color = company.color;
      accronym = company.accronym;
    }
    return;
  });

  return (
    <div
      key={Math.random() * 1000000}
      className=" w-32 text-sm text-grey text-left p-2"
    >
      <span
        style={{ height: "25px", width: "25px" }}
        className={
          " rounded-full font-bold shadow-md flex items-center justify-center text-xs " +
          color
        }
      >
        {accronym}
      </span>
    </div>
  );
};

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
        <div className="w-full inline-flex flex p-1 items-center">
          <div className="w-1/5 py-2 text-base capitalize text-grey text-left pl-3">
            {props.alias.toLowerCase().replace("cannabis seeds", "")}
          </div>
          <div className="w-28 px-2 text-sm uppercase text-grey text-center">
            {CompanyCircle(props.company.name)}
          </div>
          <div className="w-28 px-2 text-sm uppercase text-grey text-center">
            {props.sotiId}
          </div>
          <div className="w-28 px-2 text-sm text-grey text-center">
            {props.sttId}
          </div>
          <div className="w-48 px-2 text-sm uppercase text-grey text-center">
            {props.name}
          </div>
          <div className="w-28 px-2 text-sm uppercase text-grey text-center">
            {props.breeder}
          </div>
          <div className="w-28 px-2 text-sm uppercase text-grey text-center">
            {props.location[0].section}
          </div>
          <div className="w-28 px-2 text-sm uppercase text-grey text-center">
            {props.stock[0].sold || 0}
          </div>
          <div className="w-48 px-2 text-sm uppercase text-grey text-center">
            {moment(props.releaseDate).format("LLL")}
          </div>
          {/* <div className="h-full w-1/6 pt-4 text-sm text-grey text-center">
            {props.category}
        </div>*/}
          {/*<div className="h-full w-1/6 pt-4 text-sm text-grey text-center">
            ${props.price}
          </div>{" "} */}
        </div>
      )}
    </div>
  );
};

export default item;
