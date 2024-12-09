import {Link} from "react-router-dom"
import roadwork from "../assets/road-work/grid-style.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import image1 from "../assets/road-work/img/slider-1.png";
import image2 from "../assets/road-work/img/slider-2.jpeg";
import image3 from "../assets/road-work/img/slider-3.jpg";
import image4 from "../assets/road-work/img/slider-4.jpg";
import image5 from "../assets/road-work/img/slider-5.jpg";
import image6 from "../assets/road-work/img/slider-6.jpg";
import image7 from "../assets/road-work/img/slider-7.jpg";
import image8 from "../assets/road-work/img/slider-8.jpg";
import imageBottom from "../assets/road-work/road-work-bottom.jpg";
import { useState } from "react";
import Loading from "./layout/Loading";
const RoadWork = () => {
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

        const [loading,setLoading] = useState(false);

        setTimeout(()=>{
              setLoading(true)
        },3000)

  return (
    <div>
       {loading?
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
       {/* slider-image-carousel */}
         <div className="container-fluid bg-warning">
         <div className="road-carousel container py-5">
           <h2 className="text-center py-2 text-white">OUR WORKS</h2>
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
         <div className="container">
             <div className="row">
                  <div className="col-md-12 col-lg-6">
                       <img src={imageBottom} className="w-100 p-4" alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                       <div className="p-3">
                           <h2 className="text-uppercase text-warning text-style">highway road</h2>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                              Ea placeat repudiandae animi velit nostrum ut excepturi ab 
                              reiciendis quasi repellendus.</p>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                              Ea placeat repudiandae animi velit nostrum ut excepturi ab 
                              reiciendis quasi repellendus.</p>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                              Ea placeat repudiandae animi velit nostrum ut excepturi ab 
                              reiciendis quasi repellendus.</p>
                       </div>
                  </div>
             </div>
         </div>
         </div>:<Loading/>
       
      }
    </div>
  )
}

export default RoadWork
