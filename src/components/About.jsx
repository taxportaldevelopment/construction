import { useState } from 'react'
// image
import introImg from "../assets/about/about-intro.png"
import Loading from './layout/Loading';
import userProfile from "../assets/about/User-Profile-PNG.png"
const About = () => {

    const [loading,setLoading] = useState(false);

    setTimeout(()=>{
          setLoading(true)
    },3000)

  return (
  
    <div>
        {
            loading?
    <div>
        <div className="about-banner d-flex align-items-center p-4">
            <div className="about-banner-content p-3">
                   <marquee behavior="alternate" direction="top"> <q className='text-white'><h2 className='text-white'>CONSTRUCTION WORK</h2></q> </marquee>
                  <p className='text-warning fw-bold text-center'>___Lorem ipsum dolor sit amet.___</p>
                  <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus,<br /> ullam rem quis expedita similique accusamus explicabo? Asperiores,<br /> labore et.</p>
                  <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus,<br /> ullam rem quis expedita similique accusamus explicabo? Asperiores,<br /> labore et.</p>
            </div>
        </div>
        {/* about intro */}
        <div className="about-intro">
              <div className="about-section container p-5">
                   <div className="row">
                       <div className="col-md-12 col-lg-6">
                              <h1 className='py-3'><i>About Us</i></h1>
                              <p className='opacity'>WE ARE THE LEADERS IN THE ROAD WORKS SECTOR IN THE STATE OF TAMIL NADU <strong>CONSTRUCTION INDUSTRY!</strong></p>
                             <div className='p-4'>
                             <img src={introImg} className='w-100' alt="" />
                             </div>
                       </div>
                       <div className="col-md-12 col-lg-6">
                            <p>Our Company was incorporated in the year 2012 by Mr. J.Vivek as a civil engineering infrastructure construction organization. With his sharp personality and interest for brilliance, the Company has developed by a wide margin and effectively executed numerous historic point foundation extends in the fields like Roads, Buildings, Irrigation, site development, logistics and many more.</p>
                           <p>The visionary mind and main thrust behind the development of Boson Infra India Private Limited is Mr.J.vivek, an enthusiastic, new age business person who has possessed the capacity to make incredible progress in setting up, building and building up the organization. He holds his Master in administration</p>
                           <p>BOSON is occupied with the execution of civil engineering projects. The Company gives incorporated designing,integrated engineering, procurement and construction (EPC) services for civil construction and infrastructure sector projects</p>
                           <p>The Company is a class ‘1-A’ established contractor working with various tamilnadu government departments like pwd, highways, housing board, SIPCOT, SIDCO, etc and has successfully completed various projects.</p>
                           <p>With a solid workforce of experts bolstered with innovation and a motivating workplace, BOSON makes a win-win circumstance for our clients and end-clients. The organization’s abilities traverse the whole array of development common and basic, earth work exacation and so on.</p>
                       </div>
                   </div>
              </div>
        </div>
        {/* Our Senior Consultant's team profile */}
          <div className="about-senior-team container my-4">
                <h2 className='py-4 text-center text-style text-warning'>Our Senior Consultant&apos;s team profile</h2>

               <div className="row">
                    <div className="col-md-6 col-lg-4 mt-4">
                         <div className="our-senior-about">
                               <div className="senior-team">
                                    <div className="senior-image d-flex justify-content-center">
                                           <img src={userProfile} height={100} alt="" />
                                    </div>
                                    <div className="senior-team-content">
                                         <h6 className='text-center py-1'>Mr.Ramesh</h6>
                                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, deserunt.</p>
                                    </div>
                               </div>
                         </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4">
                         <div className="our-senior-about">
                               <div className="senior-team">
                                    <div className="senior-image d-flex justify-content-center">
                                           <img src={userProfile} height={100} alt="" />
                                    </div>
                                    <div className="senior-team-content">
                                         <h6 className='text-center py-1'>Mr.Ramesh</h6>
                                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, deserunt.</p>
                                    </div>
                               </div>
                         </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4">
                         <div className="our-senior-about">
                               <div className="senior-team">
                                    <div className="senior-image d-flex justify-content-center">
                                           <img src={userProfile} height={100} alt="" />
                                    </div>
                                    <div className="senior-team-content">
                                         <h6 className='text-center py-1'>Mr.Ramesh</h6>
                                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, deserunt.</p>
                                    </div>
                               </div>
                         </div>
                    </div>
               </div> 
               <div className='p-4'>

               <p className='text-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse 
                fugiat vel nulla. Rerum, mollitia! Voluptatum in, error consectetur aspernatur quisquam sed 
                corporis labore numquam quibusdam eveniet dolor, inventore velit debitis. Minima illum eos cum expedita.
                 Ab sapiente quasi expedita alias molestiae dolorem quis quia, reiciendis aperiam, culpa et sed.</p>
                 <p className='text-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse 
                fugiat vel nulla. Rerum, mollitia! Voluptatum in, error <strong>consectetur</strong> aspernatur quisquam sed 
                corporis labore numquam quibusdam eveniet dolor, inventore velit debitis. Minima illum eos cum expedita.
                 Ab sapiente quasi expedita alias molestiae dolorem quis quia, reiciendis aperiam, culpa et sed.</p>
                 <p className='text-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse 
                fugiat vel nulla. Rerum, mollitia! Voluptatum in, error <strong>consectetur</strong> aspernatur quisquam sed 
                corporis labore numquam quibusdam eveniet dolor, inventore velit debitis. Minima illum eos cum expedita.
                 Ab sapiente quasi expedita alias molestiae dolorem quis quia, reiciendis aperiam, culpa et sed.</p>
               </div>
          </div>
    </div>:<Loading/>
        }
    </div>

  )
}

export default About
