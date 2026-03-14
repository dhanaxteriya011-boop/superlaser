import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar   from './Components/Navbar.js'
import Footer   from './Components/Footer.js'
import WhatsApp from './Components/WhatsApp.js'
import Home     from './Pages/Home.js'
import Services from './Pages/Services.js'
import About    from './Pages/About.js'
import Contact  from './Pages/Contact.js'
import Catalog  from './Pages/Catalog.js'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/services" element={<Services />} />
        <Route path="/catalog"  element={<Catalog />}  />
        <Route path="/about"    element={<About />}    />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
      <Footer />
      {/* WhatsApp floating button — visible on every page */}
      <WhatsApp />
    </BrowserRouter>
  )
}
