import React from "react";
import "./Address_lists.css";
import {
  PencilSquare,
  Trash,
  PlusCircleFill,
  JournalText,
} from "react-bootstrap-icons";

export default function Address_lits() {
  return (
    <>
      <div className="title">Address Book</div>
      <div className="container d-flex flex-row m-3">
        <h2 className=" m-1">
          <JournalText />
        </h2>
        <h2 className="p-2 m-1">
          <PlusCircleFill />
        </h2>
      </div>
      <div className="card m-3 ">
        <div className="card-body">
          <h5 className="card-title">Name : Hussain</h5>
          <h5 className="card-text">Email : hussaingoraya982@gmail.com</h5>
          <h5 className="card-text">Contact : 0304-4809243</h5>
          <h5 className="card-text">Address : Gujranwala</h5>
          <div className=" d-flex flex-row ">
            <h2 className=" m-1">
              <Trash />
            </h2>
            <h2 className=" m-1">
              <PencilSquare />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
