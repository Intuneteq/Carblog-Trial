import React from "react";
import "./BlogList.css";
import Under18 from "./under18";
import Backdrop from "./Backdrop";
import UseCustomHook from "./UseCustomHook";
import {Link} from "react-router-dom";

function Modal() {
  
  const { under18, modalBox, closeModal, showModal } = UseCustomHook()
  
  

  return (
    <div>
      {modalBox && <Backdrop />}
      {modalBox && (
        <div className="modal">
          <p>Are you Above 18?</p>
          <br />
         <Link to ="/Home"><button>Yes</button></Link>
          <button onClick={showModal}>No</button>
          {under18 && <Under18 />}
        </div>
      )}
    </div>
  );
}

export default Modal;
