const index = props => {
  return (
    <div className="w-full">
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Prices {"&"} Packs
      </p>
      <div className="inline-flex w-full flex items-center justify-between">
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="price"
          type="number"
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="Amount"
          type="number"
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="ROP"
          type="number"
        />
        <input
          className="w-1/5 p-2 uppercase pl-4 m-2 text-grey"
          placeholder="NOE"
          type="number"
        />{" "}
        <select className="w-1/5 uppercase p-2 pb-2 h-10 mx-2 pl-2 text-grey-light border-2 border-input-grey">
          <option value="size" disabled>
            Select a Pack Size...
          </option>
          <option value="5">5 Packs</option>
          <option value="10">10 Packs</option>
          <option value="15">15 Packs</option>
          <option value="25">25 Packs</option>
          <option value="50">50 Packs</option>
        </select>
        <input
          type="button"
          className="bg-red text-white uppercase p-2 rounded border-0 hover:bg-red-dark cursor-pointer"
          value="Remove"
          onClick={e => {
            e.preventDefault();
            let newCompanies = props.newProduct.companies;
            delete newCompanies[props.variantIndex].packs[props.packIndex];
            props.togglePackInput(newCompanies);
          }}
        />
      </div>
    </div>
  );
};

export default index;
