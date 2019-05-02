import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle,
  faAngleDown,
  faAngleUp,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import { genKey } from "../scripts";

const item = props => {
  let showAll = props.misc.showAllId == props.index; //show extra company specific data
  let distro = props.misc.distro;
  let iSubHeadings = props.misc.iSubHeadings;
  let subHeadings = iSubHeadings.map((heading, index) => {
    if (heading == "alias") {
      return (
        <div key={heading} className="text-grey w-64 p-2 text-xs uppercase">
          {heading}
        </div>
      );
    }
    if (heading == "company") {
      return;
      // (
      //   <div key={heading} className="text-grey w-32 p-2 text-xs uppercase">
      //     {heading}
      //   </div>
      // );
    }

    return (
      <div
        key={heading}
        className="text-grey text-center w-32 p-2 text-xs uppercase"
      >
        {heading}
      </div>
    );
  });
  let companyData = [];
  if (props.item.variants == null) return null;
  let companyCircles = props.item.variants.map((val, index) => {
    let color = "",
      accronym;
    [
      { name: "beaver seeds", color: "bg-green text-white", accronym: "BVR" },
      { name: "crop king seeds", color: "bg-red text-white", accronym: "CKS" },
      { name: "sonoma seeds", color: "bg-white text-grey", accronym: "SON" },
      {
        name: "sunwest genetics",
        color: "bg-yellow text-grey",
        accronym: "SWG"
      }
    ].map((company, index) => {
      if (val.company.name.toLowerCase().includes(company.name.toLowerCase())) {
        color = company.color;
        accronym = company.accronym;
        name = company.name;
      }
      return;
    });

    companyData.push(
      <div key={genKey()} className="w-full ">
        <div className="w-full p-1 text-center uppercase py-2 shadow bg-grey-lighter">
          {name}
        </div>
        <div className="w-full flex bg-white border border-t-0 border-grey-lighter text-grey py-2">
          {iSubHeadings.map((heading, i) => {
            if (heading == "company") {
              return;
              // (
              // <div
              //   key={genKey()}
              //   className=" w-32 text-sm text-grey text-left p-2"
              // >
              //   <div
              //     style={{ height: "30px", width: "30px" }}
              //     className={
              //       " rounded-full font-bold shadow-md flex items-center justify-center text-xs " +
              //       color
              //     }
              //   >
              //     {accronym}
              //   </div>
              // </div>
              // );
            }
            if (["sotiId", "sttId"].includes(heading)) {
              return (
                <div
                  key={genKey()}
                  className=" w-32 text-sm uppercase text-grey text-center p-2"
                >
                  {val[heading]}
                </div>
              );
            }
            if (heading == "alias") {
              return (
                <div
                  key={genKey()}
                  className=" w-64 text-sm uppercase text-grey text-left p-2"
                >
                  {val[heading].toLowerCase().replace("cannabis seeds", "")}
                </div>
              );
            }
            if (heading == "price") {
              let prices = val.attributes.map((attr, index) => {
                return (
                  <div
                    key={genKey()}
                    className=" text-sm text-grey text-center p-2"
                  >
                    $ {attr.price}
                  </div>
                );
              });
              return (
                <div key={genKey()} className="w-32">
                  {prices}
                </div>
              );
            }
            if (heading == "qty (packed)") {
              let qtys = val.attributes.map((attr, index) => {
                return (
                  <div
                    key={genKey()}
                    className=" text-sm text-grey text-center p-2"
                  >
                    {attr.stock[distro].amount}
                  </div>
                );
              });
              return (
                <div key={genKey()} className="w-32">
                  {qtys}
                </div>
              );
            }
            if (heading == "rop (packed)") {
              let qtys = val.attributes.map((attr, index) => {
                return (
                  <div
                    key={genKey()}
                    className=" text-sm text-grey text-center p-2"
                  >
                    {attr.stock[distro].rop}
                  </div>
                );
              });
              return (
                <div key={genKey()} className="w-32">
                  {qtys}
                </div>
              );
            }
            if (heading == "noe (packed)") {
              let qtys = val.attributes.map((attr, index) => {
                return (
                  <div
                    key={genKey()}
                    className=" text-sm text-grey text-center p-2"
                  >
                    {attr.stock[distro].noe}
                  </div>
                );
              });
              return (
                <div key={genKey()} className="w-32">
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
                      <span
                        style={{ height: "16px", width: "16px" }}
                        className="mr-2 rounded-full font-bold shadow-md flex items-center justify-center text-xs bg-green"
                      >
                        {" "}
                      </span>
                      High
                    </p>
                  ) : (
                    <p className="inline-flex">
                      <span
                        style={{ height: "16px", width: "16px" }}
                        className="mr-2 rounded-full font-bold shadow-md flex items-center justify-center text-xs bg-red-dark"
                      >
                        {" "}
                      </span>
                      Low
                    </p>
                  );
                return (
                  <div
                    key={genKey()}
                    className="text-sm uppercase text-grey text-center p-2 pb-1"
                  >
                    {status}
                  </div>
                );

                status;
              });
              return (
                <div key={genKey()} className="w-32">
                  {packStatus}
                </div>
              );
            }
            return (
              <div
                key={genKey()}
                className=" w-32 text-sm uppercase text-grey text-left p-2"
              >
                {val[heading]}
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div
        key={genKey()}
        style={{ height: "30px", width: "30px" }}
        className={
          " rounded-full mx-1 font-bold shadow-md flex items-center justify-center text-xs text-center " +
          color
        }
      >
        {accronym}
      </div>
    );
  });

  let itemColumns = props.misc.iHeadings.map((column, index) => {
    let val = props.item[column] || "";
    switch (column) {
      case "name":
        return null;
      case "company":
        val = companyCircles;
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
        key={genKey()}
        className="w-32 p-2 text-sm text-center uppercase flex justify-center items-center"
      >
        {val}
      </div>
    );
  });

  return (
    <div
      className={` w-full ${
        showAll ? "border-teal-darker border" : ""
      }  hover:border-teal-light`}
    >
      <div
        onClick={() => {
          let id = showAll ? null : props.index;
          props.toggleShowAll(id);
        }}
        className={` h-auto w-full flex justify-start ${
          showAll
            ? "bg-teal-darker text-white"
            : "bg-white text-grey border border-grey-lighter"
        }  py-2 uppercase hover:border-teal-light items-center cursor-pointer`}
      >
        <div className="w-1/4 p-2 text-sm text-left">
          {props.item.name.toLowerCase().replace("Cannabis Seeds", "")}
        </div>
        {itemColumns}
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={showAll ? faAngleUp : faAngleDown}
            className="fa-2x pr-2 -ml-2 mr-2"
          />
        </div>
        {showAll ? (
          <div
            onClick={() => {
              props.toggleFormType("strain");
              Router.push("/newProduct");
              props.toggleEdit(props);
            }}
            className="w-32 text-center"
          >
            <FontAwesomeIcon icon={faEdit} className="fa-lg text-white" />
          </div>
        ) : null}
      </div>
      {showAll ? (
        <React.Fragment>
          <div className="w-full flex bg-teal-lightest shadow py-2 pl-2">
            {subHeadings}
          </div>
          {companyData}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default item;
