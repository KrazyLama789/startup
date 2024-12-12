import React from 'react';
import './calendar.css';
import { Table } from './table'

export function Calendar() {
    return (
        <main>
            <div id="calendar" className="card">
                <div className="card-body jumbotron">
                    <h1 id="cal-name" className="display-6">Calendar Name</h1>
                    <div id="cal-tool-bar">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Calendars
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">My Calendar</a></li>
                                <li><a className="dropdown-item" href="#">Group Cal #1</a></li>
                                <li><a className="dropdown-item" href="#">Group Cal #2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="btn">&#8249;</a>
                            <button className="btn btn-lg rounded-0" type="button">
                                <span id="month">October</span> <span id="days">1-7</span>
                            </button>
                            <a href="#" className="btn">&#8250;</a>
                        </div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Link Google Calendar</a></li>
                                <li><a className="dropdown-item" href="#">Link Personal Calender</a></li>
                                <li><a className="dropdown-item" href="#">Create New Calendar</a></li>
                                <li><a className="dropdown-item" href="#">Join Calendar</a></li>
                                <li><a className="dropdown-item" href="#">Invite To Calendar</a></li>
                                <li><a className="dropdown-item" href="#">Leave Calendar</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="cal-display" className="table-responsive">
                        <Table />
                    </div>
                    <div id="calendar-buttons" className='flex'>
                        <button className="btn btn-secondary rounded-0">Save</button>
                        <button className="btn btn-secondary rounded-0">Reset</button>
                    </div>
                </div>
            </div>
        </main>
    );
}