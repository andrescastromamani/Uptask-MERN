import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { Projects } from '../components/projects/Projects';

export const Index = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Projects />}
            />
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/register'
                element={<Register />}
            />
        </Routes>
    )
}

