import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import Item from "./item";
import InventoryFilters from "./inventoryFilters";

const index = props => {
  let iHeadings = props.misc.iHeadings.map((heading, index) => {
    let lastCol = "",
      bg = "bg-crimson";
    let width = heading.toLowerCase() == "name" ? "w-100" : "w-100";
    if (index == props.misc.iHeadings.length - 1) {
      lastCol = "";
    }
    if (props.misc.orderBy == index) {
      bg = "bg-salmon-light";
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
          " hover:bg-salmon-light cursor-pointer text-xs text-white text-center uppercase" +
          lastCol
        }
      >
        {heading}
      </div>
    );
  });
  let items = props.misc.inventory.sort((a, b) => {
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
  items = props.misc.inventory.map((item, index) => {
    if (props.misc.searchValue && props.misc.searchValue.length > 0) {
      if (
        JSON.stringify(item)
          .toLowerCase()
          .includes(props.misc.searchValue.toLowerCase())
      ) {
        return (
          <Item
            key={index}
            productView={false}
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
          productView={false}
          {...props}
          {...item}
          index={index}
        />
      );
    }
  });

  return (
    <div className="h-700 max-w-1018 mx-auto overflow-scroll flex flex-wrap justify-between content-center">
      <div className="fixed flex justify-between bg-white shadow-md w-full max-w-1018 pt-1">
        <div
          onClick={() => props.setVisibleScreen("inventoryFilters")}
          className=" w-150 ml-48 cursor-pointer text-crimson unselectable    "
        >
          <h4 className="h-full uppercase leading-loose">
            Filter By
            <FontAwesomeIcon icon={faSlidersH} className="fa-lg ml-3" />
          </h4>
        </div>
        {props.misc.visibleScreen != null &&
        props.misc.visibleScreen.includes("inventoryFilters") ? (
          <InventoryFilters {...props} />
        ) : null}
        <div className=" w-300 mr-48 mb-2 text-crimson flex  ">
          <h4 className="h-full w-1/3 uppercase leading-loose">Search:</h4>
          <input
            onChange={e => {
              props.search(e.target.value);
            }}
            className="w-2/3"
            type="text"
          />
        </div>
      </div>
      <div className="h-600">
        <div className="flex">
          {/* <div
            onClick={() => {
              props.setOrderBy(null);
            }}
            className="h-8 w-100 bg-crimson pt-2 hover:bg-salmon-light cursor-pointer text-xs text-white text-center "
          >
            No
          </div> */}
          {iHeadings}
        </div>
        <div className="flex flex-wrap">{items}</div>
      </div>
    </div>
  );
};

export default index;
