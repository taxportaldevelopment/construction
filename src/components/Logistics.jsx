import {Link} from "react-router-dom"
// image
import image1 from "../assets/logistics/img-1.jpg"
import image2 from "../assets/logistics/img-2.jpg"
import image3 from "../assets/logistics/img-3.jpg"
import image4 from "../assets/logistics/img-4.jpg"
import truckGif from "../assets/logistics/truck.gif"
// icons
import { IoSettingsOutline } from "react-icons/io5"; 
import { useState } from "react"
import Loading from "./layout/Loading"
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
        <div className="logistics container p-3">
             <div className="row">
                  <div className="col-md-12 col-lg-4 p-2">
                        <div className="p-2 border rounded">
                             <div className="icons d-flex justify-content-center align-items-center">
                                <IoSettingsOutline className="h2" />

                             </div>
                             <div className="title text-center text-warning">
                                 <h4>Lorem, ipsum</h4>
                             </div>
                             <div className="content">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    </p>
                             </div>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4 p-2">
                        <div className="border rounded p-2">
                             <div className="icons d-flex justify-content-center align-items-center">
                                <IoSettingsOutline className="h2" />

                             </div>
                             <div className="title text-center text-warning">
                                 <h4>Lorem, ipsum</h4>
                             </div>
                             <div className="content">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    </p>
                             </div>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4 p-2">
                        <div className="border rounded p-2">
                             <div className="icons d-flex justify-content-center align-items-center">
                                <IoSettingsOutline className="h2" />

                             </div>
                             <div className="title text-center text-warning">
                                 <h4>Lorem, ipsum</h4>
                             </div>
                             <div className="content">
                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Laboriosam ex sint iste nobis exercitationem aliquid rem 
                                    saepe deserunt ut illum.
                                    </p>
                             </div>
                        </div>
                  </div>
             </div>
        </div>
        <div className="container">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <img src={image1} className="w-100 p-3 rounded" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-warning">Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                  </div>
             </div>
        </div>
        <div className="container">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-warning">Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <img src={image2} className="w-100 p-3 rounded" alt="" />
                  </div>
             </div>
        </div>
        <div className="container">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <img src={image3} className="w-100 p-3 rounded" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-warning">Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                  </div>
             </div>
        </div>
        <div className="container">
        <div className="row">
                  <div className="col-md-12 col-lg-6">
                      <h2 className="text-style text-warning">Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quisquam voluptatibus doloribus quod? Unde sint, harum similique 
                         fuga obcaecati, quisquam officia molestiae iste minima repellat ipsam 
                         ad assumenda exercitationem doloribus dicta.</p>
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <img src={image4} className="w-100 p-3 rounded" alt="" />
                  </div>
             </div>
        </div>
        {/* truckGif */}
         <div className="logistics-banner-truck-road py-5">
        <marquee behavior="" scrollamount="30" direction="">
             <img src={truckGif} className="ms-5" height={200} alt="" />
             <img src={truckGif} className="ms-5" height={200} alt="" />
             <img src={truckGif} className="ms-5" height={200} alt="" />
        </marquee>

         </div>
         </div>:<Loading/>   
       
     }
    </div>
  )
}

export default Logistics
