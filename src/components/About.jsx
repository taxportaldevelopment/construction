import { useState,useEffect } from 'react'
// image
import teamDiscuss from "../assets/about/team-discuss.png"; 
import Loading from './layout/Loading';
// import userProfile from "../assets/about/User-Profile-PNG.png"
// icons
import { IoCheckmarkCircle } from "react-icons/io5";
const About = () => {


    useEffect(()=>{
     function getRefresh(){
       window.scrollTo(0, 0);
   }
   getRefresh()
  },[]) 

  return (
  
    <div>
     <div>
        <div className="about-banner d-flex align-items-center p-4">
            <div className=" p-3 container-fluid">
                   <div className="row">
                       <div className="col-md-12 col-lg-5 about-banner-content rounded p-2">   
                       {/* eslint-disable-next-line react/no-unknown-property */}
                       <marquee behavior="alternate" direction="top"> <q className='text-white d-flex'><h5 className='fw-bold brand-font mx-2 text-color about-sec-font'>PANDIAN CONTRACTOR SERVICE</h5></q> </marquee>
                  <p className='text-white p-2 brand-font'>Pandian, a professional contractor with extensive experience in delivering exceptional construction and project management services. My expertise spans residential, commercial, and infrastructure projects, where I focus on quality, efficiency, and customer satisfaction. With a strong team and modern tools, I ensure every project is executed on time and within budget.</p>

                       </div>
                   </div>
             </div>
        </div>
        {/* about intro */}
        <div className="about-intro  mt-2" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                              <h1 className='py-3 text-center brand-font fw-bold text-color'>About Us</h1>
                              <p className=' text-center h5'>WE ARE THE LEADERS IN THE ROAD WORKS SECTOR IN THE STATE OF TAMIL NADU <strong>CONSTRUCTION INDUSTRY!</strong></p>
              <div className="about-section container p-5">
                   <div className="row">
                       <div className="col-md-12 col-lg-6">
                             <div className='p-4 '>
                             <img src={teamDiscuss} className='w-75 bg-white p-3 border' alt="" />
                             </div>
                       </div>
                       <div className="col-md-12 col-lg-6 brand-font">
                           <p>Welcome to <strong>Perumal</strong> Construction and Metro Water Works! Established in 2016, we are a leading provider of construction and water management services. With a strong foundation built on trust, quality, and expertise, we specialize in residential, commercial, and industrial projects, as well as the installation and maintenance of metro water systems.</p>
                           <p>Our mission is to deliver top-notch, reliable, and sustainable solutions to our clients. We focus on creating spaces that are not only functional but also contribute to a better quality of life. Whether it&apos;s building homes, offices, or infrastructure, or managing complex water systems, we approach each project with precision and dedication.</p>
                           <p>With a team of highly skilled professionals, we bring innovative solutions to every challenge, ensuring that all work is completed on time, within budget, and to the highest standards. At Perumal Construction and Metro Water Works, we are committed to exceeding your expectations and helping you achieve your goals, one project at a time.</p>
                      </div>
                   </div>
              </div>
        </div>
        {/* Our Senior Consultant's team profile */}
         <div>
          <div className="about-senior-team container my-4 " data-aos="fade-down">
               <div>
                <h2 className='py-2 text-center text-style text-color brand-font'>Our Senior Consultant&apos;s</h2>
                <div className='d-flex justify-content-center pb-3'><div className='title-span-style'></div></div>
               </div>

               <div className='p-2 brand-font'>
                    <p>
                    Construction work refers to the process of building, altering, repairing, or demolishing
                     structures and infrastructure. It involves a wide range of activities and tasks that can
                      vary depending on the type of construction project. These tasks are typically carried out by 
                      skilled professionals, such as carpenters, electricians, plumbers, engineers, architects, 
                      and construction laborers. The work can be divided into several phases, including:</p>
                      {/* list */}
                      <ul>
                         <li className='py-1'><IoCheckmarkCircle className='h4 text-success' /> <strong>Planning and Design:</strong> This stage involves creating blueprints, obtaining permits, and setting budgets for the project.</li>
                         <li className='py-1'><IoCheckmarkCircle className='h4 text-success' /> <strong>Site Preparation:</strong> This includes clearing the land, excavating, and laying foundations.</li>
                         <li className='py-1'><IoCheckmarkCircle className='h4 text-success' /> <strong>Building and Construction:</strong> This is the core stage where the structure is built. It may involve framing, electrical work, plumbing, roofing, and other specialized trades.</li>
                         <li className='py-1'><IoCheckmarkCircle className='h4 text-success' /> <strong>Finishing:</strong> This includes tasks like painting, flooring, installing fixtures, and making final adjustments.</li>
                         <li className='py-1'><IoCheckmarkCircle className='h4 text-success' /> <strong>Inspection and Handover:</strong> Ensuring the structure meets safety and quality standards before being handed over to the owner or client.</li>
                      </ul>
                      <p>Construction work can apply to various types of projects, 
                         including residential homes, commercial buildings, roads, 
                         bridges, and industrial facilities. It often requires adherence 
                         to safety standards, building codes, and environmental regulations.</p>
               </div>
          </div>

         </div>
    </div>
    </div>

  )
}

export default About
