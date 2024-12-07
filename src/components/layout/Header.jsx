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
const Header = () => {
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
    <Link to={"/"} className="font-weight-bold" style={{ fontSize: "30px", fontWeight: "700" }}>
      LOGO
    </Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to={"/construction"}>Home</Link>
    </NavItem>
    <NavItem>
      <Link to={"/about"}>About</Link>
    </NavItem>
    <DropDown style={{ width: "250px" }} label="Services">
      <NavItem>
        <Link to={"/construction-work"}>BUILDING CONTRUCTION</Link>
      </NavItem>
      <NavItem>
        <Link to={"/road-work"}>ROAD WORKS</Link>
      </NavItem>
      <NavItem>
        <Link to={"/"}>Logistics</Link>
      </NavItem>
      <NavItem>
        <Link to={"/"}>Irrigation</Link>
      </NavItem>
    </DropDown>
    <NavItem>
      <Link to={"/"}>Contact</Link>
    </NavItem>
  </NavbarContent>
  <SideContent>
    <SideItems>Sign In</SideItems>
    <SideItems>Sign Up</SideItems>
  </SideContent>
</Navbar>
    </div>
  )
}

export default Header
