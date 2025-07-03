import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const localLogin = localStorage.getItem("login");

  const [login, setLogin] = useState(localLogin)
  return (
    <>
      <ToastContainer />
      <BrowserRouter className="App">
        <Routes>
          <Route path='/login' element={<LoginForm setLogin={setLogin} />} />
          <Route path='/' element={login ? <HomePage /> : <Navigate to={"/login"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
