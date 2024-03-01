import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  
  if (!user) return <div>Please Login</div>

  if(user.username) {
    {return <div>Welcome {user.username} Your password is {user.password}</div>}
  } else {
    {return <div>Invalid Credentials</div>}
  }
}

export default Profile