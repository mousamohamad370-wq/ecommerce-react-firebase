import LogInForm from "../components/login-form/login-form";
import RegisterForm from "../components/register-form/register-form";
import { useState } from "react";
function Authenticate(){

    const[registerMode,setRegisterMode]=useState(false);
const [formData,setFormData]=useState({
username:"",
email:"",
password:"",

});
    return registerMode ? ( 
    <div className="authenticate">
<RegisterForm
 formData={formData}
    setFormData={setFormData}/>
<p>
    Already have an acount?
    <b onClick={()=>setRegisterMode(false)}className="authenticate__anchor">
     Login
</b>
    </p>


    </div>
     
   ) :(
      <div className="authenticate">
<LogInForm
formData={formData}
    setFormData={setFormData}/>
<p>
    Dont have an acount?
    <b onClick={()=>setRegisterMode(true)} className="authenticate__anchor">
     Register
</b>
    </p>


    </div>
   ) ;
}
export default Authenticate;