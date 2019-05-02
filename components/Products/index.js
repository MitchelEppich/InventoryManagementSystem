import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import ProductItem from "./productItem";
import InventoryFilters from "../Inventory/inventoryFilters";

const index = props => {
  let tHeadings = props.misc.pHeadings.map((heading, index) => {
    let lastCol = "",
      bg = "bg-teal";
    let width;
    if (heading.toLowerCase() == "alias") {
      width = "w-1/5";
    } else if (heading.toLowerCase() == "strain") {
      width = "w-48";
    } else if (heading.toLowerCase() == "release date") {
      width = "w-48";
    } else {
      width = "w-28";
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
          width +
          " p-2 " +
          bg +
          " hover:bg-teal-dark cursor-pointer text-sm text-white text-center uppercase"
        }
      >
        {heading}
      </div>
    );
  });
  let items = [].concat
    .apply(
      [],
      props.misc.inventory.map(a =>
        a.variants.map(b => {
          return {
            ...b,
            breeder: a.breeder,
            name: a.name,
            location: a.location,
            stock: a.stock
          };
        })
      )
    )
    .sort((a, b) => {
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
        return <ProductItem key={index} {...props} {...item} index={index} />;
      } else {
        return null;
      }
    } else {
      return <ProductItem key={index} {...props} {...item} index={index} />;
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
      <div className="w-full pr-4 mt-2 pt-2 flex overflow-hidden justify-between bg-teal rounded-t-lg rounded-tl-lg">
        {/* <div
          onClick={() => {
            props.setOrderBy(null);
          }}
          className="h-8 w-1/16 pt-2 hover:bg-teal-dark cursor-pointer text-xs text-white text-center rounded-tl-lg"
        >
          No
        </div> */}
        {tHeadings}
      </div>
      <div className="h-600 w-full overflow-y-scroll rounded-b-lg">{items}</div>
    </div>
  );
};

export default index;
