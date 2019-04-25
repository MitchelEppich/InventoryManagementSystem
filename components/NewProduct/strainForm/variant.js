import PackInfo from "./packInfo";

const index = props => {
  let packs = [];
  for (let i = 0; i < props.newProduct.packs; i++) {
    packs.push(<PackInfo key={i} {...props} />);
  }
  return (
    <div className="w-full">
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Adding Variations to {props.company}
      </p>
      <div className="inline-flex w-full">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Alias (E.G. 'Super Silver Haze Feminized') "
          type="text"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="SOTI ID"
          type="number"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="STT ID"
          type="number"
        />
      </div>

      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="Summary"
      />
      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="description"
      />
      {packs}
      {/* <button>Add</button> */}
    </div>
  );
};

export default index;
