import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'

type navigationProps = {
  setID: any; // contains a mix of int and char
}

const Navigation: React.FC<navigationProps> = ({ setID }) => {
  return (
    <div className="navbar p-2 m-0 border-0" style={{ position: 'sticky', top: 0, backgroundColor: 'lightcyan'}}>
      <MyLogo style={{ maxWidth: '5%' }} />
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Enter Up API code" aria-label="Search" onChange={(e) => setID(e.target.value)} />
      </form>
    </div>
  )
}

export default Navigation
