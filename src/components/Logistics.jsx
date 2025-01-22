import {Link} from "react-router-dom"
// image
import image1 from "../assets/logistics/mechanical/image-1.jpg"
import image2 from "../assets/logistics/mechanical/image-2.jpg"
import image3 from "../assets/logistics/mechanical/image-3.jpg"
import image4 from "../assets/logistics/mechanical/image-4.jpg"
import truckGif from "../assets/logistics/mechanical-set.gif"
// icons
import { IoSettingsOutline } from "react-icons/io5"; 
import { useState } from "react"
import Loading from "./layout/Loading"
import Service from "./compo/Service"
const Logistics = () => {

     const [loading,setLoading] = useState(false);

     setTimeout(()=>{
           setLoading(true)
     },3000)
  return (
    <div>
       {loading?
       <div>
        <div className="logistics-banner d-flex justify-content-center align-items-center">
        <div>
                 <Link to={"/construction"} className="text-white px-2 h5 fw-bold">Home</Link><span className="text-white px-2 fw-bold">/</span>
                 <Link to={"/construction-work"} className="text-white px-2 h5 fw-bold">Construction Work</Link>
            </div>
        </div>
        {/* logistics intro */}
         <div className="intro-secriob container p-3">
             <h2 className="text-center py-3 brand-font text-color">Overview of Mechanical Engineering</h2>
             <p>Mechanical Engineering is one of the oldest and broadest branches of engineering. It focuses on the design, analysis, manufacturing, and maintenance of mechanical systems. Mechanical engineers work with a wide range of industries, from aerospace to automotive, energy to robotics, and even manufacturing processes. They apply principles of physics, mathematics, and material science to solve problems and improve technology.</p>
         </div>
        <div className="container mt-4">
        <div className="row">
                  <div className="col-md-12 col-lg-6 p-2">
                       <img src={image1} className="w-100 p-3 rounded" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6 p-3">
                      <h2 className="text-style text-color brand-font">Key Areas of Mechanical Engineering</h2>
                       <ul className="disc">
                          <li>Thermodynamics: The study of heat transfer, energy conservation, and the relationship between various forms of energy in mechanical systems.</li>
                          <li>Fluid Mechanics: Involves understanding the behavior of fluids (liquids and gases) and applying that knowledge to systems like pumps, turbines, and heat exchangers.</li>
                          <li>Dynamics and Vibrations: Mechanical engineers analyze forces and motions within systems. This includes understanding vibrations in structures and machinery to prevent failure or inefficiency.</li>
                          <li>Materials Science: The study of material properties and the selection of the right materials for specific engineering applications, like metals, polymers, ceramics, or composites.</li>
                          <li>Manufacturing Processes: Involves understanding the processes used to create components, including casting, welding, machining, and additive manufacturing (3D printing).</li>
                          <li>Control Systems: The application of feedback and control systems in mechanical devices, used extensively in robotics, automation, and systems requiring precise operation.</li>
                          <li>Design and CAD (Computer-Aided Design): Mechanical engineers use design software to create detailed models and simulations of systems and products before they are physically produced.</li>
                         </ul>
                  </div>
             </div>
        </div>
        <div className="container my-4">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-color brand-font">Design and Manufacturing</h2>
                      <p>Mechanical engineers are responsible for the design and 
                         production of various mechanical systems and products. 
                         They work with tools like Computer-Aided Design (CAD) 
                         software to create detailed models and simulations. 
                         Their expertise ensures that products like engines, 
                         machinery, and consumer devices are functional, 
                         efficient, and durable. Manufacturing processes such 
                         as casting, welding, machining, and 3D printing are 
                         integral to transforming designs into physical objects.</p>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <img src={image2} className="w-100 p-3 rounded" alt="" />
                  </div>
             </div>
        </div>
        <div className="container my-4">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <img src={image3} className="w-100 p-3 rounded" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-color brand-font">Thermodynamics and Heat Transfer</h2>
                       <p>Thermodynamics plays a central role in mechanical engineering, 
                         particularly in systems like engines, power plants, and refrigeration. 
                         Mechanical engineers analyze energy conversion processes, ensuring 
                         that systems efficiently use fuel, reduce waste, and meet performance goals. 
                         Understanding heat transfer (conduction, convection, and radiation) is 
                         key to optimizing these systems, making them energy-efficient 
                         and environmentally friendly.</p>
                  </div>
             </div>
        </div>
        <div className="container py-3">
        <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                      <div>
                          
                      <h2 className="text-style text-color">Control Systems and Automation</h2>
                     <p>Mechanical engineers design control systems that regulate mechanical 
                         processes in machines and systems. This includes feedback 
                         loops, sensors, and actuators used in everything from 
                         robotics to HVAC systems. With the rise of automation and 
                         robotics, mechanical engineers are increasingly involved in 
                         developing advanced systems that improve manufacturing 
                         efficiency, precision, and safety.</p>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <img src={truckGif} className="w-100 p-3 rounded" alt="" />
                  </div>
             </div>
        </div>
           <Service/>
         </div>:<Loading/>   
       
     }
    </div>
  )
}

export default Logistics
