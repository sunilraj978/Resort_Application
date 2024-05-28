import React from 'react'

import {Link} from 'react-router-dom'

function navbar() {
    return (
        <div>
            <div>
           
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="https://www.samanea-resort.com/wp-content/uploads/2018/07/header.png" alt="" style={{height:"70px"}} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li style={{paddingLeft:"40px"}}>
        <Link className="nav-link" to="/">Link</Link>
      </li>
     
      <li style={{paddingLeft:"40px"}}>
        <Link className="nav-link" to="/room">Room</Link>
      </li>
    </ul>
    
  </div>
</nav>     
            </div>
        </div>
    )
}

export default navbar
