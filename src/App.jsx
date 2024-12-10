import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./components/layout/Header"
import Home from "./components/Home"
import Footer from "./components/layout/Footer"
import About from "./components/About"
import Construction from "./components/Construction"
import RoadWork from "./components/RoadWork"
import Logistics from "./components/Logistics"
import Irrigation from "./components/Irrigation"
import Readymixconcrete from "./components/Readymixconcrete"
import Career from "./components/Career"
import Contact from "./components/Contact"

function App() {


  return (
  
       <div>
            <Header/>
           <Routes>
               <Route path="/construction"  element={<Home/>} />
               <Route path="/about"  element={<About/>} />
               <Route path="/construction-work"  element={<Construction/>} />
               <Route path="/road-work"  element={<RoadWork/>} />
               <Route path="/logistics"  element={<Logistics/>}/>
               <Route path="/irrigation" element={<Irrigation/>} />
               <Route path="/readymixconcrete" element={<Readymixconcrete/>} /> 
               <Route path="/career" element={<Career/>} />
               <Route path="/contact" element={<Contact/>} />
           </Routes>
           <Footer/>
       </div>
  )
}

export default App
