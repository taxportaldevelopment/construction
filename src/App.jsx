import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./components/layout/Header"
import Home from "./components/Home"
import Footer from "./components/layout/Footer"
import About from "./components/About"
import Construction from "./components/Construction"
import RoadWork from "./components/RoadWork"

function App() {


  return (
  
       <div>
            <Header/>
           <Routes>
               <Route path="/construction"  element={<Home/>} />
               <Route path="/about"  element={<About/>} />
               <Route path="/construction-work"  element={<Construction/>} />
               <Route path="/road-work"  element={<RoadWork/>} />
           </Routes>
           <Footer/>
       </div>
  )
}

export default App
