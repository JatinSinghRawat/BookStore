import React from 'react'
import Home from './Home/Home';
import Courses from './courses/courses';
import { Route, Routes,Navigate } from "react-router-dom";
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
function App() {
  const [authUser,setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={authUser?<Contact/>:<Navigate to="/signup"/>}></Route>
      </Routes>
      <Toaster/>
    </>
    
  );
}

export default App
