import React from 'react'
import { Link , useNavigate} from 'react-router-dom'


const Contact = () => {
  const navigate=useNavigate();
  const gotoAbout=()=>{
    navigate("/about")
  }

  return (
    <>
    <div>Contact</div>
    <button>
      <Link to="/">메인페이지</Link>
    </button>
    <button onClick={gotoAbout}>gotoAbout</button>
    </>
  )
}

export default Contact