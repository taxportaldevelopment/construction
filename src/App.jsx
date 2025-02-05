import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./components/layout/Header"
import Home from "./components/Home"
import Footer from "./components/layout/Footer"
import About from "./components/About"
import Construction from "./components/Construction"
// import RoadWork from "./components/RoadWork"
import Logistics from "./components/Logistics"
import Irrigation from "./components/Irrigation"
// import Readymixconcrete from "./components/Readymixconcrete"
import Career from "./components/Career"
import Contact from "./components/Contact"
// icons
import { FaWhatsapp } from "react-icons/fa";
import Electrical from "./components/Electrical"
import MetroWater from "./components/MetroWater"
import Contractore from "./components/Contractore"
function App() {


  return (
  
       <div>
            <Header/>
           <Routes>
               <Route path="/construction"  element={<Home/>} />
               <Route path="/about"  element={<About/>} />
               <Route path="/construction-work"  element={<Construction/>} />
               {/* <Route path="/electrical"  element={<Electrical/>} />  */}
               <Route path="/metrowater"  element={<MetroWater/>}/>
               <Route path="/contractor"  element={<Contractore/>}/>
               {/* <Route path="/road-work"  element={<RoadWork/>} /> */}
               <Route path="/mechanical"  element={<Logistics/>}/>
               {/* <Route path="/irrigation" element={<Irrigation/>} /> */}
               {/* <Route path="/readymixconcrete" element={<Readymixconcrete/>} />  */}
               <Route path="/career" element={<Career/>} />
               <Route path="/contact" element={<Contact/>} />
           </Routes>
           <Footer/>

           <div className="app-js-icons">
                <div className="icon">
                  <a className="text-white h4" href={`whatsapp:contact=7358273084@s.whatsapp.com&message="I'd like to chat with you`}>
                    <FaWhatsapp />
                  </a>
          
                </div>
           </div>

       </div>
  )
}

export default App
