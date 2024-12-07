import React, { useEffect, useRef, useState } from 'react';

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

// counter
import CountUp from 'react-countup';
import Loading from './layout/Loading';
const Home = () => {

    const [loading,setLoading] = useState(false);

    setTimeout(()=>{
          setLoading(true)
    },7000)

  return (
    <div>

      {loading?
    <div >
        <div className="home-section-banner d-flex justify-content-center text-white fw-bold align-items-center">
              <div className="h2 text-warning">
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
                       <h5 className="text-center fw-bold">Lorem ipsum dolor sit amet.</h5>
                       <p className="text-center opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        </p>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BsBuildings className="h1 text-warning" />
                       </div>
                       <h5 className="text-center fw-bold">Lorem ipsum dolor sit amet.</h5>
                       <p className="text-center opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        </p>
                   </div>
                   <div className="col-md-12 col-lg-3 perfect-box mt-2 p-3 border bg-white rounded">
                       <div className="icons d-flex justify-content-center">
                           <BsBuildings className="h1 text-warning" />
                       </div>
                       <h5 className="text-center fw-bold">Lorem ipsum dolor sit amet.</h5>
                       <p className="text-center opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur inventore aspernatur est perspiciatis ex officia, 
                        rerum dolorum velit exercitationem cumque?
                        </p>
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
        {/* projects */}
        <div className="projects">
        <CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
//   prefix="EUR "
//   suffix=" left"
//   onEnd={() => console.log('Ended! 👏')}
//   onStart={() => console.log('Started! 💨')}
>
  {/* {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )} */}
      </CountUp>
        </div>
    </div>:<Loading/>
      
    }
    </div>  
  )
}

export default Home




