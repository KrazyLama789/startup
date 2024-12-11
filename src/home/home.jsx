import React from 'react';
import './home.css';

export function Home() {
  return (
    <main className="container">
      <div id="welcome" className="card">
        <div className="card-body">
          <div className="jumbotron">
            <h1 className="display-4">BlockOut-Cal</h1>
            <p className="lead"><b>BlockOut-Cal</b> is a group calendaring app where people can join a group, block out times they aren't
              available, and highlight times that work best for them, allowing everyone in the group to visually see when
              their schedules align.</p>
            <hr className="my-4"> </hr>
            <a className="btn btn-primary btn-lg" href="calendar.html" role="button">Get Started</a>
            <a className="btn btn-primary btn-lg login" href="login.html" role="button">Log In</a>
          </div>
        </div>
      </div>
    </main>
  );
}
