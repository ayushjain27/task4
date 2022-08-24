import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/resetPassword' element={<ForgetPassword />} />
          <Route exact path='/register' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
