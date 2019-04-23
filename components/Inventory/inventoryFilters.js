import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const inventoryFilters = props => {
  return (
    <div className="inventoryFilters unselectable">
      <ul className="flex flex-wrap p-0 leading-loose text-crimson">
        <li className="w-48 my-2 mx-auto">
          <p>Company:</p>
          <input className="w-1/4 text-crimson" type="checkbox" value="CKS" />
          <span className="w-1/4">CKS</span>
          <input className="w-1/4 text-crimson" type="checkbox" value="SON" />
          <span className="w-1/4">SON</span>
          <input className="w-1/4 text-crimson" type="checkbox" value="SWG" />
          <span className="w-1/4">SWG</span>
          <input className="w-1/4 text-crimson" type="checkbox" value="BVR" />
          <span className="w-1/4">BVR</span>
          <hr className="inventoryFilters__hr" />
        </li>
        <li className="w-48 my-2 mx-auto">
          <p>Status:</p>
          <select className="w-32 pl-3 ml-8 text-crimson border border-crimson rounded-lg">
            <option value="Stocked">Stocked</option>
            <option value="Ordered">Ordered</option>
            <option value="Low">Low</option>
          </select>
          <hr className="inventoryFilters__hr" />
        </li>
        <li className="w-48 my-2 mx-auto">
          <p>Qty(Packed):</p>
          <input
            onChange={e => {
              props.updateFilters("qtyP", { min: e.target.value });
              console.log(props.misc.activeFilters["qtyP"]);
            }}
            className="w-32 ml-8 pl-2 text-crimson"
            value={props.misc.activeFilters["qtyP"].min || undefined}
            placeholder="min"
            type="number"
          />
          <input
            className="w-32 ml-8 pl-2 text-crimson"
            placeholder="max"
            type="number"
          />
          <hr className="inventoryFilters__hr" />
        </li>
        <li className="w-48 my-2 mx-auto">
          <p>Qty(Loose):</p>
          <input
            className="w-32 ml-8 pl-2 text-crimson"
            placeholder="min"
            type="number"
          />
          <input
            className="w-32 ml-8 pl-2 text-crimson"
            placeholder="max"
            type="number"
          />
          <hr className="inventoryFilters__hr" />
        </li>
        <li className="w-48 my-2 mx-auto">
          <p>Category:</p>
          <select className="w-32 pl-3 ml-8 text-crimson border border-crimson rounded-lg">
            <option value="Stocked">Seed</option>
            <option value="Ordered">Merchandise</option>
            <option value="Low">Catalog</option>
          </select>
          <hr className="inventoryFilters__hr" />
        </li>
      </ul>
      <button
        onClick={() => props.applyFilters()}
        className="w-48 block p-1 my-2 mx-auto rounded-lg hover:bg-teal-dark hover:text-white hover:border-white border border-crimson text-crimson"
      >
        Apply
      </button>
      <button
        onClick={() => props.clearFilters()}
        className="w-48 block p-1 my-2 mx-auto rounded-lg hover:bg-teal-dark hover:text-white hover:border-white border border-crimson text-crimson"
      >
        Clear
      </button>
    </div>
  );
};

export default inventoryFilters;
