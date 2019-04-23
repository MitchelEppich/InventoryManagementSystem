
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
} from "@fortawesome/free-solid-svg-icons";


const index = props => {

  return (
    <div className="w-full pb-24 flex flex-wrap justify-between content-center rounded-b-lg">
      <form className="w-1/2 mx-auto flex flex-wrap justify-start text-lg text-crimson" action="/products">
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="name" type="text"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="id" type="text"/>
        <p className="w-full uppercase pl-4 py-1 m-2 text-crimson">Company:</p>
        <input className="w-1/4 uppercase pl-4 py-1 my-2 text-crimson" placeholder="company" name="company" value="CKS" type="checkbox"/><p className="w-1/4 py-1">CKS</p>
        <input className="w-1/4 uppercase pl-4 py-1 my-2 text-crimson" placeholder="company" name="company" value="SON" type="checkbox"/><p className="w-1/4 py-1">SON</p>
        <input className="w-1/4 uppercase pl-4 py-1 my-2 text-crimson" placeholder="company" name="company" value="SWG" type="checkbox"/><p className="w-1/4 py-1">SWG</p>
        <input className="w-1/4 uppercase pl-4 py-1 my-2 text-crimson" placeholder="company" name="company" value="BVR" type="checkbox"/><p className="w-1/4 py-1">BVR</p>
        <textarea className="w-full h-12 uppercase pl-4 py-3 m-4 text-crimson border-input-grey border-2 rounded-lg overflow-y-hidden" placeholder="description"></textarea>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="barcode" type="text"/>
        <p className="w-full uppercase pl-4 py-1 mt-2 mx-2 text-crimson">Category:</p>
        <select className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson border-2 border-input-grey rounded-lg">
            <option value="seed">seed</option>
            <option value="merchandise">merchandise</option>
            <option value="catalog">catalog</option>
        </select>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="price" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="qty(packed)" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="qty(loose)" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="lower limit" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="upper limit" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="# sold" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="Re-order point" type="number"/>
        <input className="w-full h-12 uppercase pl-4 py-1 m-4 text-crimson" placeholder="location" type="text"/>
        <input className="rounded-lg bg-white hover:bg-teal-dark hover:text-white hover:border-white border border-crimson w-full h-12 uppercase pl-4 py-1 m-4 text-crimson cursor-pointer" value="create" type="submit"/>
      </form>
    </div>
  );
};

export default index;
