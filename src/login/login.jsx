import React from 'react';
import './login.css';

export function Login() {
    return (
        <main>
            <div id="login" className="card">
                <form className="card-body">
                    <legend>Log In</legend>
                    <div id="emailHelp" className="form-text auth">Username: <span className="username">none</span></div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className='flex'>
                        <button type="submit" className="btn btn-primary">Log In</button>
                        <button type="submit" className="btn btn-secondary">Sign Up</button>
                    </div>
                </form>
            </div>
        </main>
    );
}