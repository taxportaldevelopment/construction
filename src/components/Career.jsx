import {Link} from "react-router-dom";
// icons
import icons1 from "../assets/carrer-icons/icons-1.png";
import icons2 from "../assets/carrer-icons/icons-2.png";
import icons3 from "../assets/carrer-icons/icons-3.png";
import icons4 from "../assets/carrer-icons/icons-4.png";
import gifimg from "../assets/career.gif";
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
const Career = () => {
  return (
    <div>
        <div className="career-section">
                <div className="career-banner d-flex justify-content-center align-items-center">
                <div>
                 <Link to={"/construction"} className="text-white px-2 fw-bold h5">Home</Link><span className="text-white px-2 fw-bold">/</span>
                 <Link to={"/road-work"} className="text-white px-2 fw-bold h5">Road Work</Link>
                 <h2 className="py-3 text-center text-warning">WORK WITH US</h2>
            </div>
                </div>
                <div className="our-career-team-intro container p-lg-4 p-2">
                  <h2 className="opacity text-center text-warning">Work with us to improve your insight, <br />   abilities and life.</h2>    
                    <p className="text-center">At Boson infra, we look for people who are calm with our
                         ethos and value the estimation of tirelessness, comprehensiveness 
                         and duty of making the best decision constantly. On the off chance 
                         that you have the energy to take a stab at worldwide models and 
                         greatness without dismissing the methods being utilized, 
                         Boson infra is the opportune place for you.</p> 

                      <div className="form-submit">

                          <form>
                              <div className="row p-4 rounded bg-secondary">
                                  <div className="col-md-12">
                                       <input type="text" placeholder="Keyword" className="form-control" />
                                  </div>
                                  <div className="col-md-12">
                                       <div className="row mt-4 ">
                                           <div className="col-md-12 col-lg-3 mt-3">
                                                 <select name="" id="" className="form-control">
                                                     <option value="">---select---</option>
                                                     <option value="Non Technical">Non Technical</option>
                                                     <option value="Technical">Technical</option>
                                                     <option value="unskill">unskill</option>
                                                 </select>
                                           </div>
                                           <div className="col-md-12 col-lg-3 mt-3">
                                                 <select name="" id="" className="form-control">
                                                     <option value="">---select Job Type---</option>
                                                     <option value="Parttime">Part Time</option>
                                                     <option value="Fulltime">Fulltime</option>
                                                 </select>
                                           </div>
                                           <div className="col-md-12 col-lg-3 mt-3">
                                                 <select name="" id="" className="form-control">
                                                     <option value="">---Location---</option>
                                                     <option value="chennai">chennai</option>
                                                 </select>
                                           </div>
                                           <div className="col-md-12 col-lg-3 mt-3">
                                                 <button className="btn btn-success">Submit</button>
                                           </div>
                                       </div>
                                  </div>
                              </div>
                          </form>
                     </div>     
                </div>
                {/* details */}
                <div className="career-more">
                <div className="container ">
                     <div className="row p-4">
                     <div className="col-md-12 col-lg-4 mt-4">
                           <div className="border-style text-white">
                                 <div className="parent d-flex align-items-center p-2">
                                <div className="left-side bg-white">
                                     <img src={icons1} height={50} alt="" />
                                </div>
                                <div className="right-side ms-2 p-3">
                                     <span className="fw-bold opacity ">Quantity Surveyor | Sri Perumal Enterprises India Pvt. ltd.</span>
                                </div>
                                 </div>
                                 <div className="job-details px-3">
                                     <span className="opacity" ><FaBriefcase className="h4 p-1 " /> Full Time</span><br />
                                     <span className="opacity" ><IoLocationSharp className="h4 p-1 " />Chennai</span><br />
                                     <span className="opacity" ><FaRegCalendarAlt className="h4 p-1 " />Posted 7 years ago</span><br />
                                     <p className="py-2">Boson Infra is currently seeking to hire Sr. 
                                        Quantity Surveyor (Civil) to be based at Chennai. 
                                        The Quantity Surveyor will...</p>
                                 </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4 mt-4">
                           <div className="border-style text-white">
                                 <div className="parent d-flex align-items-center p-2">
                                <div className="left-side bg-white">
                                     <img src={icons2} height={50} alt="" />
                                </div>
                                <div className="right-side ms-2 p-3">
                                     <span className="fw-bold opacity">Site Engineer | Sri Perumal Enterprises India Pvt. ltd.</span>
                                </div>
                                 </div>
                                 <div className="job-details px-3">
                                     <span className="opacity"><FaBriefcase className="h4 p-1" /> Full Time</span><br />
                                     <span className="opacity"><IoLocationSharp className="h4 p-1" />Chennai</span><br />
                                     <span className="opacity"><FaRegCalendarAlt className="h4 p-1" />Posted 7 years ago</span><br />
                                     <p className="py-2">Diploma / B.E – civil engineers needed with good 
                                        relevant experience in Construction & Real Estate. 
                                        Particularly in Roads Work...</p>
                                 </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4 mt-4">
                           <div className="border-style text-white">
                                 <div className="parent d-flex align-items-center p-2">
                                <div className="left-side bg-white">
                                     <img src={icons3} height={50} alt="" />
                                </div>
                                <div className="right-side ms-2 p-3">
                                     <span className="fw-bold opacity">Electrician | Sri Perumal Enterprises India Pvt. ltd.</span>
                                </div>
                                 </div>
                                 <div className="job-details px-3">
                                     <span className="opacity"><FaBriefcase className="h4 p-1" /> Full Time</span><br />
                                     <span className="opacity"><IoLocationSharp className="h4 p-1" />Chennai</span><br />
                                     <span className="opacity"><FaRegCalendarAlt className="h4 p-1" />Posted 7 years ago</span><br />
                                     <p className="py-2">We would like to hire an Electrician to join our team. 
                                        You will be responsible for installing and 
                                            repairing complex...</p>
                                 </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4 mt-4">
                           <div className="border-style text-white">
                                 <div className="parent d-flex align-items-center p-2">
                                <div className="left-side bg-white">
                                     <img src={icons4} height={50} alt="" />
                                </div>
                                <div className="right-side ms-2 p-3">
                                     <span className="fw-bold opacity">Electrician | Sri Perumal Enterprises India Pvt. ltd.</span>
                                </div>
                                 </div>
                                 <div className="job-details px-3">
                                     <span className="opacity"><FaBriefcase className="h4 p-1" /> Full Time</span><br />
                                     <span className="opacity"><IoLocationSharp className="h4 p-1" />Chennai</span><br />
                                     <span className="opacity"><FaRegCalendarAlt className="h4 p-1" />Posted 7 years ago</span><br />
                                     <p className="py-2">We would like to hire an Electrician to join our team. 
                                        You will be responsible for installing and 
                                            repairing complex...</p>
                                 </div>
                           </div>
                     </div>
                     </div>
                </div>

                </div>
                {/* resume upload */}
                 <div className="container-fluid career-more">
               <div className="container p-4">

                     <h3 className="text-center opacity text-white py-5">Please submit your resume for future consideration. We will 
                        certainly keep you in mind and contact you if a job becomes available ...
                         Drop files here ...</h3>
                         <div className="row">
                             <div className="col-md-12 col-lg-6 p-3 ">
                                    <img src={gifimg} className="w-100  rounded" alt="" />
                                    <h1 className="text-style text-warning">DON&apos;T NEVER GIVE UP !!</h1>
                              </div>
                              <div className="col-md-12 col-lg-6 p-3">
                                    <div className="form text-white">
                                          <form>
                                              <div className="form-group">
                                                    <label htmlFor="username" className="opacity py-2 fw-bold">Enter Your Name *</label>
                                                    <div className="d-flex p-2 career-form-parent">
                                                        <input type="text" id="username" placeholder="Name...." className="ps-2 career-form-group w-100" />
                                                         <CiUser className="h3 text-color" />
                                                    </div>
                                              </div>
                                              <div className="form-group">
                                                    <label htmlFor="emailname" className="opacity py-2 fw-bold">Enter Your Email *</label>
                                                    <div className="d-flex p-2 career-form-parent">
                                                        <input type="email" id="emailname" placeholder="Email...." className="ps-2 career-form-group w-100" />
                                                         <MdOutlineAttachEmail className="h3 text-color" />
                                                    </div>
                                              </div>
                                              <div className="form-group">
                                                    <label htmlFor="emailname" className="opacity py-2 fw-bold">Enter Your Location *</label>
                                                    <div className="d-flex p-2 career-form-parent">
                                                        <input type="text" id="location" placeholder="Location...." className="ps-2 career-form-group w-100" />
                                                         <MdOutlineMyLocation className="h3 text-color" />
                                                    </div>
                                              </div>
                                              <div className="form-group">
                                                   <h6 className="opacity">Scope of interests</h6>
                                                   <div className="d-flex flex-wrap justify-content-evenly">
                                                   <div className="check-box d-flex">
                                                         <div>
                                                             <input type="checkbox"  name="" id="" />
                                                         </div> 
                                                         <div className="ms-2">
                                                             <span>Site Engineer</span>
                                                         </div>
                                                   </div>
                                                   <div className="check-box d-flex">
                                                         <div>
                                                             <input type="checkbox"  name="" id="" />
                                                         </div> 
                                                         <div className="ms-2">
                                                             <span>Store Keeper</span>
                                                         </div>
                                                   </div>
                                                   <div className="check-box d-flex">
                                                         <div>
                                                             <input type="checkbox"  name="" id="" />
                                                         </div> 
                                                         <div className="ms-2">
                                                             <span>Electrician</span>
                                                         </div>
                                                   </div>
                                                   <div className="check-box d-flex">
                                                         <div>
                                                             <input type="checkbox"  name="" id="" />
                                                         </div> 
                                                         <div className="ms-2">
                                                             <span>Admin/Hr</span>
                                                         </div>
                                                   </div>
                                                   <div className="check-box d-flex">
                                                         <div>
                                                             <input type="checkbox"  name="" id="" />
                                                         </div> 
                                                         <div className="ms-2">
                                                             <span>Others</span>
                                                         </div>
                                                   </div>

                                                   </div>
                                              </div>
                                              <div className="form-group py-3">
                                                   <label htmlFor="Department" className="py-2 fw-bold">Department</label>
                                                   <div className="child-round">
                                                         <div className="d-flex">
                                                             <input type="radio" name="work" id="" />
                                                             <span className="ms-3">Site Works</span>
                                                         </div>
                                                         <div className="d-flex mt-3">
                                                             <input type="radio" name="work" id="" />
                                                             <span className="ms-3">Office Work</span>
                                                         </div>
                                                   </div>
                                              </div>
                                              <div className="form-group">
                                                    <label htmlFor="resume" className="opacity py-2 fw-bold">Your File</label>
                                                    <input type="file" className="form-control" />
                                              </div>
                                              <div className="form-group my-2">
                                                   <textarea className="form-control p-2 fw-bold" placeholder="Message...." name="" id="" cols="30" rows="6"></textarea>
                                              </div>
                                              <div className="form-group">
                                                   <button className="btn btn-primary w-100 my-2">SEND MESSAGE</button>
                                              </div>
                                          </form>
                                    </div>
                              </div>
                         </div>
               </div>
                     
                 </div>
        </div>
    </div>
  )
}

export default Career
