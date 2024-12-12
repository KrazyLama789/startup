import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (

    <div>
      <div id="login" className="card">
        <div className="card-body" style={{textAlign:'center', alignItems: 'center'}}>
          <legend>Welcome <span className='playerName'>{props.userName}</span></legend>
          <div>
            <Button variant='primary' onClick={() => navigate('/calendar')}>
              My Calendar
            </Button>
            <Button variant='secondary' onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}
