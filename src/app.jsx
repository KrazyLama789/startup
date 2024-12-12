import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Calendar } from './calendar/calendar';
import { Login } from './login/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
import React from 'react';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header>
                    <nav className="navbar navbar-expand-lg border-bottom border-body">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">BlockOutCal</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className='nav-link' to=''>
                                        Home
                                    </NavLink>
                                    <NavLink className='nav-link' to='calendar'>
                                        Calendar
                                    </NavLink>
                                    <NavLink className='nav-link' to='login'>
                                        <span className="unauth">Login</span> <span className="auth">Username: <span className="username">None</span></span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="navbar navbar-expand-lg border-top border-body">
                    <div className="container-fluid">
                        <div className="text-reset">
                            Author: Mary G.
                        </div>
                        <div className="nav-link">
                            <a href="https://github.com/KrazyLama789/startup.git">Source</a>
                        </div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}
