import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Branch from "./page/Branch"
import Contact from "./page/Contact"
import Home from "./page/Home"
import Products from "./page/Products"
import ScrollToTop from "./components/ScrollToTop"



function App() {
 

  return (
    <>
    <ScrollToTop />
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/branchs" element={<Branch />} />
       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
