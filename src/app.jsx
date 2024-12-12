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
                    <nav class="navbar navbar-expand-lg border-bottom border-body">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">BlockOutCal</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
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

                <footer class="navbar navbar-expand-lg border-top border-body">
                    <div class="container-fluid">
                        <div className="text-reset">
                            Author: Mary G.
                        </div>
                        <div class="nav-link">
                            <a href="https://github.com/KrazyLama789/startup.git">Source</a> <a href="">Attribution</a>
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
