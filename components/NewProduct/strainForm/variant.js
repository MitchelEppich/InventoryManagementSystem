import PackInfo from "./packInfo";

const index = props => {
  let packs = [];
  for (let i = 0; i < props.newProduct.packs; i++) {
    packs.push(<PackInfo key={i} {...props} />);
  }
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="number" />
      <textarea placeHolder="Summary" />
      <textarea placeHolder="Description" />
      {packs}
      <button>Add</button>
    </div>
  );
};

export default index;
