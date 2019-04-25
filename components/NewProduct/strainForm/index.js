import Info from "./info";

const index = props => {
  return (
    <form
      className="w-4/5 mx-auto flex flex-wrap justify-start text-base text-grey"
      action="/products"
    >
      <Info {...props} />
      <input
        className="rounded-lg bg-grey-light p-3 mt-8 border-white hover:bg-teal-dark w-full uppercase pl-4 text-xl  text-white cursor-pointer"
        value="create"
        type="submit"
      />
    </form>
  );
};

export default index;
