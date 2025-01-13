import {Link} from "react-router-dom"
import constructionImg from "../assets/construction-section.jpeg";
import works from "../assets/conGif.gif"
// import ourWork1 from "../assets/our-work-1.jpg";
// import ourWork2 from "../assets/our-work-2.jpg";
// import ourWork3 from "../assets/our-work-3.jpg";
// import ourWork4 from "../assets/our-work-4.jpeg";
// icons
import { IoMdSettings } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import Loading from "./layout/Loading";
import { IoIosArrowRoundForward } from "react-icons/io";
// image
import icons1 from "../assets/civil-icons/icons-1.png";
import icons2 from "../assets/civil-icons/icons-2.png";
import icons3 from "../assets/civil-icons/icons-3.png";
import icons4 from "../assets/civil-icons/icons-4.png";
import icons5 from "../assets/civil-icons/icons-5.png";
import icons6 from "../assets/civil-icons/icons-6.png";
import Service from "./compo/Service";
const Construction = () => {

     const [loading,setLoading] = useState(false);

     setTimeout(()=>{
           setLoading(true)
     },3000)

  return (
    <div>

        {loading?
        <div>

       <div className="contruction-banner d-flex justify-content-center align-items-center">
             <div>
                 <Link to={"/construction"} className="text-white fw-bold px-2 h5">Home </Link><span className="text-white fw-bold px-2">/</span>
                 <Link to={"/about"} className="text-white fw-bold px-2 h5">About </Link>
             </div>
       </div>

       {/* construction works */}
        <div className="bg-light">
        <div className="construction-section container">
              <div className="row p-2">
                  <div className="col-md-12 col-lg-6">
                       <div className="p-5">
                        <img src={constructionImg} className="w-100 shadow rounded-" alt="" />
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                       <div>
                          <h1 className="py-3 text-color brand-font">CONTRACTOR</h1>
                          <div>
                               <p className="py-2">&quot;Pandian is an experienced and skilled contractor offering a wide range of services in construction and home improvement. With years of hands-on expertise, Pandian is known for delivering high-quality results on time and within budget. Whether you need minor repairs or large-scale construction projects, Pandian provides professional and reliable services.</p>
                               <button className="button-85 d-flex justify-content-evenly align-items-center" role="button"><span>Contact Us</span> <span className="h5"><IoIosArrowRoundForward /></span></button>
                          </div>
                       </div>
                  </div>
              </div>
        </div>
           
        </div>
            <div className="bg-light">
           <div className="container py-4 construction-intro-section">
                   <hr />
                <div className="row">
                    <div className="col-md-12 col-lg-4 mt-3 p-3">
                         <div className="construction-intro">
                               <div className="cons-intro bg-white p-2">
                                    <div className="  d-flex justify-content-center align-items-center">
                                       <IoMdSettings className="h1 cons-intro-icon" />
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
                                    <div className=" d-flex justify-content-center align-items-center">
                                      <FaBuilding className="h1 cons-intro-icon" />
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
                                      <IoMdPerson className="h1 cons-intro-icon" />
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

            </div>
           {/* service-section */}
            <div className="civil-section-icons bg-light p-2 my-3">
                     <h2 className="text-center text-color py-3 brand-font">Services Offered</h2>
                  <div className="container">
                        <div className="row">
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons1} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>General Construction:</strong> Including residential, commercial, and industrial projects such as new builds, renovations, and expansions.</p>
                                         </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons2} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>Home Renovations:</strong> Transforming interiors and exteriors, including kitchen remodeling, bathroom updates, and full home renovations.</p>
                                         </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons3} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>Plumbing Services:</strong> Installation, maintenance, and repair of plumbing systems.</p><br />
                                         </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons4} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>Electrical Work:</strong> Wiring, electrical troubleshooting, and new system installations.</p>
                                         </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons5} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>Roofing & Siding:</strong> Expert installation and repair of roofing systems and exterior cladding.</p>
                                         </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2 mt-2">
                                  <div className="shadows rounded d-flex justify-content-center align-items-center">
                                         <div className="left-side p-1">
                                               <img src={icons6} height={65} alt="" />
                                         </div>
                                         <div className="right-side p-2">
                                              <p><strong>Painting & Finishing:</strong> Interior and exterior painting services with a focus on durability and aesthetics.</p>
                                         </div>
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
                         <h2 className="text-style brand-font text-text">Why Choose Pandian Contractor Services?</h2>
                           <ul type="circle" className="text-white">
                                 <li>Professionalism: Pandian is committed to maintaining the highest standards of professionalism and customer satisfaction.</li>
                                 <li>Expertise: Years of hands-on experience with a wide variety of projects.</li>
                                 <li>Affordable Solutions: Pandian provides cost-effective solutions without compromising on quality.</li>
                                 <li>Timely Delivery: Committed to completing work on time and with minimal disruption to your daily routine.</li>
                                 <li>Licensed and Insured: Pandian holds all necessary licenses and insurance to guarantee peace of mind for clients.</li>
                           </ul>

                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                         <img src={works} className="rounded w-100 p-5" alt="" />
                    </div>
               </div> 
         </div>
          {/* Our Works */}
           <div className="bg-light">
          <Service/>
           </div>
         </div> :<Loading/>   
        
     }
    </div>
  )
}

export default Construction
