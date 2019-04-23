import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faInfo,
  faUserLock,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="h-24 w-full px-48 pt-2 flex justify-between bg-teal leading-normal text-white">
      <div>
        <h1
          onClick={() => console.log(props)}
          className="xs:hidden sm:hidden md:hidden lg:hidden uppercase text-xl"
        >
          Inventory Management System
        </h1>
        <h1 className="xl:hidden xxl:hidden">I.M.S.</h1>
        <h4>
          {props.user.currentUser
            ? "Welcome, " + props.user.currentUser.name
            : "NOT LOGGED IN"}
        </h4>
      </div>
      <div className=" pt-4 flex flex-wrap justify-around xl:w-auto xxl:w-auto xl:justify-end xxl:justify-end">
        <Link href="/">
          <button className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white">
            Inventory
          </button>
        </Link>
        <Link href="/products">
          <button className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white">
            Product List
          </button>
        </Link>

        <Link href="/newproduct">
          <button className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white">
            New Product
          </button>
        </Link>
        <Link href="/reports">
          <button className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white">
            Reports
          </button>
        </Link>
        <Link href="/logs">
          <button className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white">
            Logs
          </button>
        </Link>
        <Link href="/login">
          <button
            className="h-8 px-3 mx-2 my-2 bg-teal-dark hover:bg-teal-light uppercase text-white"
            onClick={() => {
              props.releaseCredentials({
                username: props.user.currentUser.username
              });
            }}
          >
            {props.user.currentUser ? "Logout" : "Login"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
