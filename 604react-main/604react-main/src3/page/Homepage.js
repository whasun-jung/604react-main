import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <div>Homepage</div>
    <button>
      <Link to="/about">about</Link>
    </button>
    <button>
      <Link to="/contact">contact</Link>
    </button>
    </>
    
  )
}

export default Homepage