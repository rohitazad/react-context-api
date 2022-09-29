import React, {useState} from 'react';

import {BrowserRouter  as  Router, Routes, Route}from 'react-router-dom';
import FooterComponents from '../Components/Footer';
import HeaderComponents from '../Components/Header';
import About from '../Containers/About';
import Contact from '../Containers/Contect';
import Home from '../Containers/Home';

const RouterAll = ()=>{
    let [name, setName]= useState('')
    return(
        <>
            <Router>
                <HeaderComponents />
                <Routes>
                    <Route path='/' element={<Home name={name} setname={setName}/>} />
                    <Route path='/about' element={<About name={name} setname={setName}/>} />
                    <Route path='/contact' element={<Contact name={name} />} />
                </Routes>
                <FooterComponents />
            </Router>
        </>
    )
}


export default RouterAll;