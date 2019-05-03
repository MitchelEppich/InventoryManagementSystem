import { genKey } from "../../scripts";

const index = props => {
  let distro = props.newProduct.distro;
  if (props.item.variants == null) return null;
  let companyRowData = props.item.variants.map((val, index) => {
    return (
      <div key={genKey()} className="w-full ">
        <div className="w-full p-1 text-center uppercase py-2 shadow bg-grey-lighter">
          {val.company.name}
        </div>
        <div className="w-full flex bg-white border border-t-0 border-grey-lighter text-grey py-2">
          {props.misc.iSubHeadings.map((heading, i) => {
            if (heading == "company") {
              return;
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
  });

  return <React.Fragment>{companyRowData}</React.Fragment>;
};

export default index;
