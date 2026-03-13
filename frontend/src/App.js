import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import Home from './Pages/Home.js'
import Services from './Pages/Services.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Catalog from './Pages/Catalog.js'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog"  element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}