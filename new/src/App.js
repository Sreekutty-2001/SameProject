import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/LogIn';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import axios from 'axios'
import { useEffect } from 'react';
function App() {
 const apiCall = async()=>{
   const res = await axios.get('/api/v1/get_user')
   console.log(res);
 }
useEffect(()=>{
  apiCall()
},[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Search />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      
  
      
    </div>
  );
}
export default App;

