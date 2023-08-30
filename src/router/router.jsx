import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/">
            <Route path="login" element={<Login/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;