import { Form } from 'formik';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/LogIn';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Search />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      
     
      
      
    </div>
  );
}
export default App;

