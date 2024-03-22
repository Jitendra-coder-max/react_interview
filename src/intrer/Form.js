import React, { useState } from "react";
import axios from 'axios'
const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    // const { name, value } = e.target; 
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {

    //    let res =  axios.post(`https://jsonplaceholder.typicode.com/posts`,formData)

    //    setFormData(res.data);

    // console.log("Form submitted", res.data);


      console.log("Form submitted", formData);
    }


    else {
        setErrors(validateForm)
    }

    // console.log(validationErrors)

    // console.log(formData)
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email || !data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.name ||  !data.name.trim()) {
      errors.name = "Name is required";
    }
    return errors;
  };

  return (
    <div onSubmit={handleSubmit}>
      Form
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <br/>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        {/* <input /> */}
        <button type="submit"> Click here</button>
      </form>
    </div>
  );
};

export default Form;
