import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='flex justify-center items-center m-10 text-4xl'>
        userID: {userid}
    </div>
  )
}

export default User