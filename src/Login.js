import React, { useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'
import { useNavigate } from '@reach/router'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [invalidLogin, setInvalidLogin] = useState(false)

  const navigate = useNavigate()

  const login = (event) => {
    event.preventDefault()

    setInvalidLogin(false)

    const headers = new Headers()
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password))

    fetch('/api/token', {
      method: 'POST',
      headers: headers
    })
    .then(res => {
      if (res.status === 200) {
        res.json().then(json => {
          const token = json.token
          localStorage.setItem('token', token)
          navigate('profile', { replace: true })
        })
      } else {
        console.log('invalid login', res)
        setInvalidLogin(true)
      }
    })

  }

  return (
    <>

      <h1>Login</h1>

      <Alert variant="danger" show={invalidLogin}>
        Login incorrect.
      </Alert>

      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" value={username} onChange={e => setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Button type="submit" variant="primary" onClick={e => login(e)}>Login</Button>
      </Form>

    </>
  )
}

export default Login
