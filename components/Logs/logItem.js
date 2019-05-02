import moment from "moment"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const item = props => {



  return (
    <div className="h-auto w-full flex justify-between bg-white border border-1 border-grey-lightest hover:border-teal-dark" >
    <div className="h-full w-1/6 pt-2 text-sm text-crimson text-center">{props.index + 1}</div>
        <div className="h-full w-1/6 py-2 text-sm text-crimson text-center">{props.name}</div> 
        <div className="h-full w-1/3 py-2 text-sm text-crimson text-center capitalize">{props.action}</div> 
        <div className="h-full w-1/6 py-2 px-8 text-sm text-crimson text-left capitalize">{props.machine}</div>
        <div className="h-full w-1/6 py-2 text-sm text-crimson text-center">{moment(props.date).format("MMM Do YY, H:mm:ss")}</div> 
    </div>
  );
};

export default item;
