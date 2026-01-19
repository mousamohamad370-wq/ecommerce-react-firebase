import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/firebase-functions";

function RegisterForm() {
  const [formData,setformData]=useState({
    username:"",
    email:"",
    password:"",
  })
const [err ,seterr] =useState(null)
  const navigate=useNavigate();

  const handleformDataChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

const handleRegister=async (e)=>{
  e.preventDefault()
  const res =await registerUser(
    formData.username,
    formData.email,
    formData.password)
if(res.succses){
  navigate('/');
}
else{
seterr(res.err)
}
};
  return (
    <form onSubmit={handleRegister} className="form">
      <h2 className="form__title">Create an account</h2>
      <div className="form__group">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          onChange={handleformDataChange}
          value={formData.username}
          type="text"
          name="username"
          required
          placeholder="Enter your username"
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          onChange={handleformDataChange}
          value={formData.email}
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          onChange={handleformDataChange}
          value={formData.password}
          type="password"
          name="password"
          required
          placeholder="Enter your password"
        />
      </div>
      {err && <div className="form-err">{err} </div>}
  
      <button className="form__button primary" type="submit">
        Register
      </button>
    </form>
  );
}
export default RegisterForm;
