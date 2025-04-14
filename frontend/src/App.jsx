import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}></Route>
          <Route path='/login' exact element={<Login/>}></Route>
          <Route path='/signup' exact element={<SignUp/>}></Route>
          <Route path='/Dashboard' exact element={<Home/>}></Route>
          <Route path='/income' exact element={<Income/>}></Route>
          <Route path='/expense' exact element={<Expense/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root  = () => {
  // check if the token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard"/>
  ) : (
    <Navigate to="/login"/>
  )
}
