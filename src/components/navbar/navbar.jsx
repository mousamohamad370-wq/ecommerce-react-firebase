import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
import MobailMenu from "./mobail-menu/mobail-menu";
import DesktobMenu from "./desktob-menu/desktobmenu";
import { useState,useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar(){
    const{width}= useWindowSize();
    const [ismenuOpend ,setismenuOpend]=useState();
    const openMenu=()=>{
        setismenuOpend(true)
    }
      const closeMenu=()=>{
        setismenuOpend(false)
    }
    
    useEffect(()=>{
if(width>800){
    closeMenu();
}
    },[width])
    return(
        <div>
        <div className="navbar">
            <div className="navbar__left-side">
                <Link to="/">
                <div className="navbar__left-side__logo">
                <span className="navbar__left-side__logo__text">MOUSA <b>ECOM</b> STORE</span></div>
                    </Link>
            </div>
             <div className="navbar__right-side">
                {width <800 ? ismenuOpend? <AiOutlineClose onClick={ closeMenu}/> :<RxHamburgerMenu onClick={openMenu}/> :<DesktobMenu/>}
             </div>
        </div>
        {ismenuOpend &&<MobailMenu closefn={closeMenu}/>}
        </div>
    )
}
export default Navbar;