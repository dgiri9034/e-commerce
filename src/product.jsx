import React, { useState } from 'react';
import Productdetail from './productdetail';
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import './product.css'
import { CiRainbow } from 'react-icons/ci';
const Product = ({product, setProduct, detail, view, close, setClose}) => {
   const filtterproduct = (product)=>
   {
    const update =Productdetail.filter((x)=>
    {
      return x.Cat ===  product;
    })
    setProduct(update);
   }
   const AllProducts =()=>
   {
      setProduct(Productdetail)
   }
  return (
    <>
    {
      close ?
    <div className="product_detail my-2 ">
      <div className="container">
        <button onClick={()=>setClose(false)}><AiOutlineCloseCircle/></button>
      {
        detail.map((curElm)=>
        {
            return (
                <>
          <div className="productbox row">
            <div className="img-box col-lg">
              <img src={curElm.img} alt={curElm.Title} className='img-fluid h-auto'/>
               </div>
               <div className="detail col-lg d-flex flex-column">
                <h4>{curElm.Cat}</h4>
                <h2>{curElm.Title}</h2>
                <p>
                  A screen everyone will love. Whether your family or your frinds.
                </p>
                <h3> ${curElm.Price}</h3>
                <button>add to cart</button>
               </div>
        </div>         
        </>
            )
        })
      }

      </div>
      </div> :null
    }
    


    <div className="products">
    <h3># PRODUCTS</h3>
    <p>home. products</p>
      <div className="container row text-center">
        <div className="filter col-auto d-flex justify-content-center  dropdown">
          <div className="categories ">
            <h3 className=' btn btn-secondary text-light dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="true">categories</h3>
            <ul className='dropdown-menu w-25 text-center'>
              <li className='dropdown-item ' onClick={() => AllProducts()}>All Products</li>
              <li className='dropdown-item' onClick={() => filtterproduct("Tablet")}>Tablet</li>
              <li className='dropdown-item' onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
              <li className='dropdown-item' onClick={() => filtterproduct("Headphone")}>Headphone</li>
              <li className='dropdown-item' onClick={() => filtterproduct("Camera")}>Camera</li>
              <li className='dropdown-item' onClick={() => filtterproduct("Gaming")}>Gaming</li>

            </ul>
          </div>
                </div>
            <div className="productbox col-auto d-flex justify-content-center">
              <div className="contant">
                {
                  product.map((curElm) =>
                  {
                    return(
                      <>
                       <div className="box" key={curElm.id}>
                   <div className="img_box">
                  <img src={curElm.img} alt={curElm.Title} />
                    <div className="icon">
                  <li><AiOutlineShoppingCart/></li>
                  <li onClick={()=> view(curElm)}><BsEye/></li>
                  <li><AiOutlineHeart/></li>

                    </div>
                    
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>

               
              </div>

                      </>
                    )
                  })
                }
            </div>


        </div>
      </div>
    </div>
    </>
  )
}

export default Product