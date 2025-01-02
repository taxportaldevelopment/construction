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
import { MdOutlineMail } from "react-icons/md";
// image
import logo from "../../assets/logo.png";
import { useState } from "react";
const Header = () => {
     const [active,setActive] = useState("construction")
    console.log(active);
    
  return (
    <div className="fw-bold sticky-top">
        <div className="header-contact d-flex justify-content-between py-2 px-3  bramd-bg text-white">
              <div>
                   <div>
                       <a href="tel:+91 9940025556" className="text-white "><h6><FaPhone /> +91 7359273084</h6></a>
                      <a href="mailto:pandiyanp313@gmail.com" className="text-white ms-lg-3"><h6><MdOutlineMail /> sriperumalenterprises19@gmail.com</h6></a>
                      <marquee behavior="" direction="right">
                       <span className="brand-font">No.67 C-Block Ezhil Nagar Perumbakkam Pin : Chennai 600100</span></marquee>
                   </div>

              </div>
              <div className="d-flex justify-content-between">
                 <h6 className=" h4 p-1"><FaFacebookF /></h6>
                 <h6 className=" h4 p-1"><LiaLinkedinIn /></h6>
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
       <img src={logo} height={60} alt="" />
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
        <Link to={"/construction-work"} onClick={()=>setActive("construction-work")} style={{color:(active == "construction-work"?"orangered":"black")}}>CONTRUCTION</Link>
      </NavItem>
      <NavItem>
        <Link onClick={()=>setActive("mechanical")} to={"/mechanical"} style={{color:(active == "mechanical"?"orangered":"black")}} >Mechanical</Link>
      </NavItem>
      {/* <NavItem>
        <Link to={"/"}>Irrigation</Link>
      </NavItem> */}
    </DropDown>
    {/* <NavItem>
      <Link onClick={()=>setActive("readymixconcrete")} to={"/readymixconcrete"} style={{color:(active == "readymixconcrete"?"orangered":"black")}} >Readymixconcrete</Link>
    </NavItem> */}
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
