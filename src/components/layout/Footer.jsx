import { BsSend } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import img1 from "../../assets/Construction-rafiki.png"
const Footer = () => {
  return (
    <div>
        <div className="footer-section container-fluid px-5 py-3">
              <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <p className='fw-bold text-warning'>BUILDING WORKS</p>
                       <h6 className="text-white">Start Your Project !</h6>
                        <div className="footer-input py-4">
                         <input type="text" placeholder="Your Email...." />
                         <BsSend className="h3 text-white" />
                        </div>
                        <div className="row fw-bold text-white">
                            <div className="col-md-12 col-lg-4">
                                 <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Service</li>
                                    <li>Project</li>
                                 </ul>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                 <ul>
                                    <li>Contact Us</li>
                                    <li>Career</li>
                                    <li>Road Works</li>
                                    <li>Building Works</li>
                                 </ul>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                 <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Service</li>
                                    <li>Project</li>
                                 </ul>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-6 p-5 d-flex justify-content-center">
                       <img src={img1}  className="w-50" alt="" />
                  </div>
              </div>
              <div className="create-by px-5 d-flex d-flex justify-content-between  py-2 border-top">
                  <p className="text-white">CopyRight@2024</p>
                   <div className="links">
                       <FaInstagram className="text-white h4 ms-2" />
                       <CiFacebook className="text-white h4 ms-2" />
                       <FaGooglePlusG className="text-white h4 ms-2" />
                       <FaXTwitter className="text-white h4 ms-2" />
                   </div>
              </div>
        </div>
    </div>
  )
}

export default Footer
