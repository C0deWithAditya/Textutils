import React from 'react';
import {Link } from 'react-router-dom';
export default function Footer() {
return (
    <>
<footer className="text-center text-lg-start bg-body-tertiary text-muted ">
<div className='container1  pt-2'>
<section className="">
  <div className="container text-center text-md-start mt-5">
 
    <div className="row mt-3">
      
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-1"></i>TextUtils
        </h6>
        <p>
        Our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism.
        </p>
      </div>
  

      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <Link to="\" className="text-reset">Edit</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Update</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Delete</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Type</Link>
        </p>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <Link to="\" className="text-reset">About</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Settings</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Free</Link>
        </p>
        <p>
          <Link to="\" className="text-reset">Help</Link>
        </p>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i> Lucknow, India 10221</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>
    </div>
  </div>
</section>
<div className="text-center p-4" style={{Backgroundcolor: 'gray'}}>
  © 2021 Copyright:
  <Link className="text-reset fw-bold" to="https://github.com/C0deWithAditya">C0deWithAditya.com</Link>
</div>
</div> 
</footer>
</>
)
};