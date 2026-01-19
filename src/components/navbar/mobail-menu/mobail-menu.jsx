import { Link , useLocation,useNavigate } from "react-router-dom";
import { isCartSelected,isStoreSelected } from "../../../utils/checkRoutes";


function MobailMenu({closefn}){
      const Loc= useLocation();
         const navigate =useNavigate();
    return(
        <div className="mobail-menu">
            <div className="mobail-menu__content">
                  <Link onClick={closefn} to="/" className={`mobail-menu__content__item
      ${isStoreSelected(Loc.pathname)&&"mobail-menu__content__item--selected"}`}>
      
      store</Link>


        <Link
        onClick={closefn}
        
        to="/cart" className={`mobail-menu__content__item 
        ${isCartSelected(Loc.pathname)&&"mobail-menu__content__item--selected"}`}>cart</Link>


        <button onClick={()=> {navigate('/authenticate');
            closefn()}
        }className="mobail-menu__content__btn">login</button>
            </div>
        </div>
    )
}
export default  MobailMenu;