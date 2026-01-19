import LogInForm from "../components/login-form/login-form";
import RegisterForm from "../components/register-form/register-form";
import { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../utils/context";

function Authenticate(){

    const[registerMode,setRegisterMode]=useState(false);
      const { user, loading } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
   if( !loading && user && navigate("/"));
    // else( loading && !user && navigate("/authenticate"));
  

}, [loading, user]);



    return registerMode ? ( 
    <div className="authenticate">
<RegisterForm
/>
<p>
    Already have an acount?
    <button onClick={()=>setRegisterMode(false)}className="authenticate__anchor">
     Login
</button>
    </p>


    </div>
     
   ) :(
      <div className="authenticate">
<LogInForm
/>
<p>
    Dont have an acount?
    <button onClick={()=>setRegisterMode(true)} className="authenticate__anchor">
     Register
</button>
    </p>


    </div>
   ) ;
}
export default Authenticate;