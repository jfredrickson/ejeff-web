import React from 'react'
import { Navbar } from 'react-bulma-components'
import { Link } from '@reach/router'

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item>
          Jeff Fredrickson
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Link to="/">Home</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="projects">Projects</Link>
          </Navbar.Item>
          <Navbar.Item>
            Contact
          </Navbar.Item>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>
              Admin
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item>
                Profile
              </Navbar.Item>
              <Navbar.Item>
                Users
              </Navbar.Item>
              <Navbar.Item>
                Photos
              </Navbar.Item>
              <Navbar.Item>
                Visits
              </Navbar.Item>
              <Navbar.Item>
                Logout
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
      </Navbar>
  )
}

export default Navigation
