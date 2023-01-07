import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'
import { useState } from 'react'

const Navigation = () => {
  const [date, setDate] = useState<string>('')
  const [selectedFilter, setSelectedFilter] = useState<string>('')


  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <MyLogo style={{ maxWidth: '5%' }} />
        <div className="p-2">
          <div className="input-group">
            <input type="text" className="form-control mx-auto" placeholder="Transaction" aria-label="Transaction" aria-describedby="button-addon2" />
            <input type='date'  className="form-control mx-auto" placeholder="Select a date" onChange={(e) => console.log(e.target.value)}/>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false" >
                    <i className="fa fa-filter"></i>
                    {selectedFilter}
                  </button>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={e => setSelectedFilter('default')}>Default</a></li>
                    <li><a className="dropdown-item" href="#" onClick={e => setSelectedFilter('withdraw')}>Withdraw</a></li>
                    <li><a className="dropdown-item" href="#"  onClick={e => setSelectedFilter('deposit')}>Deposit</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a className='p-2' style={{textDecoration: 'none', color: process.env.REACT_APP_UPORANGE}} href='/Home'>Log out</a>
      </div>
    </nav>
  )
}

export default Navigation
