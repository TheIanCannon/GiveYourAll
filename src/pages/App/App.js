import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CharityListPage from '../CharityListPage/CharityListPage';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [result, setResult] = useState("");
    return ( < main className = "App" > {
            user ? < >
            <NavBar user = { user } setUser = { setUser }/>  
												<Routes > 
														<Route path="/" element={<CharityListPage/>}/>
												</Routes> 
												</> 
												: 
												<AuthPage setUser = { setUser }/>}  
												</main>
        );
    }