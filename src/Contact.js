import React, { useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disableSend, setDisableSend] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertVariant, setAlertVariant] = useState()

  /**
  * Basic email address format sanity check, matching most of RFC2822.
  */
  const validateEmail = (email) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(email)
  }

  const send = (event) => {
    event.preventDefault()
    setDisableSend(true)
    setAlertMessage()
    setAlertVariant()

    if (!name || !email || !message) {
      setDisableSend(false)
      setAlertMessage("Please fill out all the fields.")
      setAlertVariant("danger")
      return
    }

    if (!validateEmail(email)) {
      setDisableSend(false)
      setAlertMessage("Please provide a valid email address.")
      setAlertVariant("danger")
      return
    }

    fetch('/api/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    .then(res => {
      if (res.status === 204) {
        setName("")
        setEmail("")
        setMessage("")
        setDisableSend(false)
        setAlertMessage("Your message has been sent!")
        setAlertVariant("success")
      } else {
        console.log('invalid', res)
      }
    })

  }

  return (
    <>

      <h1>Contact</h1>

      <Alert variant={alertVariant} show={alertMessage}>
        {alertMessage}
      </Alert>

      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} value={message} onChange={e => setMessage(e.target.value)}/>
        </Form.Group>

        <Button type="submit" variant="primary" onClick={e => send(e)} disabled={disableSend}>Send</Button>
      </Form>

    </>
  )
}

export default Contact
