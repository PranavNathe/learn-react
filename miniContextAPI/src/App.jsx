import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <div className="card">
        <Login/>
        <Profile/>
      </div>
      <p className="read-the-docs">
        Enter details and Press Submit button
      </p>
    </UserContextProvider>
  )
}

export default App
