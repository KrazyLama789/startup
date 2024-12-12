import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div id="login" className="card">
        <form className="card-body">
          <legend>Log In</legend>
          <div id="emailHelp" className="form-text auth">Username: <span className="username">none</span></div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input className='form-control' type='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
            </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input className='form-control' type='password' id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            </div>
          <div className='flex'>
            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
              Login
            </Button>
            <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
              Create
            </Button>
          </div>
        </form>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
