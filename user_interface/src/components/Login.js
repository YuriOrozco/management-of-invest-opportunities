import { React, useState } from 'react';
import {useDispatch} from 'react-redux'
import { login } from '../features/auth/authSilce';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="form-group custom-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button type="submit" className="btn btn-succcess btn-md">
          LOGIN
        </button>
        <p>
          You don't have an account? <a href="/register">Click here</a>
        </p>
      </form>
    </div>
  );
};
