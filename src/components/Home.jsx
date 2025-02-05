import{  useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect"
// image
import Construction from "../assets/home/contruction-work.jpg";
import waterLorry from "../assets/home/water-lorry.png"
// icons
import { BsBuildings } from "react-icons/bs";
import { FcElectricalSensor } from "react-icons/fc";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { GiMechanicalArm } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
// counter
import CountUp from 'react-countup';
import Loading from './layout/Loading';
// images client
// import client1 from "../assets/our-client/client-1.png";
// import client2 from "../assets/our-client/client-2.png";
// import client3 from "../assets/our-client/client-3.png";
// import client4 from "../assets/our-client/client-4.png";
// import client5 from "../assets/our-client/client-5.png";
// import client6 from "../assets/our-client/client-6.png";
// import client7 from "../assets/our-client/client-7.png";
// import client8 from "../assets/our-client/client-8.png";
// import client9 from "../assets/our-client/client-9.png";
// images
import image1 from "../assets/road-work/img/slider-1.png";
import image2 from "../assets/road-work/img/slider-2.jpeg";
import image3 from "../assets/road-work/img/slider-3.jpg";
import image4 from "../assets/road-work/img/slider-4.jpg";
import image5 from "../assets/road-work/img/slider-5.jpg";
import image6 from "../assets/road-work/img/slider-6.jpg";
import image7 from "../assets/road-work/img/slider-7.jpg";
import image8 from "../assets/road-work/img/slider-8.jpg";
import proessProject1 from "../assets/home/img/img-1.png";
import proessProject2 from "../assets/home/img/img-2.png";
import proessProject3 from "../assets/home/img/img-3.png";
// gallery images
import gallery1 from "../assets/home/gallery/gallery-1.jpeg";
import gallery2 from "../assets/home/gallery/gallery-2.jpeg";
import gallery3 from "../assets/home/gallery/gallery-3.jpeg";
import gallery4 from "../assets/home/gallery/gallery-4.jpeg";
import gallery5 from "../assets/home/gallery/gallery-5.jpeg";
import gallery6 from "../assets/home/gallery/gallery-6.jpeg";
import gallery7 from "../assets/home/gallery/gallery-7.jpeg";
import gallery8 from "../assets/home/gallery/gallery-8.jpeg";
import gallery9 from "../assets/home/gallery/gallery-9.jpeg";
import gallery10 from "../assets/home/gallery/gallery-10.jpeg";
import { NavLink } from 'react-router-dom';
const Home = () => {
   const [gallery,setGallery] = useState([gallery1,gallery2,gallery3,gallery4,gallery5,
    gallery6,gallery7,gallery8,gallery9,gallery10]);

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
    // const [ourClient,setOurClient] = useState([client1,client2,client3,client4,client5,client6,client7
    //   ,client8,client9
    // ])
    const [loading,setLoading] = useState(false);

    setTimeout(()=>{
          setLoading(true)  
    },1000)
    
    useEffect(()=>{
      function getRefresh(){
        window.scrollTo(0, 0);
    }
    getRefresh()
   },[]) 

  return (
    <div>

      {loading?
    <div >
        <div className="home-section-banner d-flex justify-content-center text-white fw-bold align-items-center">

                <div>
                  <h1><i>SRI PERUMAL ENTERPRISES</i></h1>
              <div className="h2  d-flex justify-content-center text-text align-items-center">
              <Typewriter
          options={{
            strings: ['CIVIL', "MECHANICAL ENGINEERING",'ELECTRICAL ENGINEERING', 'CONTRACTOR',"CMWSS BOARD "],
            autoStart: true,
            loop: true,
            delay: 75, // Typing speed
          }}
          
        />
              </div>

                </div>
        </div>
        <div className='theme-one'>
        {/* perfect-layout */}
        <div className="container-fluid perfect-layout w-100 p-3">
              <div className="row  d-flex justify-content-evenly ">
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 bg-light border rounded">
                         <div className="p-1 perfect-layout-child p-2">
                       <div className="icons d-flex justify-content-center">
                           <BsBuildings className="h1 text-warning-yes" />
                       </div>
                       <p className="text-center fw-bold text-text">Types of Construction Work</p>
                          <ul>
                              <li className='py-1'><strong className='opacity'>Residential Construction</strong>: This includes building homes, 
                                apartments, and other types of residential buildings.</li>
                                <li className='py-1'><strong className='opacity'>Commercial Construction:</strong> This involves the construction of office buildings, 
                                  shopping centers, schools, hospitals, and other commercial properties.</li>
                          </ul>

                         </div>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 bg-light border rounded">
                       <div className="icons d-flex justify-content-center">
                           <HiMiniBuildingOffice className="h1 text-warning-yes" />
                       </div>
                       <p className="text-center fw-bold text-text">Key Phases of Construction</p>
                          <ul className='opacity'>
                             <li className='py-2'><strong>Planning and Design:</strong> Involves site surveys, architectural design, and obtaining necessary permits.</li>
                             <li className='py-2'><strong>Pre-Construction:</strong> Includes procurement of materials, hiring contractors, and organizing the construction team.</li>                           
                          </ul>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 bg-light border rounded">
                       <div className="icons d-flex justify-content-center">
                           <BiSolidBuildingHouse className="h1 text-warning-yes" />
                       </div>
                       <p className="text-center fw-bold text-text">Key Roles in Construction Work</p>
                         <ul className='opacity'>
                            <li className='py-1'><strong>Architects:</strong> Design the building and create the blueprints.</li>
                            <li className='py-1'><strong>Contractors:</strong> Manage day-to-day construction activities, ensuring work is completed on time and within budget.</li>
                             <li className='py-1'>Engineers: Oversee structural integrity, electrical systems, plumbing, and other technical aspects.</li>
                         </ul>
                   </div>
              </div>
        </div>
        {/* home-intro */}
        <div className="home-introduction container-fluid p-3">
                 <h1 className="para text-color text-center py-4">Welcome to <span className="fw-bold brand-font">Perumal India PVT.LTD</span></h1>
              <div className="container">
              <div className="row">
                 <div className="col-md-12 col-lg-6">
                      <div>
                         <img src={Construction} className="w-75 rounded" alt="" />
                      </div>
                 </div>
                 <div className="col-md-12 col-lg-6 brand-font">
                             <p className='inner-text'><strong>Perumal</strong> Contractor specializes in delivering high-quality contracting services with a focus on precision, efficiency, and customer satisfaction. With years of expertise, Perumal Contractor ensures that every project, big or small, is executed with professionalism and dedication.</p>       

                          <div className='py-3 inner-text'>
                              <ul>
                                 <li className='py-2'><span className='text-text fw-bold'>Construction Excellence :</span> Expertise in residential, commercial, and infrastructure projects, ensuring timely delivery and adherence to quality standards.</li>
                                 <li className='py-2'><span className='text-text fw-bold'>Client-Centric Approach :</span> Tailored solutions to meet the specific needs of clients, ensuring transparency and trust throughout the project lifecycle.</li>
                                 <li className='py-2'><span className='text-text fw-bold'>Innovative Techniques : </span> Utilization of modern tools and sustainable practices to deliver cost-effective and durable solutions.</li>
                              </ul>
                          </div>
                           <NavLink to={"/construction-work"}>
                          <button className="button-85" role="button">Get Start <IoIosArrowRoundForward /></button>
                           </NavLink>
                    </div>
              </div>

              </div>
        </div>
        {/* our service */}
        <div className="our-service container">
                <h2 className="text-center text-style text-color py-4">OUR SERVICE</h2>
           
               <div className="row d-flex justify-content-evenly">
                    <div className="col-md-12 col-lg-5 mt-3">
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
                    <div className="col-md-12 col-lg-5 mt-3">
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
                   <div className="col-md-12 col-lg-5 mt-3">
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
                   <div className="col-md-12 col-lg-5 mt-3">
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
        {/* gallery start */}
           <div className="container-fluid my-4 py-3">
                 <h1 className='text-center py-3'>Gallery</h1>
              <div className='d-flex justify-content-center'>
             <div className="gallery-section">
                  {gallery.map((items,index)=>{
                     return(
                        <div className="child" key={index}>
                             <img src={items} className='w-100' alt="" />
                        </div>
                     )
                  })}
             </div>
              </div>   
           </div>
        {/* gallery end */}
         {/* project-process start */}
             <div className="project-process py-4 my-3 container">
                  <div>
                  <h2 className='text-center brand-font py-2 fw-bold text-color'>Construction Process</h2>
                   <div className='d-flex justify-content-center pb-3'><div className='title-span-style'></div></div>
                  </div>
                  <div className='d-flex justify-content-around flex-wrap'>
                     <div className="process-items mt-3">
                           <div className="image d-flex justify-content-center align-items-center">
                                 <img src={proessProject1} height={150} alt="" />
                           </div>
                           <div className="details">
                               <h1 className='text-center text-success'>01</h1>
                               <p className='fw-bold h5 opacity'>Plan / project</p>
                           </div>
                     </div>
                     <div className="process-items mt-3">
                           <div className="image d-flex justify-content-center align-items-center">
                                 <img src={proessProject2} height={150} alt="" />
                           </div>
                           <div className="details">
                               <h1 className='text-center text-success'>02</h1>
                               <p className='fw-bold h5 opacity'>Design-Build</p>
                           </div>
                     </div>
                     <div className="process-items mt-3">
                           <div className="image d-flex justify-content-center align-items-center">
                                 <img src={proessProject3} height={150} alt="" />
                           </div>
                           <div className="details">
                               <h1 className='text-center text-success'>03</h1>
                               <p className='fw-bold h5 opacity'>Project Execution</p>
                           </div>
                     </div>
                  </div>
             </div>
         {/* project-process end */}
        {/* projects */}
        <div className="projects bramd-bg py-4 mt-5">
         <div className="container my-2">
           <div className="row">
               <div className="col-md-3 col-sm-4 col-xs-6">
                   <div>
                     <div className="d-flex justify-content-center">
                        <FaHandHoldingWater className='text-warning h2' />
                     </div>
                     <div className='d-flex justify-content-center text-white'>
                     <h2>
            
                     <CountUp
                      end={14}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>Metro Water</h6>

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
                      end={738}
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
                      end={35}
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
                      end={27}
                        enableScrollSpy={true}/>
                     </h2>
                   </div>
                     <h6 className='text-white text-center'>Aggregate Experience Yaer</h6>

                   </div>
               </div>
           </div>

            </div>

        </div>
        {/* our client */}
        {/* <div className="container">
           <h1 className='py-3 text-center text-style text-warning brand-font'>OUR HAPPY CLIENT <BsEmojiSmile /></h1>
        <div className="row our-client p-4">
            {ourClient.map((items,index)=>(
             <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center" key={index}>
                  <img src={items} height={100} className='p-3' alt="" />
             </div>

            ))}
        </div>

        </div> */}
               {/* slider-image-carousel */}
                 <div className="container-fluid mt-5">
                 <div className="road-carousel container py-5">
                   <h2 className="text-center py-2 text-color">OUR WORKS</h2>
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
                 <div className='Highway-road-section py-5'>
                 <div className="container">
                     <div className="row">
                          <div className="col-md-12 col-lg-6">
                               <img src={waterLorry} className="w-100 p-4" alt="" />
                          </div>
                          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                               <div className="p-3">
                                   <h2 className="text-uppercase text-color text-style brand-font">Water Supplies</h2>
                                     <p className='text-white brand-font'>
                                     Metro water supplies refer to the water 
                                     resources provided to urban areas through centralized systems. 
                                     These supplies typically come from a variety of sources 
                                     including rivers, reservoirs, lakes, and groundwater, 
                                     and are treated and distributed through extensive 
                                     networks of pipelines, pumps, and water treatment 
                                     plants. The aim is to ensure that large populations 
                                     in metropolitan areas have access to clean and safe 
                                     drinking water, as well as water for other uses 
                                     like sanitation, irrigation, and industrial processes.</p> 
                               </div>
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




