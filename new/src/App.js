import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/LogIn';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
function App() {
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

