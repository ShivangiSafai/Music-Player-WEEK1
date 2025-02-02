import React from 'react';
import Login from "./pages/Login";
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import { UserData } from './context/User';
import Loading from './components/Loading';
const App = () => {
  const{loading,user,isAuth,}=UserData()
  return <>
  {loading?<Loading />:<BrowserRouter>
  <Routes>
    <Route path="/" element={isAuth?<Home />:<Login />} />
    <Route path="/login" element={isAuth?<Home />:<Login />} />
    <Route path="/register"  element={isAuth?<Home />:<Register />} />
    
  </Routes>
  
  
  </BrowserRouter>}
  
  </>;
};

export default App;