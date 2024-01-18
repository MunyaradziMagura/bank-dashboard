import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'

type navigationProps = {
  setID: any; // contains a mix of int and char
}

const Navigation: React.FC<navigationProps> = ({ setID }) => {
  return (
    <div className="navbar p-2 m-0 border-0">
      <MyLogo style={{ height: '100%' }} />
      <form className="d-flex" role="search">
        <input className="search-box" />
        <div style={{width: '100px', backgroundColor: 'red'}}>date</div>
        <div style={{width: '50px', backgroundColor: 'pink'}}>filter</div>
      </form>
    </div>
  )
}

export default Navigation
