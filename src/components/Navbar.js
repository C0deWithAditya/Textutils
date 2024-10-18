import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {

return (
  <div>
    <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  
  <Link className="navbar-brand mx-5" to="/" style={{fontSize:'25px',fontFamily:"sans-serif"}}>{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        {/* <a className="nav-link active mx-3 " style={{fontSize:'20px',fontFamily:"sans-serif"}}  aria-current="page" href="#">Home</a> */}
        <Link className="nav-link active mx-3"  aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link " to="/about">About</a> */}
        <Link className="nav-link " to="/about">About</Link>
      </li>
    </ul>
  </div>
</div>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input my-2" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-4 my-1"   htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
</nav>
  </div>
)
}
Navbar.prototype={
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired
}
/* Navbar.defaultProps={
  title:'see this',
  about:'chalo about bhi thik'
}; */