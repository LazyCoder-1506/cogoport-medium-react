import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const requestBody = { username: username, password: password, firstname: firstname, lastname: lastname, email: email }
      const response = await axios.post('http://127.0.0.1:3000/users', requestBody);
      setFirstname('')
      setLastname('')
      setEmail('')
      setPassword('')
      setPassword('')
    } catch (e) {
      console.log(e)
    }
    navigate("/")
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="register_firstname">Firstname</label>
        <input type="text" id='register_firstname' value={firstname} onChange={e => setFirstname(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="register_lastname">Lastname</label>
        <input type="text" id='register_lastname' value={lastname} onChange={e => setLastname(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="register_email">Email</label>
        <input type="email" id='register_email' value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="register_username">Username</label>
        <input type="text" id='register_username' value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 gap-2 mb-4'>
        <label htmlFor="register_password">Password</label>
        <input type="password" id='register_password' value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="button" className='mb-4' onClick={handleRegister}>Register</button>
      <Link to="/login">Login instead</Link>
    </>
  )
}

export default Register