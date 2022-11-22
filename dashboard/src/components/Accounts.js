import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'


export default function Accounts({account}, props) {
  return (
    <div className="col">
    <div className="card h-100 bg-secondary">

   <MyLogo/>
  <div className="card-img-overlay">
    <h1 className="card-title ">{account}</h1>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
    </div>
  </div>
  )
}
