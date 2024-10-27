import React, { useEffect, useState } from "react";
import "./Address_lists.css";
import {
  PencilSquare,
  Trash,
  PlusCircleFill,
  JournalText,
} from "react-bootstrap-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Address_lits() {
  const nav = useNavigate();
  const [addressData, setAddressData] = useState([]);
  useEffect(() => {
    const getAddressData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/addressbook");
        setAddressData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddressData();
  }, []);
  const addressForm = () => {
    nav("/add");
  };
  const deleteAddress = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/addressbook/${id}`
      );
      setAddressData(addressData.filter((address) => address._id !== id));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="title">Address Book</div>
      <div className="container d-flex flex-row m-3">
        <h2 className=" icons m-1">
          <JournalText />
        </h2>
        <h2 className=" icons m-1">
          <PlusCircleFill onClick={addressForm} />
        </h2>
      </div>
      {addressData.map((address) => (
        <div className="card m-3 " key={address._id}>
          <div className="card-body">
            <h5 className="card-title">Name : {address.name}</h5>
            <h5 className="card-text">Email : {address.email}</h5>
            <h5 className="card-text">Contact : {address.contact}</h5>
            <h5 className="card-text">Address : {address.address}</h5>
            <div className=" d-flex flex-row ">
              <h2 className="icons m-1">
                <Trash onClick={() => deleteAddress(address._id)} />
              </h2>
              <h2 className="icons m-1">
                <PencilSquare />
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
