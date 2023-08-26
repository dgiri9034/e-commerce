import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar, BsEye } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import hopmepage from '../src/assets/img/homepage.png'
import mobile from '../src/assets/img/mobile.png'
import watch from '../src/assets/img/watch.png'
import headphone from '../src/assets/img/headphone.png'
import cpu from '../src/assets/img/cpu.jpg'
import Homeproduct from './homeproduct';
import './home.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';


const Home = () => {
  const [homeproduct, setHomeProduct] = useState(Homeproduct)
  return (
    <>


                        <div className='top_banner container-fluid'>
        <div className='container row'>
            <div className='detail col-lg d-flex justify-content-center flex-column'>
                <h2>The Best Note Book Colletion 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box col-lg d-flex justify-content-end'>
                <img src={hopmepage} alt='sliderimg' className='img-fluid'></img>
            </div>
        </div>
    </div>

    <div className='product_type container-fluid'>
      <div className='container'>
        <div className='box '>
          <div className='img_box'>
            <img src={mobile} alt='mobile' className=''></img>
          </div>
          <div className='detail'>
            <p>23 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src={watch} alt='watch'></img>
          </div>
          <div className='detail'>
            <p>18 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src={headphone} alt='headphone'></img>
          </div>
          <div className='detail'>
            <p>52 products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src={cpu} alt='cpu '></img>
          </div>
          <div className='detail'>
            <p>63 products</p>
          </div>
        </div>
      </div>
    </div>

    <div className='about container-fluid'>
      <div className='container row g-4'>
        <div className='box col-sm-4'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Oder above $1000</p>
          </div>
        </div>
        <div className='box col-sm-4'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>


          </div>
        </div>
        <div className='box col-sm-4'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every Oder</p>
          </div>
        </div>
        <div className='box col-sm-4'>
          <div className='icon'>
            <BiHeadphone />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>

    <div className="product container-fluid">
      <div className="container">
        {
          homeproduct.map((curElm)=>
          {
            return(
              <>
              <div className="box border-3" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.img} alt={curElm.Title} className='img-fluid'/>
                    <div className="icon">
                  <li><AiOutlineShoppingCart/></li>
                  <li><BsEye/></li>
                  <li><AiOutlineHeart/></li>
                    </div>
                </div>
                    <div className="detail">
                      <h3>{curElm.Title}</h3>
                      <h4>{curElm.Cat}</h4>
                      <p> ${curElm.Price}</p>



                    </div>
               
              </div>
 
              </>
            )
          })
        }


      </div>
    </div>
    <div className="banner bg-info">
      <div className="container row ">
      <div className="detail col-sm py-5">
        <h4 className='text-light fs-1 text-bold'>LATEST TECHNOLOGY ADDED</h4>
        <h3 className='fs-1'>Apple i-pad 9th gen-2023</h3>
        <p className='fs-4 text-light'>$ 980</p>
        <Link to='/product' className='link btn bg-light'>shop now <BsArrowRight/></Link>
      </div>
      <div className="img_box col-sm order-1 d-flex justify-content-end">
        <img src={hopmepage} alt=""  className='img-fluid'/>
      </div>
      </div>
      

    </div>

              
   
    </>
  )
}

export default Home