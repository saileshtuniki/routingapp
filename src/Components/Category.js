import React from 'react'
import {Link , Outlet} from 'react-router-dom';
import './Category.css';

function Category() {
  return (
    <div className='container boxShadow mt-5'>
      {/* <h1>Category Comp</h1> */}
      <div className="row">
        <div className="col-4 p-5 text-center bg-dark text-white">
          <Link to="electronics" className='text-white mx-4'>
            Electronics
          </Link>
          <br/>
          <br/>
          <br/>
          <Link to="jewelery" className='text-white mx-4'>
            Jewelary
          </Link>
          <br/>
          <br/>
          <br/>
          <Link to="men's clothing" className='text-white mx-4'>
            MensWearing
          </Link>
          <br/>
          <br/>
          <br/>
          <Link to="women's clothing" className='text-white mx-4'>
            WomensWearing
          </Link>
        </div>
        <div className="col-8">
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Category
