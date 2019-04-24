import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="w-full ">
      <div className="w-full mx-auto text-center py-6">
        <h2>Add New Product</h2>
      </div>
      <div className="pb-24 full flex flex-wrap justify-between content-center rounded-b-lg">
        <form
          className="w-1/2 mx-auto flex flex-wrap justify-start text-lg text-grey"
          action="/products"
        >
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="name"
            type="text"
          />
          <div className="inline-flex w-full">
            <input
              className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
              placeholder="id"
              type="text"
            />
            <input
              className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
              placeholder="barcode"
              type="text"
            />
          </div>
          <div className="inline-flex w-full bg-teal mx-4 rounded flex items-center text-white">
            <p className="w-full uppercase pl-4 py-1 m-2 text-white">
              Company:
            </p>
            <label className="w-1/4 py-1 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 py-1 text-grey"
                placeholder="company"
                name="company"
                value="CKS"
                type="checkbox"
              />
              CKS
            </label>
            <label className="w-1/4 py-1 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 py-1 text-grey"
                placeholder="company"
                name="company"
                value="SON"
                type="checkbox"
              />
              SON
            </label>
            <label className="w-1/4 py-1 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 py-1 text-grey"
                placeholder="company"
                name="company"
                value="SWG"
                type="checkbox"
              />
              SWG
            </label>
            <label className="w-1/4 py-1 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 py-1 text-grey"
                placeholder="company"
                name="company"
                value="BVR"
                type="checkbox"
              />
              BVR
            </label>
          </div>
          <textarea
            cols="4"
            rows="80"
            className="w-full h-32 uppercase pl-4 py-3 m-4 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
            placeholder="description"
          />

          <p className="w-full uppercase pl-4 py-1 mt-2 mx-2 text-grey">
            Category:
          </p>
          <select className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey border-2 border-input-grey rounded-lg">
            <option value="seed">seed</option>
            <option value="merchandise">merchandise</option>
            <option value="catalog">catalog</option>
          </select>
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="price"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="qty(packed)"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="qty(loose)"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="lower limit"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="upper limit"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="# sold"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="Re-order point"
            type="number"
          />
          <input
            className="w-full h-12 uppercase pl-4 py-1 m-4 text-grey"
            placeholder="location"
            type="text"
          />
          <input
            className="rounded-lg bg-white hover:bg-teal-dark hover:text-white hover:border-white border border-crimson w-full h-12 uppercase pl-4 py-1 m-4 text-grey cursor-pointer"
            value="create"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default index;
