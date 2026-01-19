import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../utils/firebase-functions";

function LogInForm() {
   const navigate =useNavigate(); 
    const [err ,seterr] =useState(null)
    const [email,setemail]=useState();
    const [password,setpassword]=useState();

 


  const handleLogin = async (e) => {
e.preventDefault();
const res =await signInUser(email,password);
if(res.succes){
  navigate('/');
}
else{
  seterr(res.err);
}
  };
 

  return (
    <form onSubmit={handleLogin} className="form">
      <h2 className="form__title">Log into your account</h2>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          onChange={(e) => setemail(e.target.value)}
          value={email}
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
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          id="password"
          required
          type="password"
          placeholder="Enter your password"
        />
      </div>
       {err && <div className="form-err">{err} </div>}

      <button className="form__button primary" type="submit">
        Log in
      </button>
    </form>
  );
}
export default LogInForm;
