import { RecoilRoot } from 'recoil';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import { Suspense,lazy } from 'react';
const Home = lazy(()=>import("./pages/Home"));
const About = lazy(()=>import("./pages/About"));
const Login = lazy(()=>import("./pages/Login"));
const Contact = lazy(()=>import("./pages/contact"));
const Privacy = lazy(()=>import('./pages/Privacy'));
const Service = lazy(()=>import("./pages/Service"));
const Women = lazy(()=>import("./pages/Women"));
const Men  = lazy(()=>import("./pages/Men"));
const Teenboy  = lazy(()=>import("./pages/Teenboy"));
const Teengirl = lazy(()=>import("./pages/Teengirl"));
const AddtoCart = lazy(()=>import("./pages/AddtoCart"));
function App() {
  
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>} >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path='/teenboy' element={<Teenboy/>}/>
        <Route path='/teengirl' element={<Teengirl/>}/>
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
