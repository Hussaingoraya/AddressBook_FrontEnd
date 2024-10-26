import React from "react";
import "./Add_Address.css";
import { useFormik } from "formik";

const initialFormValues = {
  name: "",
  email: "",
  contact: "",
  address: "",
};

export default function Add_address() {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialFormValues,
  });

  return (
    <>
      <div className="title">Add Address</div>

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
            Add
          </button>
        </form>
      </div>
    </>
  );
}
