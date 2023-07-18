import React from 'react';
import './Nav.css'
// A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. 
// In react-router-dom, a <Link> renders an accessible <a> element with a real href that
// points to the resource it's linking to.
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className='container-fluid p-0'>
      <div className="row">
        <div className="col">
            <div className="flexContainer">
                <div className="title">
                    <h2>React Routing</h2>
                </div>
                <div className="menu">
                    <Link to="/"className='text-white mx-4'>
                      Home
                      </Link>
                    <Link to="/category"className='text-white mx-4'>
                      Category
                      </Link>
                    <Link to="/profile"className='text-white mx-4'>
                      Profile
                      </Link>
                    <Link to="/contactus"className='text-white mx-4'>
                      ContactUs
                      </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;
