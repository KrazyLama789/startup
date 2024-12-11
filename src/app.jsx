import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Calendar } from './calendar/calendar';
import { Login } from './login/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                            BlockOut-Cal<sup>&reg;</sup>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <menu className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to=''>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='calendar'>
                                        Calendar
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='login'>
                                        Login
                                    </NavLink>
                                </li>
                            </menu>
                            <div>
                                Username: <span className="username">None</span>
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
                        <div class="navbar-brand">
                            BlockOut-Cal
                        </div>
                        <div class="nav-link">
                            Startup Repo: <a href="https://github.com/KrazyLama789/startup.git">https://github.com/KrazyLama789/startup.git</a>
                        </div>
                    </div>
                </footer>

                {/* <footer className='bg-dark text-white-50'>
                    <div className='container-fluid'>
                        <span className='text-reset'>Author Name(s)</span>
                        <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
                            Source
                        </a>
                    </div>
                </footer> */}
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
