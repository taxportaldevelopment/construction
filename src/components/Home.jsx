import{  useState } from 'react';
import roadwork from "../assets/road-work/grid-style.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect"
// image
import Construction from "../assets/home/contruction-work.jpg";
import { MdArrowForwardIos } from "react-icons/md";
// icons
import { BsBuildings } from "react-icons/bs";
import { FcElectricalSensor } from "react-icons/fc";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { GiMechanicalArm } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
// counter
import CountUp from 'react-countup';
import Loading from './layout/Loading';
// images client
import client1 from "../assets/our-client/client-1.png";
import client2 from "../assets/our-client/client-2.png";
import client3 from "../assets/our-client/client-3.png";
import client4 from "../assets/our-client/client-4.png";
import client5 from "../assets/our-client/client-5.png";
import client6 from "../assets/our-client/client-6.png";
import client7 from "../assets/our-client/client-7.png";
import client8 from "../assets/our-client/client-8.png";
import client9 from "../assets/our-client/client-9.png";
// images
import image1 from "../assets/road-work/img/slider-1.png";
import image2 from "../assets/road-work/img/slider-2.jpeg";
import image3 from "../assets/road-work/img/slider-3.jpg";
import image4 from "../assets/road-work/img/slider-4.jpg";
import image5 from "../assets/road-work/img/slider-5.jpg";
import image6 from "../assets/road-work/img/slider-6.jpg";
import image7 from "../assets/road-work/img/slider-7.jpg";
import image8 from "../assets/road-work/img/slider-8.jpg";
import imageBottom from "../assets/road-work/road-work-bottom.jpg";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
    const [ourClient,setOurClient] = useState([client1,client2,client3,client4,client5,client6,client7
      ,client8,client9
    ])
    const [loading,setLoading] = useState(false);

    setTimeout(()=>{
          setLoading(true)
    },1000)
    

  return (
    <div>

      {loading?
    <div >
        <div className="home-section-banner d-flex justify-content-center text-white fw-bold align-items-center">

                <div>
                  <h1><i>SRI PERUMAL ENTERPRISES</i></h1>
              <div className="h2 brand-font d-flex justify-content-center align-items-center">
              <Typewriter
          options={{
            strings: ['CIVIL', "MECHANICAL",'ELECTRICAL ENGINEERING', 'CONTRACTOR',"CMWSS BOARD "],
            autoStart: true,
            loop: true,
            delay: 75, // Typing speed
          }}
          
        />
              </div>

                </div>
        </div>
        {/* perfect-layout */}
        <div className="container-fluid perfect-layout w-100 p-3">
              <div className="row  d-flex justify-content-evenly ">
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BsBuildings className="h1 text-warning-yes" />
                       </div>
                       <h5 className="text-center fw-bold">Types of Construction Work</h5>
                          <ul>
                              <li className='py-1'><strong>Residential Construction</strong>: This includes building homes, 
                                apartments, and other types of residential buildings.</li>
                                <li className='py-1'><strong>Commercial Construction:</strong> This involves the construction of office buildings, 
                                  shopping centers, schools, hospitals, and other commercial properties.</li>
                          </ul>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <HiMiniBuildingOffice className="h1 text-warning-yes" />
                       </div>
                       <h5 className="text-center fw-bold">Key Phases of Construction</h5>
                          <ul>
                             <li className='py-2'><strong>Planning and Design:</strong> Involves site surveys, architectural design, and obtaining necessary permits.</li>
                             <li className='py-2'><strong>Pre-Construction:</strong> Includes procurement of materials, hiring contractors, and organizing the construction team.</li>                           
                          </ul>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BiSolidBuildingHouse className="h1 text-warning-yes" />
                       </div>
                       <h5 className="text-center fw-bold">Key Roles in Construction Work</h5>
                         <ul>
                            <li className='py-1'><strong>Architects:</strong> Design the building and create the blueprints.</li>
                            <li className='py-1'><strong>Contractors:</strong> Manage day-to-day construction activities, ensuring work is completed on time and within budget.</li>
                             <li className='py-1'>Engineers: Oversee structural integrity, electrical systems, plumbing, and other technical aspects.</li>
                         </ul>
                   </div>
              </div>
        </div>
        {/* home-intro */}
        <div className="home-introduction container-fluid p-3">
              <div className="container">
              <div className="row">
                 <div className="col-md-12 col-lg-6">
                 <p className="para text-color">Welcome to <span className="fw-bold brand-font">Pandian India Private Limited</span></p>
                      <div>
                         <img src={Construction} className="w-75 rounded" alt="" />
                      </div>
                 </div>
                 <div className="col-md-12 col-lg-6">
                             <p className='inner-text'><strong><i>Pandian Contractor</i></strong> specializes in delivering high-quality contracting services with a focus on precision, efficiency, and customer satisfaction. With years of expertise, Pandian Contractor ensures that every project, big or small, is executed with professionalism and dedication.</p>       
                          <button className="btn btn-warning px-5 text-white">Build <MdArrowForwardIos /></button>

                          <div className='py-3 inner-text'>
                              <ul className="unlist">
                                 <li><strong>Construction Excellence:</strong> Expertise in residential, commercial, and infrastructure projects, ensuring timely delivery and adherence to quality standards.</li>
                                 <li><strong>Client-Centric Approach:</strong> Tailored solutions to meet the specific needs of clients, ensuring transparency and trust throughout the project lifecycle.</li>
                                 <li><strong>Innovative Techniques:</strong> Utilization of modern tools and sustainable practices to deliver cost-effective and durable solutions.</li>
                              </ul>
                          </div>
                    </div>
              </div>

              </div>
        </div>
        {/* our service */}
        <div className="our-service container">
                <h2 className="text-center text-style text-color py-3">OUR SERVICE</h2>

               <div className="row d-flex justify-content-evenly">
                    <div className="col-md-12 col-lg-5">
                    <div className=" our-home-service rounded py-4 px-4">
              <div >
                   <div className="icons d-flex">
                       <div className="icon">
                          <PiBuildings className="h1" />
                       </div> 
                   <h4 className="ms-3 text-text text-uppercase">CIVIL</h4>
                   </div>
              </div>
              <ul type="none" className='inner-text font-size'>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Structural Development:</strong> Expertise in constructing residential, commercial, and industrial buildings, ensuring safety and durability.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Infrastructure Projects:</strong> Skilled in developing roads, bridges, drainage systems, and public utilities with adherence to engineering standards.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Renovation and Repairs:</strong> Comprehensive services for refurbishing and restoring existing structures, ensuring they meet current safety norms.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Sustainable Practices:</strong> Implementation of eco-friendly materials and methods for environmentally responsible construction.</li>
              </ul>
                 
             </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                    <div className=" our-home-service rounded py-4 px-4">
              <div >
                   <div className="icons d-flex">
                       <div className="icon">
                          <GiMechanicalArm className="h1" />
                       </div> 
                   <h4 className="ms-3 text-text text-uppercase">MECHANICAL</h4>
                   </div>
              </div>
              <ul type="none" className='inner-text font-size'>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Equipment Installation:</strong> Expertise in assembling and installing industrial machinery and mechanical systems for seamless operations.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Maintenance and Repairs:</strong> Comprehensive solutions for diagnosing, repairing, and maintaining mechanical equipment to ensure efficiency and longevity.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Fabrication Services:</strong>  Skilled in metal fabrication, including cutting, welding, and assembling components for custom mechanical solutions.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Quality Assurance:</strong> Adherence to safety standards and quality protocols to deliver reliable and high-performing mechanical systems.</li>
              </ul>
                 
             </div>
                    </div>
               </div>
               {/* second row */}
               <div className="row mt-3 d-flex justify-content-evenly">
                   <div className="col-md-12 col-lg-5">
                   <div className=" our-home-service rounded py-4 px-4">
              <div >
                   <div className="icons d-flex">
                       <div className="icon">
                          <FcElectricalSensor className="h1" />
                       </div> 
                   <h4 className="ms-3 text-text">ELECTRICAL ENGINEERING</h4>
                   </div>
              </div>
              <ul type="none" className='inner-text font-size'>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>System Design and Installation:</strong> Expertise in designing and implementing electrical systems for residential, commercial, and industrial projects.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Maintenance and Troubleshooting:</strong> Comprehensive support for diagnosing and resolving electrical issues, ensuring uninterrupted functionality.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Power Distribution:</strong> Proficiency in planning and setting up efficient power distribution networks, including transformers, switchboards, and cabling.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Energy Solutions:</strong> ntegration of sustainable and energy-efficient technologies, such as solar panels and smart grids, to optimize power usage.</li>
              </ul>
                 <br />
             </div>
                   </div>
                   <div className="col-md-12 col-lg-5">
                   <div className=" our-home-service rounded py-4 px-4">
              <div >
                   <div className="icons d-flex">
                       <div className="icon">
                          <PiBuildingApartmentLight className="h1" />
                       </div> 
                   <h4 className="ms-3 text-text">CONTRACTOR</h4>
                   </div>
              </div>
              <ul>
              <ul type="none" className='inner-text font-size'>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Project Management:</strong> Skilled in overseeing construction and development projects, ensuring they are completed on time and within budget.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Resource Coordination:</strong> Efficiently manages labor, materials, and equipment to achieve optimal workflow and productivity.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Quality Assurance:</strong> Ensures all work meets industry standards, safety protocols, and client expectations for durability and precision.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Customized Solutions:</strong> Tailors services to meet the unique requirements of each project, maintaining transparency and adaptability.</li>
              </ul>
              </ul>
                 
             </div>
                   </div>
                   <div className="col-md-12 col-lg-5 mt-3">
                   <div className=" our-home-service rounded py-4 px-4">
              <div >
                   <div className="icons d-flex">
                       <div className="icon">
                          <PiBuildingApartmentLight className="h1" />
                       </div> 
                   <h4 className="ms-3 text-text">CMWSS BOARD</h4>
                   </div>
              </div>
              <ul>
              <ul type="none" className='inner-text font-size'>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Water Supply Management:</strong> Ensures uninterrupted potable water supply to households, industries, and commercial establishments in the Chennai metropolitan area.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Sewage Treatment and Disposal:</strong> Operates and maintains sewage treatment plants to manage wastewater efficiently and sustainably.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Infrastructure Development:</strong> Designs, builds, and upgrades water pipelines, sewage systems, and reservoirs to support urban growth and meet demand.</li>
                  <li className='py-1'><FaHandPointRight className='me-1' /> <strong>Customer Services:</strong> Provides assistance with water connections, billing, and grievance redressal, prioritizing citizen satisfaction and engagement.</li>
              </ul>
              </ul>
                 
             </div>
                   </div>
               </div>
        </div>

         {/* house works */}
         <div className="house-works container-fluid">
            <h2 className='text-center py-4 text-color text-style'>HOUSE PLANING</h2>
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
        <div className="projects bramd-bg py-4 mt-4">
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
        {/* our client */}
        <div className="container">
           <h1 className='py-3 text-center text-style text-warning brand-font'>OUR HAPPY CLIENT <BsEmojiSmile /></h1>
        <div className="row our-client p-4">
            {ourClient.map((items,index)=>(
             <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center" key={index}>
                  <img src={items} height={100} className='p-3' alt="" />
             </div>

            ))}
        </div>

        </div>
               <div className="highway container p-3">
                   <div className="row"> 
                        <div className="col-md-12 col-lg-6">
                             <h2 className="text-center text-color brand-font">Road and Highway <br /> Construction</h2>
                                 <p>Roadworks refer to any kind of activity or project 
                                  aimed at constructing, upgrading, maintaining, or repairing 
                                  road infrastructure. Roadworks may involve several stages, each 
                                  tailored to specific needs such as resurfacing, widening, or 
                                  ensuring roads are in good condition for safety and efficiency. 
                                  Here&apos;s a breakdown of what might be included in a 
                                  typical roadwork project:</p>

        <div>
                         <h3>Planning and Design</h3>
            <ul>
                <li><CiCircleChevRight className='me-2'/>Surveying the area to determine existing road conditions and required improvements.</li>
                <li><CiCircleChevRight className='me-2'/>Designing road layouts, traffic management plans, and environmental considerations.</li>
                <li><CiCircleChevRight className='me-2'/>Permitting to ensure the work is legal and aligns with local policies and regulations.</li>
            </ul>
            <div>
                <h3>Preparation and Mobilization</h3>
                <ul>
                <li><CiCircleChevRight className='me-2'/>Traffic Diversion: Temporary road closures or detours are established to ensure safety and minimize disruption.</li>
                <li><CiCircleChevRight className='me-2'/>Equipment and Materials: Heavy machinery like bulldozers, excavators, and rollers are mobilized. Materials like asphalt, concrete, and road signs are brought to the site.</li>
            </ul>
            </div>
            <div>
                 <h3>Excavation and Earthworks</h3>
                  <ul>
                  <li><CiCircleChevRight className='me-2'/>The existing road may be dug up, and earthworks are carried out to clear the path or adjust the road’s level.</li>
                <li><CiCircleChevRight className='me-2'/>Drainage systems might be installed to prevent water accumulation, which could degrade the road surface over time.</li>

                  </ul>
            </div>
            <div>
                 <h3>Surface Preparation and Paving</h3>
                 <ul>
                <li><CiCircleChevRight className='me-2'/>Subgrade stabilization ensures the base layer is strong enough for heavy traffic.</li>
                <li><CiCircleChevRight className='me-2'/>Asphalt or Concrete Layer: A new layer of asphalt is laid down, or concrete is poured to create the road surface.</li>
            </ul>
            </div>
     </div> 
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <img src={roadwork} className="p-4 w-100" alt="" />
                        <div>
                          <h3>Signage and Safety Features</h3>
                             <ul>
                                <li>Road markings such as lanes and crosswalks are painted.</li>
                                <li>Traffic signs are placed to direct traffic, warn of hazards, or indicate speed limits.</li>
                                <li>Barriers or guardrails may be added to enhance road safety.</li>
                             </ul>
                        </div>
                        <div>
                             <h3>Finishing Touches and Cleanup</h3>
                              <ul>
                                 <li>Surface smoothing is done for a final check on the quality of the road.</li>
                                 <li>Cleanup ensures that debris and excess materials are cleared from the site, and the road is ready for use.</li>
                                 <li>Final inspection to ensure that the work meets all legal and safety standards.</li>
                              </ul>
                        </div>
                        <div>
                            <h3>Ongoing Maintenance</h3>
                            <p>Roads require regular upkeep to remain in good condition. This can include tasks like resurfacing, fixing potholes, and updating signs as necessary.</p>
                        </div>
                        </div>
                   </div>
               </div>
               {/* slider-image-carousel */}
                 <div className="container-fluid bramd-bg">
                 <div className="road-carousel container py-5">
                   <h2 className="text-center py-2 text-white">OUR WORKS</h2>
               <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    swipeable={false}
                    draggable={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "desktop"]} 
                  >
                    <div className="d-flex justify-content-center">
                       <div>
                      <img src={image1} className="w-100 rounded p-2" alt="Image 1" />{" "}
                       </div>
                    </div>
                    <div className="">
                      <img src={image2} className="w-100 rounded p-2" alt="Image 2" />
                    </div>
                    <div className="">
                      <img src={image3} className="w-100 rounded p-2" alt="Image 3" />
                    </div>
                    <div className="">
                      <img src={image4} className="w-100 rounded p-2" alt="Image 4" />
                    </div>
                    <div className="">
                      <img src={image5} className="w-100 rounded p-2" alt="Image 1" />
                    </div>
                    <div className="">
                      <img src={image6} className="w-100 rounded p-2" alt="Image 2" />
                    </div>
                    <div className="">
                      <img src={image7} className="w-100 rounded p-2" alt="Image 3" />
                    </div>
                    <div className="">
                      <img src={image8} className="w-100 rounded p-2" alt="Image 4" />
                    </div>
                  </Carousel>
                  
                  </div>
                    
                 </div>
                 <div className="container">
                     <div className="row">
                          <div className="col-md-12 col-lg-6">
                               <img src={imageBottom} className="w-100 p-4" alt="" />
                          </div>
                          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                               <div className="p-3">
                                   <h2 className="text-uppercase text-color text-style brand-font">highway road</h2>
                                     <p>Highway roadworks involve construction, upgrading, repair, 
                                      or maintenance projects focused on highways, which are major 
                                      roads designed for long-distance travel, often carrying 
                                      large volumes of traffic. These works are critical to ensuring safe, 
                                      efficient, and durable transportation systems that support both local 
                                      and national mobility. Highway roadwork projects may range from minor 
                                      repairs to large-scale construction, and typically follow several key stages:</p> 
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




