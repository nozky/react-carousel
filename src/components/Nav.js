import React from 'react'
import './nav.css'

function Nav({resultImages, setSearch, setAutoSlide, autoSlide}) {

  return ( 
    <>
      <nav className='navbar'>
        <h1>Carousel</h1>
        <button className='nav-btn autoslide' onClick={ ()=> setAutoSlide(!autoSlide) } >{ autoSlide? 'Auto Play On' : 'Auto Play Off' }</button>
        <button className='nav-btn search' onClick={()=>{resultImages()}}>Search</button>
        <input type="text" placeholder='Enter your Search' onChange={(e)=> setSearch(e.target.value)  }/>  
      </nav>
    </>
  )
}

export default Nav
