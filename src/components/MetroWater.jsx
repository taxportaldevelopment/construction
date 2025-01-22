import {Link} from "react-router-dom";
// images
import image1 from "../assets/water/image-1.jpeg";
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

const MetroWater = () => {
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
             <p>Pandian Water Supply is a reliable service provider dedicated to delivering clean and safe water for various needs, including residential, commercial, and industrial purposes. With a commitment to quality and timely delivery, Pandian Water Supply ensures customer satisfaction by leveraging efficient infrastructure and professional expertise.</p>
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
                                 <marquee behavior="" direction="left">
                                       <div className="py-2">
                                           <h6>1.) Water Supply:</h6>
                                           <ul className="disc-section">
                                               <li>Provides treated drinking water to households, industries, and commercial establishments.</li>
                                               <li>Maintains pipelines and ensures equitable distribution of water across the city.</li>
                                           </ul>
                                       </div>
                                       <div className="py-2">
                                           <h6>2.) Sewerage Management:</h6>
                                           <ul className="disc-section">
                                               <li>Collects and treats sewage to ensure a clean and hygienic environment.</li>
                                               <li>Operates sewage treatment plants (STPs) to treat wastewater.</li>
                                           </ul>
                                       </div>
                                       <div className="py-2">
                                           <h6>3.) Maintenance and Infrastructure:</h6>
                                           <ul className="disc-section">
                                               <li>Regular maintenance of water mains, pipelines, and sewage lines.</li>
                                               <li>Expansion of infrastructure to meet growing demand in the metropolitan area.</li>
                                           </ul>
                                       </div>
                                       <div className="py-2">
                                           <h6>4.) Customer Services:</h6>
                                           <ul className="disc-section">
                                               <li>Offers online and offline services for billing, payments, and water/sewerage connections.</li>
                                               <li>Addresses complaints related to water supply, sewage blockages, and pipeline issues.</li>
                                           </ul>
                                       </div>
                                 </marquee>
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
    </div>
  )
}

export default MetroWater
