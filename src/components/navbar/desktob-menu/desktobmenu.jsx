import { Link , useLocation,useNavigate } from "react-router-dom";
import { isCartSelected,isStoreSelected } from "../../../utils/checkRoutes";
import { useContext } from "react";
import { MainContext } from "../../../utils/context";
import { signOutUser } from "../../../utils/firebase-functions";
import { TailSpin } from "react-loader-spinner";

function DesktobMenu(){
    const{ user,loading,cartproduct}=useContext(MainContext)
    const Loc= useLocation();
      const signOut = async () => {
    await signOutUser();
  };

    const navigate =useNavigate();
    return(
        <>
      <Link to="/" className={`navbar__right-side__item
      ${isStoreSelected(Loc.pathname)&&"navbar__right-side__item--selected"}`}>
      
      store</Link>


         <div className="navbar__right-side__item">
        <Link
          to="/cart"
          className={`navbar__right-side__item navbar__right-side__item--cart-count
              ${
                isCartSelected(Loc.pathname) &&
                "navbar__right-side__item--selected"
              }`}
        >
          Cart
        </Link>
        {user && cartproduct && (
          <div className="navbar__right-side__cart-count">
            {cartproduct.length}
          </div>
        )}
      </div>
    {loading ? (
        <TailSpin
          height="30"
          width="30"
          color="#3b4142"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    ):user? ( <button onClick={signOut}className="navbar__right-side__btn">Sign Out</button>
       
       
       
      ) :(
       
       <button onClick={()=> navigate('/Authenticate')}className="navbar__right-side__btn">login</button>)}



        </>
    )
}
export default  DesktobMenu;