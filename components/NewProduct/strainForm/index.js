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
      <div className="inline-flex w-full justify-between flex">
        <div
          className={`${
            props.newProduct.editMode ? "w-1/2 mx-4" : "w-full justify-end flex"
          }`}
        >
          <input
            className={`rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-teal-dark w-full uppercase pl-4 text-xl text-white cursor-pointer`}
            value={props.newProduct.editMode ? "save" : "create"}
            type="submit"
          />
        </div>
        {props.newProduct.editMode ? (
          <React.Fragment>
            <div className="w-1/2 mx-4">
              <input
                className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-red-dark w-full uppercase pl-4 text-xl text-white cursor-pointer"
                value="Delete"
                onClick={e => {
                  e.preventDefault();
                  props.deleteStrain({ _id: props.newProduct.info._id });
                  Router.push("/");
                }}
                type="button"
              />
            </div>
            <div className="w-1/2 mx-4">
              <input
                className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-blue-dark w-full uppercase pl-4 text-xl text-white cursor-pointer"
                value="Duplicate"
                onClick={e => {
                  e.preventDefault();
                  // let strain = props.misc.inventory.find(item => {
                  //   return item._id == props.newProduct.info._id;
                  // });
                  // props.duplicateStrain({
                  //   strain: strain,
                  //   variants: props.newProduct.variants
                  // });
                  // Router.push("/");
                }}
                type="button"
              />
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </form>
  );
};

export default index;
