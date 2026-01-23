import { Link , useLocation,useNavigate } from "react-router-dom";
import { isCartSelected,isStoreSelected } from "../../../utils/checkRoutes";
import { TailSpin } from "react-loader-spinner";
import { useContext } from "react";
import { MainContext } from "../../../utils/context";   
import { signOutUser } from "../../../utils/firebase-functions";

function MobailMenu({closefn}){
 const { user, loading, cartproduct} = useContext(MainContext);
  const loc = useLocation();
  const navigate = useNavigate();
  const signOut = async () => {
    await signOutUser();
  };
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <Link
          onClick={closefn}
          to="/"
          className={`mobile-menu__content__item
              ${
                isStoreSelected(loc.pathname) &&
                "mobile-menu__content__item--selected"
              }`}
        >
          Store
        </Link>
        <div className="mobile-menu__content mobile-menu__content--cart">
          <Link
            onClick={closefn}
            to="/cart"
            className={`mobile-menu__content__item
              ${
                isCartSelected(loc.pathname) &&
                "mobile-menu__content__item--selected"
              }`}
          >
            Cart
          </Link>
          {user && cartproduct && (
            <div className="mobile-menu__content__cart-count">
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
        ) : user ? (
          <button
            onClick={signOut}
            className="mobile-menu__content__btn primary"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => navigate("/authenticate")}
            className="mobile-menu__content__btn primary"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
export default MobailMenu;