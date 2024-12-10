import {Link} from "react-router-dom"

const Contact = () => {
  return (
    <div>
        <div className="contact-section">
              <div className="contact-banner d-flex justify-content-center align-items-center">
              <div>
                 <Link to={"/construction"} className="text-white fw-bold px-2 h5">Home </Link><span className="text-white fw-bold px-2">/</span>
                 <Link to={"/about"} className="text-white fw-bold px-2 h5">About </Link>
             </div>
              </div>

              
        </div>
    </div>
  )
}

export default Contact
