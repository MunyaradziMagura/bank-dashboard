import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'


const Navigation = ({ }) => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <MyLogo style={{ maxWidth: '5%' }} />
        <div className="p-2">
          <div className="input-group">
            <input type="text" className="form-control mx-auto w-50 " placeholder="Transaction" aria-label="Transaction" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            <button className="btn btn-outline-info" type="button" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Date</button>

          </div>
        </div>
        <a href='/Home'>Log out</a>
      </div>
    </nav>
  )
}

export default Navigation
