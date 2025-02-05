import {Link} from "react-router-dom";
// images
import image1 from "../assets/water/image-1.jpg";
import image2 from "../assets/water/image-2.jpg";
import image3 from "../assets/water/image-3.jpg";
import image4 from "../assets/water/image-4.jpg";
import image5 from "../assets/water/image-5.jpg";
// image
import icons1 from "../assets/civil-icons/icons-1.png";
import icons2 from "../assets/civil-icons/icons-2.png";
import icons3 from "../assets/civil-icons/icons-3.png";
import icons4 from "../assets/civil-icons/icons-4.png";
import icons5 from "../assets/civil-icons/icons-5.png";
import icons6 from "../assets/civil-icons/icons-6.png";
// icons
import { FaHandHoldingWater } from "react-icons/fa";
import { useEffect } from "react";

const MetroWater = () => {
         useEffect(()=>{
           function getRefresh(){
             window.scrollTo(0, 0);
         }
         getRefresh()
        },[]) 
  return (
    <div className="metrowater-sec">
       <div className="metrowater d-flex justify-content-center align-items-center">
               <div>
                <p className="text-white h5">
                   <Link to="/construction" className="text-decoration-none text-white">Home</Link> / 
                   <Link to="/about" className="text-decoration-none text-white"> About</Link>
                </p>
               </div>
       </div>
       <div className="metro-intr container py-5">
             <h2 className="text-center brand-font text-color">SRI PERUMAL ENTERPRISES CMWSS BOARD</h2>
             <p>Perumal Water Supply is a reliable service provider dedicated to delivering clean and safe water for various needs, including residential, commercial, and industrial purposes. With a commitment to quality and timely delivery, Perumal Water Supply ensures customer satisfaction by leveraging efficient infrastructure and professional expertise.</p>
           <div className="row">
                 <div className="col-md-12 col-lg-6">
                       <ul>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" /> Consistent Supply: Uninterrupted water supply tailored to your requirements.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" /> Quality Assurance: Water is treated and tested to meet safety standards.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" /> Wide Coverage: Services available across multiple locations.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" /> Timely Delivery: Ensuring prompt and reliable service every time.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" />Timely Delivery: Punctual water supply to meet your daily and emergency requirements.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" />Quality Assurance: Clean and safe water that adheres to health and safety standards.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" />Customized Solutions: Flexible options for bulk orders, regular supply, and special requirements.</li>
                          <li className="py-1"><FaHandHoldingWater className="h5 me-1" />Affordable Rates: Competitive pricing to suit diverse customer needs.</li>
                       </ul>
                 </div>
                 <div className="col-md-12 col-lg-6 p-3">
                      <div className="p-3">
                           <img src={image1} className="w-100" alt="" />
                      </div>
                 </div>
           </div>
           {/* water section */}
             <div className="container">
                  <div className="row">
                       <div className="ol-md-12 col-lg-6 p-3">
                            <div className="row">
                                  <div className="col-sm-6 col-6 col-lg-6">
                                      <img src={image2} className="w-100" alt="" />
                                  </div>
                                  <div className="col-sm-6 col-6 col-lg-6">
                                        <img src={image3} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="row">
                                  <div className="col-sm-6 col-6 col-lg-6 mt-3">
                                      <img src={image4} className="w-100" alt="" />
                                  </div>
                                  <div className="col-sm-6 col-6 col-lg-6 mt-3">
                                        <img src={image5} className="w-100" alt="" />
                                  </div>
                            </div>
                       </div>
                       <div className="ol-md-12 col-lg-6">
                           <div className="p-3">
                           <div className="py-3">
                              <p>Underground water service refers to the system of pipes and infrastructure that delivers potable water from a public supply or private well to residential, commercial, or industrial properties. The pipes are typically buried beneath the ground to protect them from external damage and to maintain a reliable water flow. These systems are often made of materials like PVC, copper, or ductile iron to ensure durability and resistance to corrosion. The underground service includes a water meter for measuring usage and a shut-off valve for emergency control. Installation of the system requires trenching to lay the pipes at a specific depth to avoid freezing or damage. Proper maintenance is essential to prevent leaks, blockages, or contamination. The system is connected to the local water utility network, ensuring a continuous supply.</p>
                          </div>
                           </div>
                       </div>
                  </div>
             </div> 
       </div>
                  {/* service-section */}
                   <div className="civil-section-icons p-2 my-3">
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
                               </div>
                         </div>
                   </div>
    </div>
  )
}

export default MetroWater
