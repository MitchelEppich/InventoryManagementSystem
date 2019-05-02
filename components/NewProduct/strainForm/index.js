import Info from "./info";
import Router from "next/router";
const index = props => {
  return (
    <form
      id="form"
      className="w-4/5 mx-auto flex flex-wrap justify-start text-base text-grey"
      onSubmit={e => {
        e.preventDefault();
        if (props.newProduct.editMode) {
          props.editProduct({
            ...props.newProduct,
            inventory: props.misc.inventory
          });
        } else {
          props.createNewProduct(props.newProduct);
        }
        props.resetStore();
        Router.push("/");
      }}
    >
      <Info {...props} />
      <input
        className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-teal-dark w-full uppercase pl-4 text-xl  text-white cursor-pointer"
        value={props.newProduct.editMode ? "save" : "create"}
        type="submit"
      />
      {props.newProduct.editMode ? (
        <input
          className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-red-dark w-full uppercase pl-4 text-xl  text-white cursor-pointer"
          value="Delete"
          onClick={e => {
            e.preventDefault();
            props.deleteStrain({ _id: props.newProduct.info._id });
            Router.push("/");
          }}
          type="button"
        />
      ) : null}
    </form>
  );
};

export default index;
