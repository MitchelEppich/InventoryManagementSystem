import { genKey } from "../../scripts";

const index = props => {
  let companyCircles = props.item.variants.map((val, index) => {
    let color = "",
      accronym;
    [
      { name: "crop king seeds", color: "bg-red text-white", accronym: "CKS" },
      { name: "sonoma seeds", color: "bg-white text-grey", accronym: "SON" },
      {
        name: "sunwest genetics",
        color: "bg-yellow text-grey",
        accronym: "SWG"
      },
      { name: "beaver seeds", color: "bg-green text-white", accronym: "BVR" },
      {
        name: "mary janes garden",
        color: "bg-orange text-white",
        accronym: "MJG"
      },
      { name: "mj seeds canada", color: "bg-brown text-white", accronym: "MJS" }
    ].map((company, index) => {
      if (val.company.name.toLowerCase().includes(company.name.toLowerCase())) {
        color = company.color;
        accronym = company.accronym;
        name = company.name;
      }
      return;
    });

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

  return companyCircles;
};

export default index;
