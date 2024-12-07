import {Link} from "react-router-dom"
import constructionImg from "../assets/construction-section.jpg";
import works from "../assets/conGif.gif"
import ourWork1 from "../assets/our-work-1.jpg";
import ourWork2 from "../assets/our-work-2.jpg";
import ourWork3 from "../assets/our-work-3.jpg";
import ourWork4 from "../assets/our-work-4.jpeg";
// icons
import { IoMdSettings } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
const Construction = () => {
  return (
    <div>
       <div className="contruction-banner d-flex justify-content-center align-items-center">
             <div>
                 <Link to={"/construction"} className="text-white fw-bold px-2 h5">Home </Link><span className="text-white fw-bold px-2">/</span>
                 <Link to={"/about"} className="text-white fw-bold px-2 h5">About </Link>
             </div>
       </div>
       {/* build-own */}
       <div className="container-fluid p-5 bg-secondary my-4">
            <div className="row">
                 <div className="col-md-12 col-lg-4 mt-3">
                    <div className="p-3 border rounded">
                      <h4 className="text-center py-3 alert alert-warning">CONSTRUCTION MANAGEMENT</h4>
                      <p className="text-white">Our strong discipline, innovation, integrity, risk management and 
                        fiscal responsibility are a major part of Traugott’s ethic system</p>
                    </div>
                 </div>
                 <div className="col-md-12 col-lg-4 mt-3">
                    <div className="p-3 border rounded">
                      <h4 className="text-center py-3 alert alert-warning">STIPULATED SUM</h4>
                      <p className="text-white">Our strong discipline, innovation, integrity, risk management and 
                        fiscal responsibility are a major part of Traugott’s ethic system</p>
                    </div>
                 </div>
                 <div className="col-md-12 col-lg-4 mt-3">
                     <div className="p-3 border rounded">

                      <h4 className="text-center py-3 alert alert-warning">DESIGN BUILD</h4>
                      <p className="text-white">We are committed to working within hard budget constraints 
                        while delivering beyond expectations.</p>
                     </div>
                 </div>
            </div>
       </div>
       {/* construction works */}
        <div className="construction-section container">
              <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <div className="p-5">
                        <img src={constructionImg} className="w-100 shadow rounded-" alt="" />
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <div>
                          <h1>Building Construction</h1>
                          <div>
                             <p>We follow the drawing supplied by the clients and execute 
                                the work as per the specification with meticulous attention 
                                to detail. Our executives take a hands-on approach, ensuring that 
                                client expectations are exceeded at every stage of the project. 
                                We handle all types of civil contracts like residential, industrial, 
                                and commercial.</p>
                                <p>We follow the drawing supplied by the clients and execute 
                                the work as per the specification with meticulous attention 
                                to detail. Our executives take a hands-on approach, ensuring that 
                                client expectations are exceeded at every stage of the project. 
                                We handle all types of civil contracts like residential, industrial, 
                                and commercial.</p>
                                <p>We follow the drawing supplied by the clients and execute 
                                the work as per the specification with meticulous attention 
                                to detail. Our executives take a hands-on approach, ensuring that 
                                client expectations are exceeded at every stage of the project. 
                                We handle all types of civil contracts like residential, industrial, 
                                and commercial.</p>
                          </div>
                       </div>
                  </div>
              </div>
        </div>
        <hr />
           <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 col-lg-4 mt-3 p-3">
                         <div className="construction-intro">
                               <div className="cons-intro bg-white p-2">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                      <IoMdSettings className="h1 text-dark" />
                                    </div>
                                    <div className="content">
                                          <h5 className="py-2 text-center">OUR EXPERIENCE</h5>
                                          <p>Our experienced project managers, 
                                            site supervisors and tenant coordinators, 
                                            combined with our extensive fleet and equipment, 
                                            gives us the flexibility to expertly add value 
                                            and quickly respond to job site demands.</p>
                                    </div>
                               </div>
                         </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mt-3 p-3">
                         <div className="construction-intro">
                               <div className="cons-intro bg-white p-2">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                      <FaBuilding className="h1 text-dark" />
                                    </div>
                                    <div className="content">
                                          <h5 className="py-2 text-center">SUCCESS WITHIN RIGID STIPULATED SUMS</h5>
                                          <p>We are committed to working within
                                          hard budget constraints while delivering beyond expectations. 
                                          Our in-house electronic plans room and document distribution 
                                          software allows us to track trade 
                                        involvement & accountability..</p>
                                    </div>
                               </div>
                         </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mt-3 p-3">
                         <div className="construction-intro">
                               <div className="cons-intro bg-white p-2">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                      <IoMdPerson className="h1 text-dark" />
                                    </div>
                                    <div className="content">
                                          <h5 className="py-2 text-center">PROFESSIONALLY QUALIFIED</h5>
                                          <p>Our full-service professional capabilities give developers 
                                            the comfort of knowing a dependable, highly experienced contractor 
                                            is managing a wide spectrum of the project’s construction requirements.</p>
                                    </div>
                               </div>
                         </div>
                    </div>
                </div>
           </div>
           {/* Our Works */}
           <div className="our-work container p-3 my-3">
                <h1 className="text-center py-4 text-style">Our Works</h1>
                 <div className="row">
                     <div className="col-md-12 col-lg-3 mt-4">
                          <div className="our-works">
                              <img src={ourWork1} className="w-100" alt="" />
                              <div className="content">
                                   <h5>METRO WORKS</h5>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-12 col-lg-3 mt-4">
                          <div className="our-works">
                              <img src={ourWork2} className="w-100" alt="" />
                              <div className="content">
                                   <h5>BUILDING WORKS</h5>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-12 col-lg-3 mt-4">
                          <div className="our-works">
                              <img src={ourWork3} className="w-100" alt="" />
                              <div className="content">
                                   <h5>ROAD WORKS</h5>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-12 col-lg-3 mt-4">
                          <div className="our-works">
                              <img src={ourWork4} className="w-100" alt="" />
                              <div className="content">
                                   <h5>HOME WORKS</h5>
                              </div>
                          </div>
                     </div>
                 </div>
           </div>
        {/* condition */}
         <div className="work-condition container-fluid p-3 border" style={{backgroundColor:"#010101"}}>
               <div className="row">
                    <div className="col-md-12 col-lg-6 p-3 d-flex justify-content-center align-items-center">
                        <div>
                         <h1 className="text-style text-warning">Lorem ipsum dolor sit amet.</h1>
                         <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tempora nisi cupiditate voluptate mollitia in quis sunt vel id 
                        iure cum temporibus ratione nihil quasi exercitationem odio, hic 
                        eligendi doloremque, officia itaque cumque. Repudiandae dignissimos, 
                        quidem ullam quasi officiis voluptatum hic.</p>
                         <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tempora nisi cupiditate voluptate mollitia in quis sunt vel id 
                        iure cum temporibus ratione nihil quasi exercitationem odio, hic 
                        eligendi doloremque, officia itaque cumque. Repudiandae dignissimos, 
                        quidem ullam quasi officiis voluptatum hic.</p>
                         <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Tempora nisi cupiditate voluptate mollitia in quis sunt vel id 
                        iure cum temporibus ratione nihil quasi exercitationem odio, hic 
                        eligendi doloremque, officia itaque cumque. Repudiandae dignissimos, 
                        quidem ullam quasi officiis voluptatum hic.</p>

                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                         <img src={works} className="rounded w-100 p-5" alt="" />
                    </div>
               </div> 
         </div>
         
    </div>
  )
}

export default Construction
