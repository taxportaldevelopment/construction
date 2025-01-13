import {Link} from "react-router-dom";
// image
import image1 from "../assets/electrical/image-1.png";
import gallery1 from "../assets/electrical/gallery-1.jpeg";
import gallery2 from "../assets/electrical/gallery-2.jpg";
import gallery3 from "../assets/electrical/gallery-3.jpeg";
import gallery4 from "../assets/electrical/gallery-4.jpg";
import gallery5 from "../assets/electrical/gallery-5.jpg";
import gallery6 from "../assets/electrical/gallery-6.jpg";

// icons
import { LuUtilityPole } from "react-icons/lu";
const Electrical = () => {
  return (
    <div className="electrical-sec">
         <div className="electrical-section d-flex justify-content-center align-items-center">
               <div>
                   <p className="h5 text-white"><Link to={"/construction"} className="text-white">Home</Link> /  <Link to={"/contact"} className="text-white">Contact</Link></p>
               </div>
         </div>
         {/* our intro */}
         <div className="our-intro p-3">
              <div className="container">
                  <div className="title py-4 d-flex justify-content-center align-items-center"> 
                   <div className="triangle-left"></div>
                   <p className="px-4 h5 text-center text-color brand-font">What Is Electrical Engineering?</p>
                   <div className="triangle-right"></div>
                  </div>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum nulla placeat consequuntur. Aliquid cum harum natus odio repellat atque porro, expedita vero adipisci in voluptates, maxime quo et animi.</p>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum nulla placeat consequuntur. Aliquid cum harum natus odio repellat atque porro, expedita vero adipisci in voluptates, maxime quo et animi.</p>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum nulla placeat consequuntur. Aliquid cum harum natus odio repellat atque porro, expedita vero adipisci in voluptates, maxime quo et animi.</p>

              </div>
         </div>
            {/* our content */}
            <div className="content-details p-3">
                  <div className="container">
                        <div className="row">
                              <div className="col-md-12 col-lg-5">
                                   <div className="p-3">
                                         <img src={image1} className="w-100" alt="" />
                                   </div>
                              </div>
                              <div className="col-md-12 col-lg-7">
                                   <h1 className="brand-font text-color py-4">Lorem ipsum dolor sit amet consectetur.</h1>
                                   <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing 
                                    elit. Rerum natus doloribus rem dolorem consequuntur 
                                    quod odit nesciunt at minus, ut corporis maiores labore
                                     quo dicta! Numquam dolorem laborum corporis sunt! Iste 
                                     unde esse numquam eveniet, aperiam nulla quos cum repellendus?
                                     elit. Rerum natus doloribus rem dolorem consequuntur 
                                    quod odit nesciunt at minus, ut corporis maiores labore
                                     quo dicta! Numquam dolorem laborum corporis sunt! Iste 
                                     unde esse numquam eveniet, aperiam nulla quos cum repellendus?
                                     elit. Rerum natus doloribus rem dolorem consequuntur 
                                    quod odit nesciunt at minus, ut corporis maiores labore
                                     quo dicta! Numquam dolorem laborum corporis sunt! Iste 
                                     unde esse numquam eveniet, aperiam nulla quos cum repellendus?
                                     </p>
                              </div>
                        </div>
                  </div>
            </div>
             <div className="electric-points">
           <div className="container p-3 text-white">
                 <h2 className="py-4 text-center brand-font text-text">ELECTRICAL ENGINEERING</h2>
                           <p className="text-center fw-bold">Electricians are skilled professionals who install, maintain, and repair electrical systems in homes, businesses, and other structures. They are responsible for ensuring the safe and efficient operation of electrical wiring, fixtures, and equipment.</p>
                 <div className="row">
                      <div className="col-md-12 col-lg-6 p-3">
                            <h5>Common Tasks Performed by Electricians:</h5>
                            <ul>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Installation of electrical systems: This includes installing new wiring, outlets, switches, lighting fixtures, and other electrical components.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Maintenance of electrical systems: This includes inspecting electrical systems for safety hazards, repairing or replacing faulty components, and performing routine maintenance.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Troubleshooting and repair of electrical problems: This includes diagnosing and fixing electrical problems, such as power outages, short circuits, and faulty wiring.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Reading and interpreting electrical diagrams: Electricians must be able to read and understand electrical diagrams to properly install and repair electrical systems.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Using electrical tools and equipment: Electricians use a variety of tools and equipment, such as wire strippers, voltmeters, and multimeters, to perform their work.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Adhering to safety regulations: Electricians must follow safety regulations to protect themselves and others from electrical hazards.</li>
                            </ul>
                      </div>
                      <div className="col-md-12 col-lg-6 p-3">
                        {/* second tree */}
                            <h5>Types of Electrical Work:</h5>
                            <ul>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Residential electrical work: This includes installing and repairing electrical systems in homes and apartments.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Commercial electrical work: This includes installing and repairing electrical systems in businesses, such as offices, stores, and factories.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Industrial electrical work: This includes installing and repairing electrical systems in industrial settings, such as power plants and manufacturing facilities.</li>
                            </ul>
                            <h6>Skills Required for Electricians:</h6>
                            <ul>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Technical skills: Electricians must have a strong understanding of electrical theory and be able to apply it to their work.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Problem-solving skills: Electricians must be able to diagnose and troubleshoot electrical problems.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Manual dexterity: Electricians must be able to work with their hands and use tools accurately.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Attention to detail: Electricians must be able to pay attention to detail to ensure that electrical systems are installed and repaired correctly.</li>
                                <li className="py-2"><LuUtilityPole className="h5 text-danger" /> Communication skills: Electricians must be able to communicate effectively with customers and other professionals.</li>
                            </ul>
                      </div>
                 </div>
            </div> 
             </div>
            {/* gallery */}
            <div className="gallery-section p-3">
                  <div className="container">
                       <div className="row">
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery1} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery2} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery3} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery4} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery5} className="w-100" alt="" />
                                  </div>
                            </div>
                            <div className="col-sm-6 col-6 col-lg-4">
                                  <div className="p-2 gallery-img">
                                       <img src={gallery6} className="w-100" alt="" />
                                  </div>
                            </div>
                       </div>
                  </div>
            </div>
    </div>
  )
}

export default Electrical
