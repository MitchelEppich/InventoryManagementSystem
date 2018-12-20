
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import Item from "./item"


const index = props => {


  let tHeadings = props.misc.tHeadings.map((heading, index) => {
    let lastCol = "";
    let width = heading.toLowerCase() == "name" ? "w-1/8" : "w-1/16"
    if(index == props.misc.tHeadings.length - 1){lastCol = ""}
    return (
      <div key={index} className={"h-8 "+ width + " pt-2 border border-salmon border-r-0 border-t-0 border-b-0 bg-crimson hover:bg-salmon-light cursor-pointer text-xs text-white text-center uppercase" + lastCol}>{heading}</div>
    );
  });

  let items = props.misc.inventory.map((item, index) => {
    return (
      <Item key={index} {...props} {...item} index={index} />
    );
  })




  return (
    <div className="h-700 w-full">
      <div className="w-full pr-4 flex flex-wrap justify-between bg-crimson rounded-t-lg">
        <div className="h-8 w-1/16 pt-2 hover:bg-salmon-light cursor-pointer text-xs text-white text-center rounded-tl-lg">No</div>
        {tHeadings}
      </div>
      <div className="h-600 w-full overflow-y-scroll rounded-b-lg">
        {items}
      </div>
    </div>
  );
};

export default index;
