import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'

export default function Accounts({account, select, accountID}, props) {
  return (
    <div className="col" onClick={() => select(accountID)} style={{width: '20rem', height: '20rem'}}>
    <div className="card h-100 bg-secondary">
    <MyLogo/>
  <div className="card-img-overlay">
    <h1 className="card-title text-warning">{account}</h1>
  </div>
    </div>
  </div>
  )
}
