import {Link} from "react-router-dom"
import roadwork from "../assets/road-work/grid-style.png"
const RoadWork = () => {
  return (
    <div>
       <div className="road-work-banner d-flex justify-content-center align-items-center">
            <div>
                 <Link to={"/construction"} className="text-white px-2 fw-bold">Home</Link><span className="text-white px-2 fw-bold">/</span>
                 <Link to={"/construction-work"} className="text-white px-2 fw-bold">Construction Work</Link>
            </div>
       </div>
       <div className="highway container p-3">
           <div className="row"> 
                <div className="col-md-12 col-lg-6">
                     <h2 className="text-center">Road and Highway <br /> Construction</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Excepturi soluta vitae aspernatur doloremque omnis
                     modi mollitia inventore eos nihil ullam animi ex, praesentium 
                     commodi ab veritatis. Sapiente alias minus accusamus!</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Excepturi soluta vitae aspernatur doloremque omnis
                     modi mollitia inventore eos nihil ullam animi ex, praesentium 
                     commodi ab veritatis. Sapiente alias minus accusamus!</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Excepturi soluta vitae aspernatur doloremque omnis
                     modi mollitia inventore eos nihil ullam animi ex, praesentium 
                     commodi ab veritatis. Sapiente alias minus accusamus!</p>
                </div>
                <div className="col-md-12 col-lg-6">
                    <img src={roadwork} className="p-4 w-100" alt="" />
                </div>
           </div>
       </div>
    </div>
  )
}

export default RoadWork
