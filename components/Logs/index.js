import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import Item from "./logItem";
import InventoryFilters from "../Inventory/inventoryFilters";

const index = props => {
  let tHeadings = props.misc.lHeadings.map((heading, index) => {
    let lastCol = "",
      bg = "bg-teal";
    let width;
    if (heading.toLowerCase() == "action") {
      width = "w-1/3";
    } else {
      width = "w-1/6";
    }
    if (index == props.misc.pHeadings.length - 1) {
      lastCol = "";
    }
    if (props.misc.orderBy == index) {
      bg = "bg-teal-dark";
    }
    return (
      <div
        key={index}
        onClick={() => {
          props.setOrderBy(index);
        }}
        className={
          "h-8 " +
          width +
          " pt-2 border border-salmon border-r-0 border-t-0 border-b-0 " +
          bg +
          " hover:bg-teal-dark cursor-pointer text-xs text-white text-center uppercase" +
          lastCol
        }
      >
        {heading}
      </div>
    );
  });
  let items = props.misc.logs.sort((a, b) => {
    if (props.misc.orderBy != null) {
      if (
        a[Object.keys(a)[props.misc.orderBy + 1]] <
        b[Object.keys(b)[props.misc.orderBy + 1]]
      ) {
        return props.misc.orderByReverse ? 1 : -1;
      }
      if (
        a[Object.keys(a)[props.misc.orderBy + 1]] >
        b[Object.keys(b)[props.misc.orderBy + 1]]
      ) {
        return props.misc.orderByReverse ? -1 : 1;
      }
    }
    // a must be equal to b
    return 0;
  });
  items = items.map((item, index) => {
    if (props.misc.searchValue && props.misc.searchValue.length > 0) {
      if (
        JSON.stringify(item)
          .toLowerCase()
          .includes(props.misc.searchValue.toLowerCase())
      ) {
        return (
          <Item
            key={index}
            productView={true}
            {...props}
            {...item}
            index={index}
          />
        );
      } else {
        return null;
      }
    } else {
      return (
        <Item
          key={index}
          productView={true}
          {...props}
          {...item}
          index={index}
        />
      );
    }
  });

  return (
    <div className="h-700 w-4/5 mx-auto flex flex-wrap justify-between content-center ">
      <div className="w-full mx-auto text-center py-4 mb-4 mt-12">
        <h2 className="text-3xl font-bold uppercase text-teal">Logs</h2>
      </div>
      <div
        onClick={() => props.setVisibleScreen("inventoryFilters")}
        className="h-8 w-32 mx-4 cursor-pointer text-crimson unselectable "
      >
        {/* <h4 className="h-full uppercase leading-loose">
          Filter By
          <FontAwesomeIcon icon={faSlidersH} className="fa-lg ml-3" />
        </h4> */}
      </div>

      {props.misc.visibleScreen != null &&
      props.misc.visibleScreen.includes("inventoryFilters") ? (
        <InventoryFilters {...props} />
      ) : null}
      <div className="h-8 w-64 mx-4 mb-2 text-grey flex">
        <h4 className="h-full w-1/3 uppercase leading-loose">Search:</h4>
        <input
          onChange={e => {
            props.search(e.target.value);
          }}
          className="w-2/3"
          type="text"
        />
      </div>

      <div className="w-full pr-4 flex flex-wrap justify-between bg-teal rounded-t-lg">
        <div
          onClick={() => {
            props.setOrderBy(null);
          }}
          className="h-8 w-1/6 pt-2 hover:bg-teal-dark cursor-pointer text-xs text-white text-center rounded-tl-lg"
        >
          #
        </div>
        {tHeadings}
      </div>
      <div className="h-600 w-full overflow-y-scroll rounded-b-lg">{items}</div>
    </div>
  );
};

export default index;
