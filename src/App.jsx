import Navbar from "./components/Navbar"
import './App.css'
import About from "./pages/About"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}

      <Header/>

      {/* <Home/> */}

      {/* <About/> */}

      <Routes>

          <Route path="/" Component={Home} />

          <Route path="/about" Component={About} />

          <Route path="/contacts" Component={Contacts} />

          <Route path="/blog" Component={Blog} />

        </Routes>

      <Footer/>
    </div>
  )
}

export default App