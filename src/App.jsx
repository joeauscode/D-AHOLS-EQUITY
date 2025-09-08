import Nav from './componients/Nav'
import Homepage from './componients/Homepage'
import Footer from './componients/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './componients/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './componients/Contact'
import About from './componients/About'
import Portfolio from './componients/Portfolio'
// import { useLocation } from 'react-router-dom'

function App({Openlogin}) {
// const location = useLocation();
  

  return (
    <>
     {/* {location.pathname !== '/login' && } */}
<Nav />
    <Routes>
  
   
   <Route path='/' element={<Homepage Openlogin={Openlogin} />} />
   <Route path='/login' element={<Login />} />
   <Route path='/contact' element={<Contact />}/>
   <Route path='/about' element={<About />} />
   <Route path='/portfolio' element={<Portfolio />} />
    

   </Routes>
      <Footer />
   
    </>
  )
}

export default App
