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
    let color = "";
    switch (val) {
      case "BVR":
        color = "bg-green";
        break;
      case "CKS":
        color = "bg-red";
        break;
      case "SON":
        color = "bg-white";
        break;
      case "SWG":
        color = "bg-yellow";
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

  console.log(props);

  return (
    <div
      onClick={() => {
        if (!editing) {
          props.toggleEdit(props._id);
        }
      }}
      className={
        "h-auto w-full flex justify-between bg-white border border-1 border-grey-light hover:border-salmon-light py-2 flex justify-center items-center " +
        (editing ? "" : "cursor-pointer")
      }
    >
      <div
        onClick={e => {
          if (editing) {
            e.stopPropagation();
            props.submitInventoryEdit(props.misc.currentEdit);
          }
        }}
        className="h-full w-1/16 text-sm text-grey text-center cursor-pointer"
      >
        {editing ? "SAVE" : props.index + 1}
      </div>

      {productView ? (
        <React.Fragment>
          {editing ? (
            <form className="h-12 w-15/16 py-1 flex justify-between">
              <input
                onChange={e => {
                  props.handleInventoryEdit("name", e.target.value);
                }}
                className="h-full w-1/8 pt-1 text-sm text-grey text-center"
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
                className="h-full w-1/16 text-sm text-grey text-center"
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
                className="h-full w-1/16 text-sm text-grey text-center"
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
                className="h-full w-1/2 px-1 text-sm text-grey text-center"
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
                className="h-full w-1/16 text-sm text-grey text-center"
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
                className="h-full w-1/16 text-sm text-grey text-center"
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
                className="h-full w-1/16 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="price"
                name="price"
                defaultValue={props.rop}
              />
            </form>
          ) : (
            <React.Fragment>
              <div className="h-full w-1/8 text-sm text-grey text-left">
                {props.name}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.id}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center flex flex-wrap">
                {companyCircles}
              </div>
              <div className="h-full w-1/2  px-8 text-sm text-grey text-left">
                {props.description}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.barcode}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.category}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                ${props.price}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="h-full w-1/8 text-sm text-grey text-left">
            {props.name}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center">
            {props.id}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center flex flex-wrap">
            {companyCircles}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center">
            {props.status}
          </div>
          {editing ? (
            <form className="h-full w-3/8 py-1 flex justify-between">
              <input
                onChange={e => {
                  props.handleInventoryEdit("qtyP", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="quantityPacked"
                name="qtyP"
                defaultValue={props.qtyP}
              />
              <input
                onChange={e => {
                  props.handleInventoryEdit("qtyL", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="quantityLoose"
                name="qtyL"
                defaultValue={props.qtyL}
              />
              <input
                onChange={e => {
                  props.handleInventoryEdit("lowLim", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="lowerLimit"
                name="lowLim"
                defaultValue={props.lowLim}
              />
              <input
                onChange={e => {
                  props.handleInventoryEdit("upLim", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="upperLimit"
                name="upLim"
                defaultValue={props.upLim}
              />
              <input
                onChange={e => {
                  props.handleInventoryEdit("sold", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="totalSold"
                name="sold"
                defaultValue={props.sold}
              />
              <input
                onChange={e => {
                  props.handleInventoryEdit("rop", e.target.value);
                }}
                className="h-full w-1/6 text-sm text-grey text-center"
                type="number"
                min="0"
                aria-label="rop"
                name="rop"
                defaultValue={props.rop}
              />
            </form>
          ) : (
            <React.Fragment>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.qtyP}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.qtyL}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.lowLim}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.upLim}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.sold}
              </div>
              <div className="h-full w-1/16 text-sm text-grey text-center">
                {props.rop}
              </div>
            </React.Fragment>
          )}
          <div className="h-full w-1/16 text-sm text-grey text-center">
            {props.noe}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center">
            {props.location}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center">
            {props.category}
          </div>
          <div className="h-full w-1/16 text-sm text-grey text-center">
            ${props.price}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default item;
