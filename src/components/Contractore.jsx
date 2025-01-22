import {Link} from 'react-router-dom'

// images
import image1 from "../assets/contractor/image-1.jpg";
import image2 from "../assets/contractor/image-2.jpg";
import image3 from "../assets/contractor/image-3.jpg";
import image4 from "../assets/contractor/image-4.jpg";

const Contractore = () => {
  return (
    <div>
        <div className="contractor-banner d-flex justify-content-center align-items-center">
                <div>
                     <p className='text-white fw-bold'>
                         <Link className='text-white fw-bold' to="/construction">Home </Link> / 
                           <Link className='text-white fw-bold ms-1' to="/contact">Contact</Link>
                     </p>
                </div>
        </div>
        {/* our-intro */}
        <div className="contractore-intro py-3 container bg-light">
               <h1 className='text-center text-color brand-font'>Contractor Work</h1>
               <p className='text-center'>Pandian Contractor specializes in delivering comprehensive construction, renovation, and maintenance services tailored to meet the diverse needs of residential, commercial, and industrial projects. Our expertise spans:</p>
              <div className="row">
                   <div className="col-md-12 col-lg-6">
                       <div>
                          <h2 className='text-color'>Our Services</h2>
                          <ul>
                              <li className='py-2 opacity'><strong>Building Construction:</strong> From small-scale residential homes to large commercial complexes, we ensure high-quality construction that adheres to modern standards and customer preferences.</li>
                              <li className='py-2 opacity'><strong>Interior and Exterior Renovations:</strong> Transforming spaces through innovative designs, structural modifications, and aesthetic enhancements.</li>
                              <li className='py-2 opacity'><strong>Roadworks and Civil Projects:</strong> Expertise in laying durable roads, drainage systems, and other civil engineering projects with precision and efficiency.</li>
                              <li className='py-2 opacity'><strong>Electrical and Plumbing Services:</strong> Comprehensive installation, repair, and maintenance services to ensure safety and functionality.</li>
                              <li className='py-2 opacity'><strong>Customized Solutions:</strong> Tailored services to cater to unique client requirements, ensuring timely delivery and cost-effectiveness.</li>
                          </ul>
                       </div>
                   </div>
                   <div className="col-md-12 col-lg-6">
                         <div className='p-3'>
                              <img src={image4} alt="image1" className='img-fluid'/>
                         </div>
                   </div>
              </div>
        </div>
        {/* why choose us */}
         <div className="why-choose">
              <h2 className='text-center py-3 text-text brand-font'>Why Choose Us?</h2>
              <div className="container">
                  <p>At <strong>Perumal</strong> Contractors, we are dedicated to providing top-notch services that combine expertise, quality, and reliability. With years of experience in the industry, we deliver tailored solutions to meet your unique needs, ensuring every project is handled with precision and professionalism. Our commitment to using high-quality materials, adhering to strict timelines, and maintaining transparent communication sets us apart. Backed by a skilled team and a strong reputation for excellence, we offer comprehensive contractor services at competitive prices. Safety and customer satisfaction are our top priorities, making us the trusted choice for all your contracting needs.</p>
              </div>
              <div className="our-description">
                    <div className="container">
                           <div className="row">
                                 <div className="col-md-12 col-lg-6">

                                     <div className="row">
                                          <div className="col-md-6 col-6 mt-3">
                                                <img src={image1} className='w-100' alt="" />
                                          </div>
                                          <div className="col-md-6 col-6 mt-3">
                                                <img src={image2} className='w-100' alt="" />
                                          </div>
                                          <div className="col-md-6 col-6 mt-3 mb-2">
                                                <img src={image3} className='w-100' alt="" />
                                          </div>
                                     </div>
                                 </div>
                                 <div className="col-md-12 col-lg-6">
                                     <h2 className='text-center py-3 text-text brand-font'>Our Team Work</h2>
                                     <ul>
                                         <li><strong>Expertise & Experience:</strong> Proven track record in delivering high-quality contractor services.</li>
                                         <li><strong>Tailored Solutions:</strong> Customized approaches to meet your unique needs.</li>
                                         <li><strong>Timely Delivery:</strong> Commitment to completing projects on schedule.</li>
                                         <li><strong>Quality Materials:</strong> Use of durable and reliable materials.</li>
                                         <li><strong>Affordable Pricing:</strong> Competitive rates with no hidden costs.</li>
                                         <li><strong>Professional Team:</strong> Skilled and dedicated workforce.</li>
                                         <li><strong>Transparency:</strong> Open communication throughout the project.</li>
                                         <li><strong>Comprehensive Services:</strong> One-stop solution for all contracting needs.</li>
                                         <li><strong>Strong Reputation:</strong> Trusted by clients for excellence and reliability.</li>
                                         <li><strong>Safety First:</strong> Adherence to strict safety standards.</li>
                                     </ul>
                                 </div>
                           </div>
                    </div>
              </div>
         </div>
    </div>
  )
}

export default Contractore
