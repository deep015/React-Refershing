import React from 'react'
import useForm from './useForm'

const RegisterForm = () => {
    const { values,handleChange,resetForm} = useForm(
       {
        name:"",
        email:"",
        password:""
       }
    )
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // Send to backend or validate
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={values.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={values.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};



export default RegisterForm
