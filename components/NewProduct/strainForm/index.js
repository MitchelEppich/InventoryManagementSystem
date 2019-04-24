import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCannabis,
  faMailBulk,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <form
      className="w-4/5 mx-auto flex flex-wrap justify-start text-base text-grey"
      action="/products"
    >
      <div className="inline-flex w-full justify-between flex">
        <input
          className="w-3/5 p-2 mx-1 uppercase pl-4 my-2 text-grey"
          placeholder="name:"
          type="text"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Breeder:"
          type="text"
        />
        <input
          className="w-1/5 p-2 mx-1 uppercase pl-4 my-2 mr-1 text-grey"
          placeholder="Origin:"
          type="text"
        />
      </div>

      {/* <div className="inline-flex w-full bg-white py-1 my-2 rounded flex items-center text-grey border-2 border-grey-lighter">
            <p className="w-full uppercase pl-2 m-2 text-grey opacity-50 pr-8">
              Company:
            </p>
            <label className="w-1/4 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 text-grey"
                placeholder="company"
                name="company"
                value="CKS"
                type="checkbox"
              />
              CKS
            </label>
            <label className="w-1/4 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 text-grey"
                placeholder="company"
                name="company"
                value="SON"
                type="checkbox"
              />
              SON
            </label>
            <label className="w-1/4 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 text-grey"
                placeholder="company"
                name="company"
                value="SWG"
                type="checkbox"
              />
              SWG
            </label>
            <label className="w-1/4 items-center flex">
              <input
                className="w-1/4 uppercase checkbox pl-4 text-grey"
                placeholder="company"
                name="company"
                value="BVR"
                type="checkbox"
              />
              BVR
            </label>
          </div> */}
      <div className="inline-flex w-full flex items-center justify-between">
        <input
          className="w-2/3 p-2 uppercase pl-4 my-2 text-grey"
          placeholder="price:"
          type="number"
        />
        <select className="w-1/3 uppercase p-2 mx-2 pl-2 text-grey-light border-2 border-input-grey rounded-lg">
          <option value="size" disabled>
            Select a Pack Size...
          </option>
          <option value="5">5 Packs</option>
          <option value="10">10 Packs</option>
          <option value="15">15 Packs</option>
          <option value="25">25 Packs</option>
          <option value="50">50 Packs</option>
        </select>
        <div className="w-10 bg-teal p-2 flex items-center justify-center cursor-pointer hover:bg-teal-dark rounded-full">
          <FontAwesomeIcon icon={faPlus} className="text-white fa-lg" />
        </div>
      </div>

      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="description:"
      />
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Strain Information:
      </p>
      <div className="w-full inline-flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Indica:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Sativa:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Ruderalis:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Type:"
          type="text"
        />
      </div>
      <div className="w-full inline-flex">
        <select className="w-1/3 uppercase p-2 mx-2 pl-2 text-grey-light border-2 border-input-grey rounded-lg">
          <option value="size" disabled>
            Select a Environment...
          </option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor-Outdoor">Indoor / Outdoor</option>
        </select>
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Genetic:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Yield:"
          type="text"
        />
        <select className="w-full uppercase text-grey-light p-2 mx-1 my-2 pl-4   border-2 border-input-grey rounded-lg">
          <option value="seed" disabled>
            Select a Country...
          </option>
          <option value="spain">Spain</option>
          <option value="usa">USA</option>
          <option value="mexico">Mexico</option>
        </select>
      </div>
      <div className="w-full inline-flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="Flower Time:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="% THC:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="% CBD:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="% CBN:"
          type="number"
        />
      </div>
      <div className="w-full inline-flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="Difficult:"
          type="text"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="Effect:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1  my-2 text-grey"
          placeholder="relations:"
          type="number"
        />
      </div>
      <textarea
        cols="4"
        rows="80"
        className="w-full h-32 uppercase pl-4 py-3 mx-1  my-2 text-grey border-input-grey border-2 rounded-lg overflow-y-hidden"
        placeholder="More Info:"
      />
      <p className="uppercase bg-teal w-full  p-2 mt-3 mb-2 text-center font-bold text-white text-xl">
        Stock Control:
      </p>
      <div className="w-full inline-flex">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="qty (packed):"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="qty (loose):"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="lower limit:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="upper limit:"
          type="number"
        />
      </div>
      <div className="inline-flex w-full">
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="# sold:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="Re-order point:"
          type="number"
        />
        <input
          className="w-full p-2 uppercase pl-4 mx-1 my-2 text-grey"
          placeholder="location:"
          type="text"
        />
      </div>
      <input
        className="rounded-lg bg-grey-light p-3 border-white hover:bg-teal-dark w-full uppercase pl-4 text-xl  text-white cursor-pointer"
        value="create"
        type="submit"
      />
    </form>
  );
};

export default index;
