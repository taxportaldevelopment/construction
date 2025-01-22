import {Link} from "react-router-dom"
// images
import image1 from "../assets/contact/Service 24_7-rafiki.png"
import image2 from "../assets/contact/user-contact.png";
import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
const Contact = () => {
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
                             <img src={image1} className="w-100"  alt="" />
                          </div>
                          <div className="col-md-12 col-lg-6 p-3 d-flex justify-content-center align-items-center">
                                <div>

                                <h1 className="brand-font text-style mt-3">Contact Us</h1>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Optio repellat, officia accusantium harum voluptatum sint 
                                  fugit aspernatur odio voluptates adipisci!
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Optio repellat, officia accusantium harum voluptatum sint 
                                  fugit aspernatur odio voluptates adipisci!
                                  </p>
                                  <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Optio repellat, officia accusantium harum voluptatum sint 
                                  fugit aspernatur odio voluptates adipisci!
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Optio repellat, officia accusantium harum voluptatum sint 
                                  fugit aspernatur odio voluptates adipisci!
                                  </p>

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
