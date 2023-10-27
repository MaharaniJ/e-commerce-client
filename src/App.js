import Navbar from "./component/header/Navbar";
import Main from "./component/home/Main";
import Newnav from "./component/newnavbar/Newnav";
import Footer from "./component/footer/Footer";
import SignIn from "./component/signin_signup/SignIn";
import SignUp from "./component/signin_signup/SignUp";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/cart/Cart";
import Buynow from "./component/buynow/Buynow";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import './app.css'

function App() {
  const [data,setData] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    })
  },[])
  return (

    <>
     {
      data?(
        <>
         <Navbar />
        <Newnav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/getproduct/:id" element={<Cart/>} />
          <Route path="/buynow" element={<Buynow />}  />
        </Routes>
        <Footer />
        </>
      ):<div className="circle">
        <CircularProgress />
        <h3>Loading...</h3>
      </div>
     }
    </>
  );
}
export default App;
