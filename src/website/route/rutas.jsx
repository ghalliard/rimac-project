import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Home from '../pages/home';
import { UserContext } from '../context/userGlobalContext';

const Rutas = () => {
    const { data } = useContext(UserContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Navigate to={'/login'} />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/home' element={data === null ? <Navigate to={'/login'} /> : <Home/> } />
                    <Route path='*' element={<NotFound/>}/>
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;