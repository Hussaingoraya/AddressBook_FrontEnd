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
import { useFormik } from "formik";

const initialFormValues = {
  name: "",
  email: "",
  contact: "",
  address: "",
};

export default function Address_lits() {
  const nav = useNavigate();
  const [addressData, setAddressData] = useState([]);
  const [selectAddress, setSelectAddress] = useState(null);
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
  const { values, handleChange, handleBlur, handleSubmit, setValues } = useFormik({
    initialValues: initialFormValues,
    onSubmit: async (values) => {
      if (selectAddress) {
        // Edit existing address
        try {
          await axios.put(`http://localhost:8000/addressbook/${selectAddress._id}`, values);
          setAddressData((prevData) =>
            prevData.map((addr) => (addr._id === selectAddress._id ? { ...addr, ...values } : addr))
          );
          setSelectAddress(null);
        } catch (error) {
          console.log(error);
        }
      } else {
        // Add new address
        try {
          const response = await axios.post("http://localhost:8000/addressbook", values);
          setAddressData([...addressData, response.data]);
          nav("/");
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  const editAddress = (address) => {
    setSelectAddress(address);
    setValues(address); // Populate the form with the selected address
  };

  return (
    <>
      {selectAddress && (
        <>
          <div className="title">Update Address</div>

          <div className="container add-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="addressname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressname"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="ContactAddress" className="form-label">
                  Contact
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ContactAddress"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="Address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </>
      )}
      <div className="title">Address Book</div>
      <div className="container d-flex flex-row m-3">
        <h2 className=" icons m-1">
          <JournalText />
        </h2>
        <h2 className=" icons add-icon m-1">
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
              <h2 className="icons trash-icon m-1">
                <Trash onClick={() => deleteAddress(address._id)} />
              </h2>
              <h2 className="icons edit-icon m-1">
                <PencilSquare onClick={() => editAddress(address)} />
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
