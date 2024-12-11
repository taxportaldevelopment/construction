import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import img1 from "../../assets/Construction-rafiki.png"
const Footer = () => {
  return (
    <div>
        <div className="footer-section container-fluid px-3 px-lg-5 py-3 text-white">
              <div className="container">
               <div className="row">
                     <div className="col-md-12 col-lg-3 opacity">
                           <h5 className="py-3 border-bottom opacity text-style">ABOUT US</h5>
                           <p className="opacity">Welcome to [Your Company Name], your trusted partner in construction. 
                              With over [X] years of experience, we specialize in delivering high-quality 
                              construction services for residential, commercial, and industrial projects. 
                              Our mission is to provide exceptional craftsmanship, innovative solutions, and a c
                              ommitment to safety and sustainability.</p>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">
                           <h5 className="py-3 opacity border-bottom text-style">OUR SERVICE</h5>
                           <ul>
                               <li><MdKeyboardArrowRight /> Construction Work</li>
                               <li><MdKeyboardArrowRight /> Roa Work</li>
                               <li><MdKeyboardArrowRight /> logistics</li>
                               <li><MdKeyboardArrowRight /> Readymixconcrete</li>

                           </ul>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">
                          <h5 className="py-3 border-bottom text-style">HEAD OFFICE</h5>
                          <span><IoLocationOutline className="h4" /></span>
                          <p>1st Floor, Duraisamy Complex, 2/3, Velachery 
                              Bypass Rd, Natesan Nagar, Balaji Nagar, Velachery, 
                              Chennai, Tamil Nadu 600042</p>
                          <p><IoIosCall  className="px-1 h2"/> +91 9853797937</p>    
                          <p><MdOutlineMail className="px-1 h2" /> google123@gmail.com</p>
                     </div>
                     <div className="col-md-12 col-lg-3 opacity">
                          <h5 className="py-3 border-bottom text-style">BRANCH OFFICE</h5>
                          <span><IoLocationOutline className="h4" /></span>
                          <p>1st Floor, Duraisamy Complex, 2/3, Velachery 
                              Bypass Rd, Natesan Nagar, Balaji Nagar, Velachery, 
                              Chennai, Tamil Nadu 600042</p>
                              <p><IoIosCall  className="px-1 h2"/> +91 9853797937</p>    
                              <p><MdOutlineMail className="px-1 h2" /> google123@gmail.com</p>    
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
                                <p>CopyRight@</p>
                          </div>
                     </div>
                </div> 
              </div>
        </div>
    </div>
  )
}

export default Footer
