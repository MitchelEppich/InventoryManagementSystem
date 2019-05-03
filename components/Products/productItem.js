import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import CompanyCircles from "../Inventory/ItemRow/companyCircles";
import moment from "moment";

const item = props => {
  return (
    <div className="h-auto w-full flex flex-wrap justify-start bg-white border border-grey-lighter hover:border-teal-dark items-center cursor-pointer">
      <div className="w-full inline-flex flex p-1 items-center">
        <div className="w-1/5 py-2 text-base capitalize text-grey text-left pl-3">
          {props.alias.toLowerCase().replace("cannabis seeds", "")}
        </div>
        <div className="w-28 px-2 text-sm uppercase text-grey text-center">
          <CompanyCircles
            companyNames={[{ company: { name: props.company.name } }]}
            {...props}
          />
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
      </div>
    </div>
  );
};

export default item;
