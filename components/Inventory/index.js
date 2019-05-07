import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import ItemRow from "./ItemRow";
import InventoryFilters from "./inventoryFilters";

const index = props => {
  let iHeadings = props.misc.iHeadings.map((heading, index) => {
    let lastCol = "",
      bg = "bg-teal";
    let width =
      heading.toLowerCase() == "name"
        ? "w-1/4 text-left pl-6"
        : heading.toLowerCase() == "company"
        ? "w-36 text-center"
        : "w-32 text-center";
    if (index == props.misc.iHeadings.length - 1) {
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
          width +
          " p-2 border border-teal border-r-0 border-t-0 border-b-0 " +
          bg +
          " hover:bg-teal-dark  cursor-pointer text-sm text-white  uppercase" +
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
          <ItemRow
            key={index}
            productView={false}
            {...props}
            item={item}
            index={index}
          />
        );
      } else {
        return null;
      }
    } else {
      return (
        <ItemRow
          key={index}
          productView={false}
          {...props}
          item={item}
          index={index}
        />
      );
    }
  });

  return (
    <div className="h-700 w-4/5 mx-auto flex flex-wrap justify-between content-center">
      <div className="fixed flex justify-between bg-white shadow-md w-4/5 pt-1">
        <div
          onClick={() => props.setVisibleScreen("inventoryFilters")}
          className="h-8 w-32 mx-4 cursor-pointer text-crimson unselectable "
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
      </div>
      <div className="w-full pr-4 mt-2 pt-2 flex overflow-hidden justify-start bg-teal rounded-t-lg rounded-tl-lg">
        {/* <div className="flex w-4/5 fixed -mt-1 bg-teal pr-4"> */}
        {/* <div
            onClick={() => {
              props.setOrderBy(null);
            }}
            className="h-8 w-100 bg-teal pt-2 hover:bg-teal-dark cursor-pointer text-xs text-white text-center "
          >
            No
          </div> */}
        {iHeadings}
        {/* </div> */}
      </div>
      <div className="h-600 w-full overflow-y-scroll rounded-b-lg">{items}</div>
    </div>
  );
};

export default index;
