// images
import ourWork1 from "../../assets/our-work-1.jpg";
import ourWork2 from "../../assets/our-work-2.jpg";
import ourWork3 from "../../assets/our-work-3.jpg";
import ourWork4 from "../../assets/our-work-4.jpeg"; 
const Service = () => {
  return (
    <div>
                 <div className="our-work container p-3 my-3">
                      <h1 className="text-center py-4 brand-font text-color">Our Works</h1>
                       <div className="row">
                           <div className="col-md-12 col-lg-3 mt-4">
                                <div className="our-works">
                                    <img src={ourWork1} className="w-100" alt="" />
                                    <div className="content">
                                         <h5>METRO WORKS</h5>
                                    </div>
                                </div>
                           </div>
                           <div className="col-md-12 col-lg-3 mt-4">
                                <div className="our-works">
                                    <img src={ourWork2} className="w-100" alt="" />
                                    <div className="content">
                                         <h5>BUILDING WORKS</h5>
                                    </div>
                                </div>
                           </div>
                           <div className="col-md-12 col-lg-3 mt-4">
                                <div className="our-works">
                                    <img src={ourWork3} className="w-100" alt="" />
                                    <div className="content">
                                         <h5>ROAD WORKS</h5>
                                    </div>
                                </div>
                           </div>
                           <div className="col-md-12 col-lg-3 mt-4">
                                <div className="our-works">
                                    <img src={ourWork4} className="w-100" alt="" />
                                    <div className="content">
                                         <h5>HOME WORKS</h5>
                                    </div>
                                </div>
                           </div>
                       </div>
                 </div>
    </div>
  )
}

export default Service
