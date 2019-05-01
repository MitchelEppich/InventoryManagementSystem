import Info from "./info";
import Router from "next/router";
const index = props => {
  return (
    <form
      id="form"
      className="w-4/5 mx-auto flex flex-wrap justify-start text-base text-grey"
      onSubmit={e => {
        e.preventDefault();
        Router.push("/");
        if (props.newProduct.editMode) {
          props.editProduct(props.newProduct);
        } else {
          props.createNewProduct(props.newProduct);
        }
        const form = e.target;
        const formData = new window.FormData(form);
        form.reset();
      }}
    >
      <Info {...props} />
      <input
        className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-teal-dark w-full uppercase pl-4 text-xl  text-white cursor-pointer"
<<<<<<< HEAD
        value={props.newProduct.editMode ? "Save" : "create"}
=======
        value={props.newProduct.editMode ? "save" : "create"}
>>>>>>> a8d6d9b09d78a02ff838ab91754f242636cb5259
        type="submit"
      />
    </form>
  );
};

export default index;
