
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const item = props => {
    let editing = props.index == props.misc.editIndex ? true : false;

  return (
    <div onClick={() => props.toggleEdit(props.index)} className={"h-12 w-full pt-2 flex justify-between bg-salmon-lighter border border-1 border-white hover:border-salmon-light " + (editing ? "" : "cursor-pointer")} >
        <div onClick={() => {if(editing){props.toggleEdit(props.index);}}} className="h-full w-1/16 pt-2 text-xs text-crimson text-center cursor-pointer">{editing ? "SAVE" : props.index + 1}</div>
        <div className="h-full w-1/8 text-xs text-crimson text-center">{props.name}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.id}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.company}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.status}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.qtyP}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.qtyL}</div>
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.lowLim}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.upLim}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.rop}</div>     
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.noe}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.location}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.category}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.price}</div> 
        <div className="h-full w-1/16 pt-2 text-xs text-crimson text-center">{props.sold}</div> 
    </div>
  );
};

export default item;
