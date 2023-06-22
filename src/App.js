import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AuthPage from './components/AuthPage/AuthPage';
import HomePage from './components/HomePage/HomePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} />
        <Route index path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} /> */}
        
        <Route path="/" element={<WelcomePage />} />
        <Route index path="/home" element={
              <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
            }
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={
                <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
              }
            />
      </Routes>
    </>
  );
}
