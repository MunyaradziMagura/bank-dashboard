import React from 'react'

type TransactionDateLinks = {
  transactionHistory: any
}

const TransactionDateLinks: React.FC<TransactionDateLinks> = ({ transactionHistory }) => {
  return (
    <div id="list-example" className="list-group">
      {Object.keys(transactionHistory).map((transactionDate, index) => (
        <a className="list-group-item mx-3 list-group-item-action" href={`#${transactionDate}`}>{transactionDate}</a>
      ))}
    </div>
  )
}

export default TransactionDateLinks
