import React from 'react'
import { ReactComponent as MyLogo } from './UpLogo.svg'

type UserProps = {
  account: string;
  select: any; // this is the set state of a useState hook
  accountID: string;
};

const Accounts: React.FC<UserProps> = ({ account, select, accountID }) => {

  return (
    <div className="col" onClick={() => select(accountID)} style={{ height: '15rem' }}>
      <div className="card h-100 bg-secondary">
        <MyLogo />
        <div className="card-img-overlay">
          <h1 className="card-title text-warning">{account}</h1>
        </div>
      </div>
    </div>
  )
}

export default Accounts;