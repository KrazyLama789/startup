import React from 'react';
import './calendar.css';

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
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr id="cal-headings">
                                    <th></th>
                                    <th>Sunday <br></br><span id="sunday-date">1st</span></th>
                                    <th>Monday <br></br><span id="monday-date">2nd</span></th>
                                    <th>Tuesday <br></br><span id="tuesday-date">3rd</span></th>
                                    <th>Wednesday <br></br><span id="wednesday-date">4th</span></th>
                                    <th>Thursday <br></br><span id="thursday-date">5th</span></th>
                                    <th>Friday <br></br><span id="friday-date">6th</span></th>
                                    <th>Saturday <br></br><span id="saturday-date">7th</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>12:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>12:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>1:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>1:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>2:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>2:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>3:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>3:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>4:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>4:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>5:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>5:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>6:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>6:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>7:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>7:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>8:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>8:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>9:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>9:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>10:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>10:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>11:00 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>11:30 am</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>


                                <tr>
                                    <th>12:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>12:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>1:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>1:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>2:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>2:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>3:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>3:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>4:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>4:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>5:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>5:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>6:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>6:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>7:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>7:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>8:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>8:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>9:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>9:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>

                                <tr>
                                    <th>10:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>10:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>11:00 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                                <tr>
                                    <th>11:30 pm</th>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                    <td className="clickable" onclick=""></td>
                                </tr>
                            </tbody>

                        </table>
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