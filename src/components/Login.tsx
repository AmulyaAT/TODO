
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate('/home');
    } else {
      alert('Please enter both username and password');
    }
  };
const handleState=(e: { target: { value: React.SetStateAction<string>; }; })=>
{
  setUsername(e.target.value)
}
const handlepassword =(e: { target: { value: React.SetStateAction<string>; }; })=>{
  setPassword(e.target.value)
}

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleState}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlepassword}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
