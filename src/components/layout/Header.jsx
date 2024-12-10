import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavItem,
    SideContent,
    SideItems,
    DropDown,
  } from "responsive-navigation";
  import {Link} from "react-router-dom"
// icons
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { useState } from "react";
const Header = () => {
     const [active,setActive] = useState("construction")
    console.log(active);
    
  return (
    <div className="fw-bold sticky-top">
        <div className="header-contact d-flex justify-content-between py-2 px-3  bg-dark text-white">
              <div>
                  <h5><FaPhone /> 91+ 37586356979</h5>
              </div>
              <div>
                 <h6 className="d-inline h4 p-2"><FaFacebookF /></h6>
                 <h6 className="d-inline h4 p-2"><LiaLinkedinIn /></h6>
              </div>
        </div>
      <Navbar
  style={{
    backgroundColor: "white",
    borderBottom: "1px solid #dee2e6",
    padding: "20px 0",
  }}
>
  <NavbarBrand>
    <Link to={"/construction"} onClick={()=>setActive("construction")} className="font-weight-bold" style={{ fontSize: "30px", fontWeight: "700" }}>
      LOGO
    </Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to={"/construction"} onClick={()=>setActive("construction")} style={{color:(active == "construction"?"orangered":"black")}}>Home</Link>
    </NavItem>
    <NavItem>
      <Link  to={"/about"} onClick={()=>setActive("about")} style={{color:(active == "about"?"orangered":"black")}}>About</Link>
    </NavItem>
    <DropDown style={{ width: "250px" }} label="Services">
      <NavItem>
        <Link to={"/construction-work"} onClick={()=>setActive("construction-work")} style={{color:(active == "construction-work"?"orangered":"black")}}>BUILDING CONTRUCTION</Link>
      </NavItem>
      <NavItem>
        <Link to={"/road-work"} onClick={()=>setActive("road-work")} style={{color:(active == "road-work"?"orangered":"black")}} >ROAD WORKS</Link>
      </NavItem>
      <NavItem>
        <Link onClick={()=>setActive("logistics")} to={"/logistics"} style={{color:(active == "logistics"?"orangered":"black")}} >Logistics</Link>
      </NavItem>
      {/* <NavItem>
        <Link to={"/"}>Irrigation</Link>
      </NavItem> */}
    </DropDown>
    <NavItem>
      <Link onClick={()=>setActive("readymixconcrete")} to={"/readymixconcrete"} style={{color:(active == "readymixconcrete"?"orangered":"black")}} >Readymixconcrete</Link>
    </NavItem>
    <NavItem>
      <Link  onClick={()=>setActive("career")} to={"/career"} style={{color:(active == "career"?"orangered":"black")}} >Career</Link>
    </NavItem>
    <NavItem>
      <Link onClick={()=>setActive("contact")} to={"/contact"} style={{color:(active == "contact"?"orangered":"black")}} >Contact</Link>
    </NavItem>
  </NavbarContent>
</Navbar>
    </div>
  )
}
export default Header
