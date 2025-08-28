import React from 'react';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/dashboard/Home';
import Expense from './pages/dashboard/Expense';
import Income from './pages/dashboard/Income';
const App = () => {
  return (
    <div className='text-2xl'>
    <Router>
      <Routes>
       <Route path='/' element={<Root />} />
       <Route path='/login' exact element={<Login />} />
       <Route path='/signup' exact element={<SignUp />} />
      <Route path='/Expense' exact element={<Expense />} />
       <Route path='/income' exact element={<Income />} />
        <Route path='/dashboard' exact element={<Home />} />

      </Routes>
    </Router>
    </div>
  )
}

export default App

const Root=()=>{
    const isAuthenticated = !!localStorage.getItem("token");
    return isAuthenticated ? (<Navigate to="dashboard/" />) : (<Navigate to="login/" />);
}
