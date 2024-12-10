import {Link} from "react-router-dom"
// image
import image1 from "../assets/readymixconcrete/cong.jpg"
// icons
import { IoSettingsOutline } from "react-icons/io5";
import { TfiCheckBox } from "react-icons/tfi";
import { LiaLightbulb } from "react-icons/lia";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FiTv } from "react-icons/fi";
import { IoIosCloudOutline } from "react-icons/io";
import { TfiDirectionAlt } from "react-icons/tfi";
import { GiTrophyCup } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { BsPersonStanding } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
// images
import img1 from "../assets/readymixconcrete/img-1.jpg";
import img2 from "../assets/readymixconcrete/img-2.jpg";
import img3 from "../assets/readymixconcrete/img-3.jpg";
import CountUp from 'react-countup';
const Readymixconcrete = () => {
  return (
    <div className="readymixconcrete-section">
         <div className="readymixconcrete-banner d-flex justify-content-center align-items-center">
         <div>
                 <Link to={"/construction"} className="text-white px-2 fw-bold">Home</Link><span className="text-white px-2 fw-bold">/</span>
                 <Link to={"/construction-work"} className="text-white px-2 fw-bold">Construction Work</Link>
            </div>
         </div>
         {/* readymixconcrete-banner intro */}
         <div className="container-fluid">
              
         <div className="row p-4">
             <div className="col-md-12 col-lg-5 ">
                   <div className="left-content bg-dark text-white p-4">
                        <h4>Welcome To</h4>
                        <h4>BOSON READYMIX CONCRET</h4>
                        <span>________ /_______</span>
                        <h5><span className="text-primary">Boson Readymix Concrete</span> is one of the leading manufacturers and suppliers of quality concrete in Chennai.</h5>
                        <p className="py-4">Boson ReadyMix has a team of concrete specialists that can help 
                            you analyze your project and provide an innovative concrete mix 
                            design to fit your project’s needs to ensure maximum performance and 
                            cost efficiency. We believe that a superior product and experience can make 
                            a difference. Our staff is dedicated to providing you with courteous, 
                            efficient customer support and service. We are committed to establishing 
                            and supporting a solid trusted relationship with our customers.</p>    
                            <p>We understand the value of time & importance of the quality. 
                                At the end of the day, it is provided us with valuable 
                                experience in the market and everlasting relationships 
                                with important customers like you at all the time.</p>
                  
                   </div>
             </div>
             <div className="col-md-12 col-lg-7">
                   <div className="icons d-flex">
                       <IoSettingsOutline className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">THE ADVANTAGES OF OUR</h4>
                           <p>RMC PLANT</p>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                               <li className="py-2">Fully Equipped Laboratory</li>
                               <li className="py-2">Live view (RMC Plant) – Customers can see the product quality lively</li>
                               <li className="py-2">Our plant Process is fully online System</li>
                           </ul>
                       </div>
                   </div>
                   <div className="icons d-flex">
                       <TfiCheckBox className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">Special FEATURE</h4>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                               <li className="py-2">Fully Equipped Laboratory</li>
                               <li className="py-2">Live view (RMC Plant) – Customers can see the product quality lively</li>
                               <li className="py-2">Our plant Process is fully online System</li>
                           </ul>
                       </div>
                   </div>
                   <div className="icons d-flex">
                       <LiaLightbulb className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">Special FEATURE</h4>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                           </ul>
                       </div>
                   </div>
             </div>
         </div>
         </div>
         {/* WE DELIVER */}
         <div className="we-deliver container-fluid py-3">
              <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="image">
                             <img src={image1} className="w-100 p-2 " alt="" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                           <div className="p-2">
                                <h2><span>WELCOME TO </span>WE DELIVER</h2>
                                <p className="opacity">Residential & Commercial</p>
                                <p ><span>_____ / _____</span></p>
                           </div>
                           <div className="row">
                               <div className="col-md-12 col-lg-6 career-parent-style p-2">
                                   <div className="career-animate-style">
                                       <div className="icons  d-flex justify-content-center align-items-center">
                                           <MdOutlinePhotoLibrary className="h1 text-warning" />
                                       </div>
                                       <div className="details p-1">
                                           <h4 className="text-center">Industrial</h4>
                                           <p className="opacity text-center ">We wish to attain and sustain a qualitative 
                                            improvement in work methods technology levels 
                                            and standards of concrete delivery service.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-12 col-lg-6 career-parent-style p-2">
                                   <div className="career-animate-style">
                                       <div className="icons  d-flex justify-content-center align-items-center">
                                           <FiTv className="h1 text-warning" />
                                       </div>
                                       <div className="details p-1">
                                           <h4 className="text-center">Commercial</h4>
                                           <p className="opacity text-center ">We provide quality monitoring in 
                                            each and every step of the process. Innovative solutions for our customers.
                                            Employees with a passion for performance.</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-12 col-lg-6 career-parent-style p-2">
                                   <div className="career-animate-style">
                                       <div className="icons  d-flex justify-content-center align-items-center">
                                           <IoIosCloudOutline className="h1 text-warning" />
                                       </div>
                                       <div className="details p-1">
                                           <h4 className="text-center">Residential</h4>
                                           <p className="opacity text-center ">Our pledge is to establish their 
                                            expectations & earning their trust through exceptional performance 
                                            of each & every member of the concrete delivery team.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-12 col-lg-6 career-parent-style p-2">
                                   <div className="career-animate-style">
                                       <div className="icons  d-flex justify-content-center align-items-center">
                                           <TfiDirectionAlt className="h1 text-warning" />
                                       </div>
                                       <div className="details p-1">
                                           <h4 className="text-center">Municipal</h4>
                                           <p className="opacity text-center ">Our network in local offices enables us 
                                            to offer our clients the dual advantage of a strong local presence and broader g
                                            eographic reach.</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                    </div>
              </div>
         </div>
         {/* we work process */}
         <div className="work-process container my-3">
                <div>
                     <h2 className="text-center brand-font">Our Work PROCESS</h2>
                     <p> volume of production of ready-mixed concrete depends on the 
                        demand of the construction companies. Usually, orders are placed from the 
                        construction sites. Stringent quality checks are carried out before supplying the 
                        ready-mixed concrete to the construction sites. Samples are collected and tested in 
                        the laboratory as per specifications.</p>

                    <div className="row">
                          <div className="col-md-12 col-lg-4">
                               <div className="border p-3">
                                   <div className="image">
                                        <img src={img1} className="w-100" alt="" />
                                   </div>
                                   <div className="content">
                                        <h2 className="text-center py-2 text-style text-warning">RMC</h2>
                                        <p className="opacity">At  Boson Ready-mix concrete (RMC) is produced in its fully 
                                            automated and computerized concrete batching plants. Phoenix Concrete 
                                            manufacturers and supplies concrete mixes which are specified by the customer, 
                                            the customer specification is designed by producing trial mixes by technically 
                                            sound quality team in its well equipped laboratories as per established procedures 
                                            to comply with various provisions of Indian standards.</p>
                                   </div>
                               </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                          <div className="border p-3">
                                   <div className="image">
                                        <img src={img2} className="w-100" alt="" />
                                   </div>
                                   <div className="content">
                                        <h2 className="text-center py-2 text-style text-warning">Transporting and Placing</h2>
                                        <p className="opacity">Once a customer places the order on Boson Readymix Concrete, the survey team will survey the site to ensure that the transit mixer trucks can access the site.
                                        factors the survey team considers are: 1. The site approach road and the 
                                        ground condition up to the delivering point for the transit mixer should be
                                         safe. 2. Sufficient space should be available for the transit mixer to access
                                          delivery point. 3. The clearances should be sufficient for moving the equipment.
                                           Boson Readymix Concrete boasts of a fleet of 8 transit mixers of 6 M3.</p>
                                   </div>
                               </div>
                          </div>
                          <div className="col-md-12 col-lg-4">
                               <div className="border p-3">
                                   <div className="image">
                                        <img src={img3} className="w-100" alt="" />
                                   </div>
                                   <div className="content">
                                        <h2 className="text-center py-2 text-style text-warning">Concrete Pumps</h2>
                                        <p className="opacity">At  Boson Ready-mix concrete (RMC) is produced in its fully 
                                            automated and computerized concrete batching plants. Phoenix Concrete 
                                            manufacturers and supplies concrete mixes which are specified by the customer, 
                                            the customer specification is designed by producing trial mixes by technically 
                                            sound quality team in its well equipped laboratories as per established procedures 
                                            to comply with various provisions of Indian standards.</p>
                                   </div>
                               </div>
                          </div>
                    </div>    
                </div>
         </div>
         {/* our achive */}
         <div className="container-fluid py-3">
              <div className="row">
                  <div className="col-md-12 col-lg-4">
                         <div className="bg-primary p-3 text-white">
                            <div className="icons d-flex justify-content-center">
                               <GiTrophyCup className="h2" />
                            </div>
                         <h2 className="text-center">
                     <CountUp
                       end={14}
                       enableScrollSpy={true}/>
                      </h2>
                      <p className="text-center"> <span>_____</span></p>
                      <p className="opacity text-center">Years Of Experience</p>
                         </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                         <div className="bg-primary p-3 text-white">
                            <div className="icons d-flex justify-content-center">
                               <FaShoppingBag className="h2" />
                            </div>
                         <h2 className="text-center">
                     <CountUp
                       end={30}
                       enableScrollSpy={true}/>
                      </h2>
                      <p className="text-center"> <span>_____</span></p>
                      <p className="opacity text-center">Sustainable Clients</p>
                         </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                         <div className="bg-primary p-3 text-white">
                            <div className="icons d-flex justify-content-center">
                               <BsPersonStanding className="h2" />
                            </div>
                         <h2 className="text-center">
                     <CountUp
                       end={50}
                       enableScrollSpy={true}/>
                      </h2>
                      <p className="text-center"> <span>_____</span></p>
                      <p className="opacity text-center">Years Of Experience</p>
                         </div>
                  </div>
              </div>
         </div>
         {/* order place */}
         <div className="order-place">
              <h1 className="brand-font text-center py-3">Order Place</h1>
              <p className="text-center px-3 px-lg-4">Do consult a certified structural designer to work out the grade 
                of concrete needed for your structure. make sure that the Boson 
                technical team is hip regarding the proper grade of concrete at the side 
                of alternative relevant details (specific contractual agreement needs or 
                suggestions from the structural designer)</p>
                <div className="container p-3">
                      <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <h1 className="brand-font">Drop Us A Line</h1>
                                 <div className="form-group">
                                       <label htmlFor="organization" className="py-2">Name of Organization (required)</label>
                                       <input type="text" id="organization" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="address" className="py-2">Contact Address (required)</label>
                                       <input type="text" id="address" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="phonenumber" className="py-2">Contact Number (required)</label>
                                       <input type="number" id="phonenumber" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="email" className="py-2">Your Email (required)</label>
                                       <input type="email" id="email" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="Quantity" className="py-2">Required Quantity</label>
                                       <input type="text" id="Quantity" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="Concrete" className="py-2">Grade of Concrete</label>
                                       <input type="text" id="Concrete" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="Requirement" className="py-2">Pump Requirement</label>
                                       <input type="text" id="Requirement" className="form-control" />
                                 </div>
                                 <div className="form-group">
                                       <label htmlFor="Requirement" className="py-2">Your Message</label>
                                       <textarea name="" id="" cols="30" rows="8" className="form-control"/>
                                 </div>
                                 <div className="form-group p-2">
                                      <button className="btn btn-warning text-white">SEND</button>
                                 </div>
                            </div>
                            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center bg-dark text-white">
                                <div>
                                 <h1>PLANT ADDRESS</h1>
                                 <div className="details">
                                     <h5 className="opacity"><FaPhoneAlt className="text-success" /> +91 **********</h5>
                                     <h5 className="opacity"><FaPhoneAlt className="text-success" /> +91 **********</h5>
                                     <h5 className="opacity"><MdOutlineMail className="text-success" /> google1234@gmail.com</h5>
                                     <p className="text-white"><MdMyLocation className="h4"/>address: Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Sunt, neque!</p>
                                 </div>
                                     
                                </div>
                            </div>
                      </div>
                </div>
         </div>
    </div>
  )
}

export default Readymixconcrete
