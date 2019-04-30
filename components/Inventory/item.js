import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";

const item = props => {
  let showAll = props.misc.showAllId == props.index; //show extra company specific data
  let editing = props._id == props.misc.currentEdit._id ? true : false;
  let distro = props.misc.distro;
  let iSubHeadings = props.misc.iSubHeadings;
  let subHeadings = iSubHeadings.map((heading, index) => {
    if (heading == "alias") {
      return (
        <span key={index} className="text-grey w-48 p-2 text-xs uppercase">
          {heading}
        </span>
      );
    }
    return (
      <span key={index} className="text-grey w-32 p-2 text-xs uppercase">
        {heading}
      </span>
    );
  });
  let companyData = [];
  let companyCircles = props.variants.map((val, index) => {
    let color = "",
      accronym;
    [
      { name: "beaver seeds", color: "bg-green text-white", accronym: "BVR" },
      { name: "crop king seeds", color: "bg-red text-white", accronym: "CKS" },
      { name: "sonoma seeds", color: "bg-white", accronym: "SON" },
      { name: "sunwest genetics", color: "bg-yellow", accronym: "SWG" }
    ].map((company, index) => {
      if (
        val.company.website[0]
          .toLowerCase()
          .includes(company.name.replace(/ /g, "").toLowerCase())
      ) {
        color = company.color;
        accronym = company.accronym;
      }
      return;
    });

    companyData.push(
      <div key={index} className="w-full flex pl-4 bg-white text-grey py-2">
        {iSubHeadings.map((heading, i) => {
          if (heading == "company") {
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                <span
                  key={index}
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
          }
          if (["sotiId", "sttId"].includes(heading)) {
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                {val[heading]}
              </div>
            );
          }
          if (heading == "alias") {
            return (
              <div key={i} className=" w-48 text-sm text-grey text-left p-2">
                {val[heading].replace("Cannabis Seeds", "")}
              </div>
            );
          }
          if (heading == "price") {
            let prices = val.attributes.map((attr, index) => {
              return "$" + attr.price;
            });
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                {prices.join(" / ")}
              </div>
            );
          }
          if (heading == "qty (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return attr.stock[distro].amount;
            });
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                {qtys.join(" / ")}
              </div>
            );
          }
          if (heading == "rop (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return attr.stock[distro].rop;
            });
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                {qtys.join(" / ")}
              </div>
            );
          }
          if (heading == "noe (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return attr.stock[distro].noe;
            });
            return (
              <div key={i} className=" w-32 text-sm text-grey text-left p-2">
                {qtys.join(" / ")}
              </div>
            );
          }
          if (heading == "status") {
            let packStatus = val.attributes,
              qty,
              rop,
              status;
            packStatus = packStatus.map((packSize, j) => {
              qty = packSize.stock[distro].amount;
              rop = packSize.stock[distro].rop;
              status = qty > rop ? "high" : "low";
              return status;
            });
            return (
              <div
                key={i}
                className="w-32 text-sm uppercase text-grey text-left p-2"
              >
                {packStatus.join("/")}
              </div>
            );
          }
          return (
            <div
              key={index}
              className=" w-32 text-sm uppercase text-grey text-left p-2"
            >
              {val[heading]}
            </div>
          );
        })}
      </div>
    );

    return (
      <span
        key={index}
        style={{ height: "25px", width: "25px" }}
        className={
          " rounded-full font-bold shadow-md flex items-center justify-center text-xs " +
          color
        }
      >
        {accronym}
      </span>
    );
  });

  let itemColumns = props.misc.iHeadings.map((column, index) => {
    let val = props[column] || "";
    switch (column) {
      case "name":
        return null;
      case "company":
        val = companyCircles;
        break;
      case "status":
        val =
          props["stock"][distro].amount > props["stock"][distro].rop
            ? "stocked"
            : "low";
        break;
      case "location":
        val = props[column][distro].section;
        break;
      case "ROP (Loose)":
        val = props["stock"][distro].rop;
      case "NOE (Loose)":
        val = props["stock"][distro].noe;
        break;
      case "qty (Loose)":
        val = props["stock"][distro].amount;
        break;
      case "breeder":
        val = props[column];
        break;
      case "category":
        val = props[column] == 0 ? "strain" : "merch";
        break;
      default:
        break;
    }
    return (
      <div
        key={index}
        className="w-28 p-2 text-sm text-grey text-left uppercase"
      >
        {val}
      </div>
    );
  });

  return (
    <div className="w-full">
      <div
        onClick={() => {
          let id = showAll ? null : props.index;
          props.toggleShowAll(id);
        }}
        className={
          "h-auto w-full flex justify-start bg-white border border-1 border-grey-lighter py-2 uppercase hover:border-teal-light items-center "
        }
      >
        <div className="w-1/3 p-2 text-sm text-grey text-left">
          {props.name.replace("Cannabis Seeds", "")}
        </div>
        {itemColumns}
        <div>
          <FontAwesomeIcon
            icon={showAll ? faAngleUp : faAngleDown}
            className="fa-2x pr-2 -ml-2 mr-2"
          />
        </div>
      </div>
      {showAll ? (
        <React.Fragment>
          <div className="w-full flex bg-grey-lighter text-grey py-2 pl-4">
            {subHeadings}
          </div>
          {companyData}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default item;
