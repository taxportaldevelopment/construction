import{  useState } from 'react';

import Typewriter from "typewriter-effect"
// image
import Construction from "../assets/home/Construction-hat-amico.png";
import { MdArrowForwardIos } from "react-icons/md";
// icons
import { BsBuildings } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";
// counter
import CountUp from 'react-countup';
import Loading from './layout/Loading';
const Home = () => {

    const [loading,setLoading] = useState(false);

    setTimeout(()=>{
          setLoading(true)
    },1000)
    

  return (
    <div>

      {loading?
    <div >
        <div className="home-section-banner d-flex justify-content-center text-white fw-bold align-items-center">
              <div className="h2 text-warning brand-font">
              <Typewriter
          options={{
            strings: ['BUILDING CONTRUCTION', " ROAD WORKS",'Logistics', ' Irrigation'],
            autoStart: true,
            loop: true,
            delay: 75, // Typing speed
          }}
          
        />
              </div>
        </div>
        {/* perfect-layout */}
        <div className="container-fluid perfect-layout w-100 p-3">
              <div className="row  d-flex justify-content-evenly ">
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BsBuildings className="h1 text-warning" />
                       </div>
                       <h5 className="text-center fw-bold">Types of Construction Work</h5>
                          <ul>
                              <li className='py-1'><strong>Residential Construction</strong>: This includes building homes, 
                                apartments, and other types of residential buildings.</li>
                                <li className='py-1'><strong>Commercial Construction:</strong> This involves the construction of office buildings, 
                                  shopping centers, schools, hospitals, and other commercial properties.</li>
                              <li className='py-1'><strong>Industrial Construction:</strong> This focuses on constructing factories, 
                              warehouses, power plants, and other industrial facilities.</li>    
                          </ul>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <HiMiniBuildingOffice className="h1 text-warning" />
                       </div>
                       <h5 className="text-center fw-bold">Key Phases of Construction</h5>
                          <ul>
                             <li className='py-2'><strong>Planning and Design:</strong> Involves site surveys, architectural design, and obtaining necessary permits.</li>
                             <li className='py-2'><strong>Pre-Construction:</strong> Includes procurement of materials, hiring contractors, and organizing the construction team.</li>
                             <li className='py-2'><strong>Post-Construction:</strong> Involves inspection, quality control, and finalizing paperwork, followed by the handover to the client.</li>
                           
                          </ul>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BiSolidBuildingHouse className="h1 text-warning" />
                       </div>
                       <h5 className="text-center fw-bold">Key Roles in Construction Work</h5>
                         <ul>
                            <li className='py-1'><strong>Architects:</strong> Design the building and create the blueprints.</li>
                            <li className='py-1'><strong>Contractors:</strong> Manage day-to-day construction activities, ensuring work is completed on time and within budget.</li>
                             <li className='py-1'>Engineers: Oversee structural integrity, electrical systems, plumbing, and other technical aspects.</li>
                             <li className='py-1'><strong>Laborers and Skilled Workers:</strong> These include electricians, plumbers, masons, carpenters, and general laborers who physically carry out the construction work.</li>
                         </ul>
                   </div>
              </div>
        </div>
        {/* home-intro */}
        <div className="home-introduction container-fluid p-3">
              <div className="container">
              <div className="row">
                 <div className="col-md-12 col-lg-6">
                 <p className="para">Welcome to <span className="fw-bold">oson Infra India Private Limited</span></p>
                 <h2 className="opacity">CONTRUCTION COMPANY</h2>
                      <div>
                         <img src={Construction} className="w-100 p-4" alt="" />
                      </div>
                 </div>
                 <div className="col-md-12 col-lg-6">
                         <h2 className="opacity">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                         <p className="opacity">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo id quibusdam vel odio! Dolore illum alias at facere, qui quis?</p>
                         <p className="opacity">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo id quibusdam vel odio! Dolore illum alias at facere, qui quis?</p>
                         <p className="opacity">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo id quibusdam vel odio! Dolore illum alias at facere, qui quis?</p>
       
                          <button className="btn btn-warning px-5 text-white">Build <MdArrowForwardIos /></button>

                          <div>
                              <p className="py-3"><strong > Personal Protective Equipment (PPE)</strong></p>
                              <ul className="unlist">
                                 <li><strong>Wear the Right Gear:</strong>Always wear a hard hat, steel-toe boots, high-visibility vest, gloves, safety glasses, and hearing protection as required.</li>
                                 <li><strong>Check Your PPE:</strong> Ensure PPE is in good condition before use and fits properly.</li>
                              </ul>
                          </div>
                    </div>
              </div>

              </div>
        </div>
        {/* our service */}
        <div className="our-service container">
                <h2 className="text-center text-style">OUR SERVICE</h2>
                <div className="p-4">
              <div className="rows d-flex flex-wrap justify-content-evenly">
                   <div className="border our-home-service rounded py-4 px-5">
                    <div >
                         <div className="icons d-flex">
                             <div className="icon">
                                <FaRoad className="h1" />
                             </div> 
                         <h4 className="ms-3 text-warning">ROAD WORKS</h4>
                         </div>
                    </div>
                    <ul className="unlist">
                        <li>Use Proper Signage and Barriers</li>
                        <li>Wear High-Visibility Clothing</li>
                        <li>Traffic Management Plan</li>
                        <li>Stay Alert and Avoid Distractions</li>
                    </ul>
                       
                   </div>
                   <div className="border our-home-service rounded py-4 px-5">
                    <div >
                         <div className="icons d-flex">
                             <div className="icon">
                                <FaBinoculars className="h1" />
                             </div> 
                         <h4 className="ms-3 text-warning">IRRIGATION</h4>
                         </div>
                    </div>
                    <ul className="unlist">
                        <li>Ensuring consistent crop growth.</li>
                        <li>Enhancing soil fertility and preventing dryness.</li>
                        <li>Supporting farming in arid and semi-arid regions.</li>
                        <li>Increasing food production and securing livelihoods.</li>
                    </ul>
                       
                   </div>
              </div>

              <div className="rows d-flex flex-wrap justify-content-evenly mt-5">
                   <div className="border our-home-service rounded py-4 px-5">
                    <div >
                         <div className="icons d-flex">
                             <div className="icon">
                                <FaBus className="h1" />
                             </div> 
                         <h4 className="ms-3 text-warning text-uppercase">logistics</h4>
                         </div>
                    </div>
                    <ul className="unlist">
                        <li>Ensures timely delivery of products.</li>
                        <li>Reduces costs by optimizing processes.</li>
                        <li>Enhances customer satisfaction through reliable service.</li>
                        <li>Supports global trade by connecting markets and industries.</li>
                    </ul>
                       
                   </div>
                   
                   <div className="border our-home-service rounded py-4 px-5">
                    <div >
                         <div className="icons d-flex">
                             <div className="icon">
                                <BsBuildingsFill className="h1" />
                             </div> 
                         <h4 className="ms-3 text-warning text-uppercase">building construction</h4>
                         </div>
                    </div>
                    <ul className="unlist">
                        <li>Planning and Design</li>
                        <li>Site Preparation</li>
                        <li>Foundation Work</li>
                        <li>Structural Construction</li>
                        <li>Walls and Roofing</li>
                    </ul>
                       
                   </div>
              </div>

                </div>
        </div>

         {/* house works */}
         <div className="house-works container-fluid">
            <h2 className='text-center py-2 text-warning text-style'>HOUSE PLANING</h2>
          <div className="row d-flex justify-content-evenly">
               <div className="col-md-12 col-lg-3 p-2">
                   <div className="cart">
                     <div className="imgBx"></div>
        <div className="content">
            <span className="price">
                <h5 className='text-warning text-center'>House Works</h5>
                <p  className='text-white px-1'><strong className='text-warning'>Price</strong> : ₹ 11,0000</p>
            
             </span>
             <p className='text-white p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero.</p>
              <div className="text-center">
               <button className='btn btn-warning'>Book Now <MdArrowForwardIos className='text-white' /></button>
              </div>
             </div>
                     </div>

               </div>
               <div className="col-md-12 col-lg-3 p-2">
                   <div className="cart">
                     <div className="imgBx cart-image-change"></div>
              <div className="content">
            <span className="price">
                <h5 className='text-warning text-center'>House Works</h5>
                <p  className='text-white px-1'><strong className='text-warning'>Price</strong> : ₹ 11,0000</p>
            
             </span>
             <p className='text-white p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero.</p>
              <div className="text-center">
               <button className='btn btn-warning'>Book Now <MdArrowForwardIos className='text-white' /></button>
              </div>
             </div>
                     </div>

               </div>
               <div className="col-md-12 col-lg-3 p-2">
                   <div className="cart">
                     <div className="imgBx house-three"></div>
        <div className="content">
            <span className="price">
                <h5 className='text-warning text-center'>House Works</h5>
                <p  className='text-white px-1'><strong className='text-warning'>Price</strong> : ₹ 11,0000</p>
            
             </span>
             <p className='text-white p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, libero.</p>
              <div className="text-center">
               <button className='btn btn-warning'>Book Now <MdArrowForwardIos className='text-white' /></button>
              </div>
             </div>
                     </div>

               </div>
          </div>
         </div>

        {/* projects */}
        <div className="projects bg-primary py-4 mt-4">
         <div className="container">
           <div className="row">
               <div className="col-md-3 col-sm-4 col-xs-6">
                   <div>
                     <div className="d-flex justify-content-center">
                        <FaBuilding className='text-warning h2' />
                     </div>
                     <div className='d-flex justify-content-center text-white'>
                     <h2>
            
                     <CountUp
                      end={100}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>No. Of Sites</h6>

                   </div>
               </div>
               <div className="col-md-3 col-sm-4 col-xs-6">
                   <div>
                     <div className="d-flex justify-content-center  ">
                        <GrProjects className='text-warning h2' />
                     </div>
                     <div className='d-flex justify-content-center text-white'>
                     <h2>
            
                     <CountUp
                      end={100}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>Project Completed</h6>

                   </div>
               </div>
               <div className="col-md-3 col-sm-4 col-xs-6">
                   <div>
                     <div className="d-flex justify-content-center  ">
                        <HiOutlineUserGroup className='text-warning h2' />
                     </div>
                     <div className='d-flex justify-content-center text-white'>
                     <h2>
            
                     <CountUp
                      end={100}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>Team Size</h6>

                   </div>
               </div>
               <div className="col-md-3 col-sm-4 col-xs-6">
                   <div>
                     <div className="d-flex justify-content-center  ">
                        <GiTrophyCup className='text-warning h2' />
                     </div>
                     <div className='d-flex justify-content-center text-white'>
                     <h2>
            
                     <CountUp
                      end={100}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>Aggregate Experience</h6>

                   </div>
               </div>
           </div>

            </div>

        </div>
    </div>:<Loading/>
      
    }
    </div>  
  )
}

export default Home




