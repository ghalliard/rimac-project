import { Outlet } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Header from './header';
import Footer from './footer';
import '../../index.scss';

const Layout = () =>{
    return (
        <>
            <NextUIProvider>
                <Header/>
                <Outlet/>
                <Footer/>
            </NextUIProvider>
        </>
    );
}

export default Layout;