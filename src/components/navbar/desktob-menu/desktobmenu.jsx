import { Link , useLocation,useNavigate } from "react-router-dom";
import { isCartSelected,isStoreSelected } from "../../../utils/checkRoutes";


function DesktobMenu(){
    const Loc= useLocation();
    const navigate =useNavigate();
    return(
        <>
      <Link to="/" className={`navbar__right-side__item
      ${isStoreSelected(Loc.pathname)&&"navbar__right-side__item--selected"}`}>
      
      store</Link>


        <Link to="/cart" className={`navbar__right-side__item 
        ${isCartSelected(Loc.pathname)&&"navbar__right-side__item--selected"}`}>cart</Link>


        <button onClick={()=> navigate('/Authenticate')}className="navbar__right-side__btn">login</button>
        </>
    )
}
export default  DesktobMenu;