// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Route ,Link } from 'react-router-dom'
import Home from './Home.jsx'

function Navbar() {
  return (
    <>
    <Router>
        <Route>
<nav>
    <ul>

    <li>
        <Link path="/" Component={Home}>Home</Link>

    </li>
    <li>
        <Link path="/about">About</Link>
    </li>
    <li>
        <Link path="/Contact">About</Link>
    </li>


    </ul>
</nav>

        </Route>
    </Router>
    </>
  )
}

export default Navbar
