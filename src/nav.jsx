import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaTruckMoving} from 'react-icons/fa'
import {BsBagCheck} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import './nav.css'

const Nav = ({searchbtn}) => {
    const [search , setSearch] =useState()
  return (
    <>
    <div className="container-fluid bg-dark d-flex justify-content-center">
            <FaTruckMoving className='text-light fs-3'/>
            <span className='fs-7 mx-5 text-light  '>free shopping when shopping upto $ 10,000</span>
        
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg sticky-top rounded">
  <div className="container-fluid rounded">
    <a className="navbar-brand" href="#">
    <img src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg" alt="" />
            
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 text-uppercase mx-5 text-center ">
        <li className="nav-item border-end border-bottom mx-2">
       <Link to="/" className='active nav-link'>home</Link>

        </li>
        <li className="nav-item border-end border-bottom mx-2">
         <Link to="/product" className='nav-link'>product</Link>
            
        </li>
        <li className="nav-item border-end border-bottom mx-2">
        <li> <Link to="/about" className='nav-link'>about</Link></li>
            
        </li>
        <li className="nav-item border-end border-bottom mx-2">
        <li> <Link to="/contact" className='nav-link'>contact</Link></li>
            
        </li>
        </ul>
        
      <form className="d-flex justify-content-center border" role="search ">
      <input type="text "  className='border shadow-sm w-100 text-center ' value={search} placeholder='search for products........' autoComplete='off' onChange={(e)=> setSearch(e.target.value)} />
      <button className='btn bg-info text-lg-light rounded' onClick={() => searchbtn (search)} >search</button>

      </form>
      <ul className=' nav-icon d-flex justify-content-around  mb-2 mb-lg-0  mx-auto  fs-5'>
        <li className='nav-link'>
        <Link to="/">
                        <AiOutlineHeart/>
                    </Link>
        </li>
        <li className="nav-link">
        <Link to="./cart">
                        <BsBagCheck/>
                    </Link>
            
        </li>
      </ul>
    </div>
  </div>
</nav>





    </>
  )
}

export default Nav