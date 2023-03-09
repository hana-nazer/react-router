import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const navigateHandler =()=>{
    navigate('/products')
  }
  return (
    <div><h1>Home Page</h1>
    <Link to='/products'>go to products</Link>
    <br></br>
    <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}

export default Home