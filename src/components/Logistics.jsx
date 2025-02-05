import {Link} from "react-router-dom"
// image
import image1 from "../assets/logistics/mechanical/image-1.jpg"
import image2 from "../assets/logistics/mechanical/image-2.jpeg"
import image3 from "../assets/logistics/mechanical/image-3.jpeg"
import image4 from "../assets/logistics/mechanical/image-4.jpg"
import truckGif from "../assets/logistics/mechanical-set.gif"
// icons
import { IoSettingsOutline } from "react-icons/io5"; 
import { useEffect, useState } from "react"
import Loading from "./layout/Loading"
import Service from "./compo/Service"
const Logistics = () => {

     const [loading,setLoading] = useState(false);

     setTimeout(()=>{
           setLoading(true)
     },3000)
         useEffect(()=>{
           function getRefresh(){
             window.scrollTo(0, 0);
         }
         getRefresh()
        },[]) 
  return (
    <div>
       {loading?
       <div className="scroll-banner-scroll">
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
                      <h2 className="text-style text-color brand-font">Welding Work&apos;S</h2>
                      <p  className="brand-font">Welding is a process used to join materials, typically metals or thermoplastics, by causing them to fuse together under high heat. This is achieved by melting the workpieces and often adding a filler material to form a strong bond. There are various types of welding techniques, such as MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and Stick welding, each suited to different applications and materials. The process is commonly used in industries like construction, automotive, and manufacturing to create structural components, machinery, and equipment. Welders must carefully control heat, pressure, and the environment to ensure quality and safety. </p>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center">
                       <img src={image2} className="w-50 shadow rounded" alt="" />
                    </div>
                  </div>
             </div>
        </div>
        <div className="container my-4">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <img src={image4} className="w-100 p-3 rounded" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-color brand-font">Electric work</h2>
                       <p className="brand-font">Electric work on a lorry involves the installation, maintenance, and repair of electrical systems within the vehicle. This includes the wiring of lights, indicators, and brake systems to ensure proper functionality. Technicians also work on the truck’s battery, alternator, and starter motor to maintain power flow and start-up reliability. Electric work often includes diagnosing faults in the electrical circuit using specialized tools like multimeters. Repairing or replacing damaged wiring, fuses, and relays is common to prevent short circuits or power loss. Additionally, the electrical systems of modern lorries, including onboard computers and sensors, require attention for optimal performance. Electricians also ensure the proper connection of auxiliary equipment such as air conditioning or in-cabin electronics. They are responsible for ensuring safety features like reverse alarms and lighting systems are working correctly.</p>
                  </div>
             </div>
        </div>
        <div className="container py-3">
        <div className="row">
                  <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                      <div>
                          
                      <h2 className="text-style text-color">Water Service&apos;S</h2>
                     <p className="brand-font">
                     Water service work involves the installation, maintenance, and repair of systems that deliver water to homes, businesses, and other facilities. It includes tasks like laying water pipes, connecting them to municipal or private water sources, and ensuring proper flow and pressure. Technicians also handle the installation of water meters and valves, along with addressing issues like leaks, blockages, and broken pipes. Regular inspections are performed to ensure water quality and system efficiency. Emergency repairs are made as needed to restore service. Workers must follow safety protocols and local regulations while handling tools and equipment. Water service professionals also test and monitor systems for potential risks, including contamination. </p>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <img src={image3} className="w-75 shadow p-1 rounded" alt="" />
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
