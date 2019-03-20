import React from "react";
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
    <div
      className="bg-grey h-full w-full relative overflow-x-hidden overflow-y-hidden"
      style={{
        position: "fixed",
        zIndex: "100"
      }}
    >
      <div
        style={{
          borderRadius: "10px"
        }}
        className="align-absolute bg-white w-450 h-450 mt-64"
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const formData = new window.FormData(form);

            let username = formData.get("username");
            let badge = formData.get("badge");

            // Verify login credentials
            props.verifyCredentials({ username, badge }).then(res => {
              if (res == null || res.token == null) {
                let message = document.querySelector("#errorMessage");
                message.classList.remove("hidden");
              } else {
                props.setVisibleScreen(null);
              }
            });
          }}
        >
          <div className="text-center p-2">
            <FontAwesomeIcon
              icon={faUserLock}
              className="fa-7x mt-10 mb-6 text-almost-transparent"
            />
            <h2 className="p-2">Inventory Management System</h2>
            <p>Please, enter with your login and password</p>
          </div>

          <div className="text-center">
            <div id="errorMessage" className="w-full mt-4 hidden">
              <h3 className="font-bold text-red uppercase">
                You are not authorized to login.
              </h3>
            </div>
            <div className="p-2 mt-6">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-2 w-2/3"
              />
            </div>
            <div className="p-2">
              <input
                type="text"
                name="badge"
                id="badge"
                placeholder="Badge #"
                className="p-2 w-2/3"
              />
            </div>
            <button
              type="submit"
              className="bg-grey text-white mt-2 p-2 text-center mx-auto w-2/3 justify-center cursor-pointer hover:bg-grey-dark"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
