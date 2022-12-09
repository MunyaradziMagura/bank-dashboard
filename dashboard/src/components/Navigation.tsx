import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'

type navigationProps = {
  setID: any; // contains a mix of int and char
}

const Navigation: React.FC<navigationProps> = ({ setID }) => {
  return (
    <div className="row">
      <nav className="navbar bg-light">
        {/* navigation bar */}
        <div className="container-fluid h-100">
          {/* <h1 className="navbar-brand"> </h1> */}
          <MyLogo style={{maxWidth: '5%'}}/>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Enter Up API code" aria-label="Search" onChange={(e) => setID(e.target.value)} />
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
