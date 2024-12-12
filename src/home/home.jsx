import React from 'react';
import './home.css';

export function Home() {
  return (
    <main>
      <div id="welcome" className="card">
        <div className="card-body">
          <div className="jumbotron">
            <h1 className="display-4">BlockOut-Cal</h1>
            <p className="lead"><b>BlockOut-Cal</b> is a group calendaring app where people can join a group, block out times they aren't
              available, and highlight times that work best for them, allowing everyone in the group to visually see when
              their schedules align.
            </p>
            <div className="flex">
              <a className="btn btn-secondary btn-lg auth" href="calendar.html" role="button">Calendar</a>
              <a className="btn btn-secondary btn-lg unauth" href="login.html" role="button">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
