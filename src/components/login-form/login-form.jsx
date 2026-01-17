import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInForm({formData,setformData}) {


  const handleLogin = async (e) => {};
  const navigate =useNavigate(); 

  return (
    <form onSubmit={handleLogin} className="form">
      <h2 className="form__title">Log into your account</h2>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          onChange={(e) => setformData({...formData,email:e.target.value})}
          value={formData.email}
          type="email"
          id="email"
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
          onChange={(e) => setformData({...formData, password:e.target.value})}
          value={formData.password}
          id="password"
          required
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <button className="form__button primary" type="submit">
        Log in
      </button>
    </form>
  );
}
export default LogInForm;
