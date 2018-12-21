
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
} from "@fortawesome/free-solid-svg-icons";


const index = props => {

  return (
    <div className="w-full pb-24 flex flex-wrap justify-between content-center rounded-b-lg">
      <form className="w-1/2 mx-auto flex flex-wrap justify-start" action="/products">
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="name" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="id" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="company" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="description" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="barcode" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="category" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="price" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="qty(packed)" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="qty(loose)" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="lower limit" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="upper limit" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="# sold" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="R.O.P." type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4" placeholder="location" type="text"/>
        <input className="w-full uppercase pl-4 py-1 m-4 cursor-pointer" value="create" type="submit"/>
      </form>
    </div>
  );
};

export default index;
