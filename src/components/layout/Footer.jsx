import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import img1 from "../../assets/Construction-rafiki.png"
import { NavLink } from "react-router-dom";
const Footer = () => {
      const currentYear = new Date().getFullYear()
  return (
    <div>
        <div className="footer-section container-fluid px-3 px-lg-5 py-3 text-white">
              <div className="containe">
               <div className="row">
                     <div className="col-md-12 col-lg-3 opacity">
                           <h5 className="py-3 border-bottom opacity text-style">ABOUT US</h5>
                           <p className="opacity">Welcome to Perumal, your trusted partner in construction. 
                              With over 2016 years of experience, we specialize in delivering high-quality 
                              construction services for residential, commercial, and industrial projects. 
                              Our mission is to provide exceptional craftsmanship, innovative solutions, and a c
                              ommitment to safety and sustainability.</p>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">  
                           <h5 className="py-3 opacity border-bottom text-style">QUICK LINKS</h5>
                           <ul>
                               <NavLink to={"/construction"} className={"text-white"}><li><MdKeyboardArrowRight />Home</li></NavLink><br />
                               <NavLink to={"/about"} className={"text-white"}><li><MdKeyboardArrowRight />About</li></NavLink><br />
                               <NavLink to={"/career"} className={"text-white"}><li><MdKeyboardArrowRight />Career</li></NavLink><br />
                               <NavLink to={"/contact"} className={"text-white"}><li><MdKeyboardArrowRight />Contact</li></NavLink><br />
                           </ul>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">  
                           <h5 className="py-3 opacity border-bottom text-style">OUR SERVICE</h5>
                           <ul>
                               <NavLink to={"/construction-work"} className={"text-white"}><li><MdKeyboardArrowRight />Civil Work</li></NavLink><br />
                               <NavLink to={"/contractor"} className={"text-white"}><li><MdKeyboardArrowRight />Contractor Work</li></NavLink><br />
                               <NavLink to={"/mechanical"} className={"text-white"}><li><MdKeyboardArrowRight />Mechanical Work</li></NavLink><br />
                               <NavLink to={"/electrical"} className={"text-white"}><li><MdKeyboardArrowRight />Electrical Work</li></NavLink><br />
                               <NavLink to={"/metrowater"} className={"text-white"}><li><MdKeyboardArrowRight />Metrowater Work</li></NavLink><br />
                           </ul>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">
                          <h5 className="py-3 border-bottom text-style">HEAD OFFICE</h5>
                          <span><IoLocationOutline className="h4" /></span>
                          <p>No.67 C-Block Ezhil Nagar Perumbakkam Pin : Chennai 600100</p>
                          <span><IoIosCall  className="px-1 h2"/>+ 91 44 3140 2500 <br /> <span><IoIosCall  className="px-1 h2"/>+ +91 73582 73084</span> </span>
                             
                          <p><MdOutlineMail className="px-1 h2" /> sriperumalenterprises19@gmail.com</p>
                     </div>

               </div>
                 <div className="details border-top p-2">
                     <div className="row">
                          <div className="col-md-12 col-lg-6 d-flex flex-wrap justify-content-between align-items-center">
                               <div className="fooetr-link d-flex flex-wrap">
                                     <div className="ms-2 foot-media d-flex justify-content-center h3 align-items-center">
                                           <CiFacebook  />
                                     </div>
                                     <div className="ms-2 foot-media d-flex justify-content-center h3 align-items-center">
                                           <FaGooglePlusG  />
                                     </div>
                                     <div className="ms-2 foot-media d-flex justify-content-center h3 align-items-center">
                                           <CiLinkedin  />
                                     </div>
                               </div>
                               <p className="opacity"><strong>Create By : </strong> Ranon infotax private limited</p>
                          </div>
                          <div className="col-md-12 col-lg-6 d-flex justify-content-end">
                                <p>CopyRight@ {currentYear}</p>
                          </div>
                     </div>
                </div> 
              </div>
        </div>
    </div>
  )
}

export default Footer
