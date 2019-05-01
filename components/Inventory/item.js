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
import Router from "next/router";

const item = props => {
  let showAll = props.misc.showAllId == props.index; //show extra company specific data
  let distro = props.misc.distro;
  let iSubHeadings = props.misc.iSubHeadings;
  let subHeadings = iSubHeadings.map((heading, index) => {
    if (heading == "alias") {
      return (
        <span key={heading} className="text-grey w-64 p-2 text-xs uppercase">
          {heading}
        </span>
      );
    }
    // if (heading == "price") {
    //   return (
    //     <span key={index} className="text-grey w-48 p-2 text-xs uppercase">
    //       {heading}
    //     </span>
    //   );
    // }
    return (
      <span key={heading} className="text-grey w-32 p-2 text-xs uppercase">
        {heading}
      </span>
    );
  });
  let companyData = [];
  if (props.item.variants == null) return null;
  let companyCircles = props.item.variants.map((val, index) => {
    // console.log(val);
    let color = "",
      accronym;
    [
      { name: "beaver seeds", color: "bg-green text-white", accronym: "BVR" },
      { name: "crop king seeds", color: "bg-red text-white", accronym: "CKS" },
      { name: "sonoma seeds", color: "bg-white", accronym: "SON" },
      { name: "sunwest genetics", color: "bg-yellow", accronym: "SWG" }
    ].map((company, index) => {
      if (val.company.name.toLowerCase().includes(company.name.toLowerCase())) {
        color = company.color;
        accronym = company.accronym;
      }
      return;
    });

    companyData.push(
      <div
        key={val}
        className="w-full flex pl-4 bg-teal-lightest text-grey py-2"
      >
        {iSubHeadings.map((heading, i) => {
          if (heading == "company") {
            return (
              <div
                key={Math.random() * 1000000}
                className=" w-32 text-sm text-grey text-left p-2"
              >
                <span
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
              <div
                key={Math.random() * 1000000}
                className=" w-32 text-sm uppercase text-grey text-left p-2"
              >
                {val[heading]}
              </div>
            );
          }
          if (heading == "alias") {
            return (
              <div
                key={Math.random() * 1000000}
                className=" w-64 text-sm uppercase text-grey text-left p-2"
              >
                {val[heading].replace("Cannabis Seeds", "")}
              </div>
            );
          }
          if (heading == "price") {
            let prices = val.attributes.map((attr, index) => {
              return (
                <div
                  key={Math.random() * 1000000}
                  className=" text-sm text-grey text-left p-2"
                >
                  $ {attr.price}
                </div>
              );
            });
            return (
              <div key={Math.random() * 1000000} className="w-32">
                {prices}
              </div>
            );
          }
          if (heading == "qty (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return (
                <div
                  key={Math.random() * 1000000}
                  className=" pl-8 text-sm text-grey text-left p-2"
                >
                  {attr.stock[distro].amount}
                </div>
              );
            });
            return (
              <div key={Math.random() * 1000000} className="w-32">
                {qtys}
              </div>
            );
          }
          if (heading == "rop (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return (
                <div
                  key={Math.random() * 1000000}
                  className=" pl-8 text-sm text-grey text-left p-2"
                >
                  {attr.stock[distro].rop}
                </div>
              );
            });
            return (
              <div key={Math.random() * 1000000} className="w-32">
                {qtys}
              </div>
            );
          }
          if (heading == "noe (packed)") {
            let qtys = val.attributes.map((attr, index) => {
              return (
                <div
                  key={Math.random() * 1000000}
                  className=" pl-8 text-sm text-grey text-left p-2"
                >
                  {attr.stock[distro].noe}
                </div>
              );
            });
            return (
              <div key={Math.random() * 1000000} className="w-32">
                {qtys}
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
              status =
                qty > rop ? (
                  <p className="inline-flex">
                    High
                    <span
                      style={{ height: "16px", width: "16px" }}
                      className="ml-2 rounded-full font-bold shadow-md flex items-center justify-center text-xs bg-green"
                    >
                      {" "}
                    </span>
                  </p>
                ) : (
                  <p className="inline-flex">
                    Low
                    <span
                      style={{ height: "16px", width: "16px" }}
                      className="ml-2 rounded-full font-bold shadow-md flex items-center justify-center text-xs bg-red-dark"
                    >
                      {" "}
                    </span>
                  </p>
                );
              return (
                <div
                  key={Math.random() * 1000000}
                  className="text-sm uppercase text-grey text-left p-2"
                >
                  {status}
                </div>
              );

              status;
            });
            return (
              <div key={Math.random() * 1000000} className="w-32">
                {packStatus}
              </div>
            );
          }
          return (
            <div
              key={Math.random() * 1000000}
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
        key={Math.random() * 1000000}
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
    let val = props.item[column] || "";
    switch (column) {
      case "name":
        return null;
      case "company":
        // val = companyCircles;
        break;
      case "status":
        val =
          props.item["stock"][distro].amount > props.item["stock"][distro].rop
            ? "stocked"
            : "low";
        break;
      case "location":
        val = props.item[column][distro].section;
        break;
      case "ROP (Loose)":
        val = props.item["stock"][distro].rop;
      case "NOE (Loose)":
        val = props.item["stock"][distro].noe;
        break;
      case "qty (Loose)":
        val = props.item["stock"][distro].amount;
        break;
      case "breeder":
        val = props.item[column];
        break;
      case "category":
        val = props.item[column] == 0 ? "strain" : "merch";
        break;
      default:
        break;
    }
    return (
      <div
        key={Math.random() * 1000000}
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
          {props.item.name.replace("Cannabis Seeds", "")}
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
          <div
            onClick={() => {
              props.toggleFormType("strain");
              Router.push("/newProduct");
              props.toggleEdit(props);
            }}
            className="w-full flex bg-grey-lighter text-grey py-2 pl-4"
          >
            {subHeadings}
          </div>
          {companyData}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default item;
