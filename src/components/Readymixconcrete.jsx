import {Link} from "react-router-dom"
// icons
import { IoSettingsOutline } from "react-icons/io5";
import { TfiCheckBox } from "react-icons/tfi";
import { LiaLightbulb } from "react-icons/lia";
const Readymixconcrete = () => {
  return (
    <div className="readymixconcrete-section">
         <div className="readymixconcrete-banner d-flex justify-content-center align-items-center">
         <div>
                 <Link to={"/construction"} className="text-white px-2 fw-bold">Home</Link><span className="text-white px-2 fw-bold">/</span>
                 <Link to={"/construction-work"} className="text-white px-2 fw-bold">Construction Work</Link>
            </div>
         </div>
         {/* readymixconcrete-banner intro */}
         <div className="container-fluid">
              
         <div className="row p-4">
             <div className="col-md-12 col-lg-5 ">
                   <div className="left-content bg-dark text-white p-4">
                        <h4>Welcome To</h4>
                        <h4>BOSON READYMIX CONCRET</h4>
                        <span>________ /_______</span>
                        <h5><span className="text-primary">Boson Readymix Concrete</span> is one of the leading manufacturers and suppliers of quality concrete in Chennai.</h5>
                        <p className="py-4">Boson ReadyMix has a team of concrete specialists that can help 
                            you analyze your project and provide an innovative concrete mix 
                            design to fit your project’s needs to ensure maximum performance and 
                            cost efficiency. We believe that a superior product and experience can make 
                            a difference. Our staff is dedicated to providing you with courteous, 
                            efficient customer support and service. We are committed to establishing 
                            and supporting a solid trusted relationship with our customers.</p>    
                            <p>We understand the value of time & importance of the quality. 
                                At the end of the day, it is provided us with valuable 
                                experience in the market and everlasting relationships 
                                with important customers like you at all the time.</p>
                  
                   </div>
             </div>
             <div className="col-md-12 col-lg-7">
                   <div className="icons d-flex">
                       <IoSettingsOutline className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">THE ADVANTAGES OF OUR</h4>
                           <p>RMC PLANT</p>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                               <li className="py-2">Fully Equipped Laboratory</li>
                               <li className="py-2">Live view (RMC Plant) – Customers can see the product quality lively</li>
                               <li className="py-2">Our plant Process is fully online System</li>
                           </ul>
                       </div>
                   </div>
                   <div className="icons d-flex">
                       <TfiCheckBox className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">Special FEATURE</h4>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                               <li className="py-2">Fully Equipped Laboratory</li>
                               <li className="py-2">Live view (RMC Plant) – Customers can see the product quality lively</li>
                               <li className="py-2">Our plant Process is fully online System</li>
                           </ul>
                       </div>
                   </div>
                   <div className="icons d-flex">
                       <LiaLightbulb className="h2 me-3 text-primary" />
                       <div className="content">
                           <h4 className="text-warning">Special FEATURE</h4>
                           <ul>
                               <li className="py-2">Plant Capacity 60 m3 per Hour</li>
                               <li className="py-2">Portable Pump 3 nos</li>
                               <li className="py-2">07 cum Transit Mixer  14 nos</li>
                           </ul>
                       </div>
                   </div>
             </div>
         </div>
         </div>
    </div>
  )
}

export default Readymixconcrete
