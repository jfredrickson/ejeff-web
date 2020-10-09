import React from 'react'

const Profile = () => {
  const token = localStorage.getItem('token')

  return (
    <>
      <h1>Profile</h1>
      <p>{token}</p>
    </>
  )
}

export default Profile
