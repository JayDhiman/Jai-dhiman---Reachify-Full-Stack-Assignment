import React from 'react';
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(()=> import('./page/Home.jsx'))
const Login = lazy(()=> import('./page/Login.jsx'))
const Register = lazy(()=> import('./page/Register.jsx'))
const Layout = lazy(()=> import('./layout/Layout.jsx'))

const App = () => {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
