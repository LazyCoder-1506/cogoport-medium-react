import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const requestBody = { username: username, password: password }
      const response = await axios.post('http://127.0.0.1:3000/login', requestBody);
      setUsername('')
      setPassword('')
    } catch (e) {
      console.log(e)
    }
    navigate("/")
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="login_username">Username</label>
        <input type="text" id='login_username' value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="login_password">Password</label>
        <input type="password" id='login_password' value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="button" className='mb-4' onClick={handleLogin}>Login</button>
      <Link to="/register">Sign up instead</Link>
    </>
  )
}

export default Login