import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [date, setDate] = useState<string>('')
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  useEffect(() => {
    console.log(`changed to ${selectedFilter}`)
    localStorage.setItem("selectedFilter", selectedFilter);
  },[selectedFilter])

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* logo */}
        <MyLogo style={{ width: '6rem'}} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="py-2 mx-auto">
        <div className="collapse navbar-collapse container-fluid">
          
          {/* transaction selector */}
            <input type="text" className="fancy-input me-1" style={{height: '3rem', width: '20rem'}}
            placeholder="Transaction" aria-label="Transaction" aria-describedby="button-addon2" />
            
            {/* date selector */}
            <input type='date'  className="fancy-input me-1" style={{height: '3rem', width: '10rem'}} placeholder="Select a date" onChange={(e) => console.log(e.target.value)}/>
            {/* filter dropdown*/}
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="fancy-input" style={{height: '3rem'}} data-bs-toggle="dropdown" aria-expanded="false" >
                    <i className="fa fa-filter mx-2"></i>
                    {selectedFilter}
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={e => setSelectedFilter('default')}>Default</a></li>
                  <li><a className="dropdown-item" onClick={e => setSelectedFilter('withdraw')}>Withdraw</a></li>
                  <li><a className="dropdown-item" onClick={e => setSelectedFilter('deposit')}>Deposit</a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
                  
            {/* log out button */}
            <a className='' style={{ textDecoration: 'none', color: process.env.REACT_APP_UPORANGE }} href='/Home'>Log out</a>
      </div>
    </nav>
  )
}

export default Navigation
