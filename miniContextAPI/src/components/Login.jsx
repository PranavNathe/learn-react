import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import "./Style.css"


function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <input
      className='input'
      type='text'
      placeholder='Username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='input'
      type='text'
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button
      className='button'
      onClick={handleSubmit}
      >Submit</button>
    </div>
  )
}

export default Login