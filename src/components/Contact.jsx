import {Link} from "react-router-dom"
// images
import image1 from "../assets/contact/Service 24_7-rafiki.png"
import image2 from "../assets/contact/user-contact.png";
import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
const Contact = () => {

   const [text,setText] = useState("sriperumalenterprises19@gmail.com")

   function EmailCopy(){
       navigator.clipboard.writeText(text)
       alert("Email copied go to Gmail")
   }
    useEffect(()=>{
      function getRefresh(){
        window.scrollTo(0, 0);
    }
    getRefresh()
   },[]) 
  return (
    <div>
        <div className="contact-section">
              <div className="contact-banner d-flex justify-content-center align-items-center">
              <div>
                 <Link to={"/construction"} className="text-white fw-bold px-2 h5">Home </Link><span className="text-white fw-bold px-2">/</span>
                 <Link to={"/about"} className="text-white fw-bold px-2 h5">About </Link>
             </div>
              </div>

              <div className="container">
                    <div className="row">
                          <div className="col-md-12 col-lg-6 p-3">
                             <img src={image1} className="w-75"  alt="" />
                          </div>
                          <div className="col-md-12 col-lg-6 p-3 d-flex justify-content-center align-items-center">
                                <div>
                                <h2 className="brand-font text-style text-color mt-3">Contact Us</h2>
                                  <div className="email">
                                     <p className="text-warning h5 py-2"><IoCopyOutline className="text-dark" onClick={EmailCopy} role="button" /> {text}</p>
                                  </div>
                                  <div className="address">
                                      <h6>Address</h6>
                                      <p>No.67 C-Block Ezhil Nagar Perumbakkam Pin : Chennai 600100</p>
                                  </div>
                                  <div className="phone">
                                      <h6>Contact US</h6>
                                      <p>(+ 91) 73582 73084 <br /> (+ 91) 44 3140 2500</p>
                                  </div>
                                  <div>
                                      <p className="opacity">At Sri Perumal Construction, we understand that building projects can arise at any time. That’s why we’re available 24/7 to assist you with your construction needs. Whether it's an urgent repair, project inquiry, or expert advice, our dedicated team is just a call away, ready to provide reliable solutions, day or night.</p>
                                  </div>
                                </div>
                          </div>
                    </div>
              </div>
              {/* form-contact */}
              <div className="form-contact p-2">
                     <div className="container">
                          <div className="row">
                               <div className="col-md-12 col-lg-6">
                                      <form>
                                          <h1 className="text-center brand-font">Register</h1>
                                          <div className="form-group">
                                              <label htmlFor="name" className="py-2 opacity fw-bold">Enter Your Name</label>
                                                <div className="d-flex align-items-center">
                                                  <input type="text" className="w-75 p-2 my-2" placeholder="Enter Name...." />
                                                  <CiUser className="text-primary h4" />
                                                </div>
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="email" className="py-2 opacity fw-bold">Enter Your Email</label>
                                                <div className="d-flex d-flex align-items-center">
                                                    <input type="email" className="w-75 p-2 my-2" placeholder="Enter Email...." />
                                                    <MdOutlineMail className="text-primary h4" />
                                                </div>
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="subject" className="py-2 opacity fw-bold d-block">Enter Subject</label>
                                             <textarea name="" id="" className="w-75 p-2" cols="30" rows="4" placeholder="Message....."></textarea>
                                          </div>
                                          <div className="form-group">
                                               <button className="btn btn-primary">SUBMIT</button>
                                          </div>
                                      </form>
                               </div>
                               <div className="col-md-12 col-lg-6">
                                    {/* <img src={image2} className="w-100" alt="" /> */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3518.393033326218!2d80.22230576860451!3d12.974994675795093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzI2LjAiTiA4MMKwMTMnMjEuMyJF!5e1!3m2!1sen!2sin!4v1736752492057!5m2!1sen!2sin" className="w-100" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                               </div>
                          </div>
                     </div>
              </div>
        </div>
    </div>
  )
}

export default Contact
