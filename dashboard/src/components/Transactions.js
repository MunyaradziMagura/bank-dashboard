import React from 'react'
import {TransactionCleaner} from './Server'
import TransactionDateLinks from './TransactionDateLinks'
export default function Transactions({transactionData}, props) {
    const transaction = new TransactionCleaner();
    const cleanedDateTransaction = transaction.cleanDates(transactionData);
   const transactionHistory = transaction.groupby(cleanedDateTransaction)

   if(Object.keys(transactionHistory).length > 0){
    return (
        <div className="row" style={{maxWidth: '100%', maxHeight: '100%'}}>
  <div className="col-4" style={{maxWidth: '100%', maxHeight: '100%', height: '50%'}}>
    <TransactionDateLinks transactionHistory={transactionHistory}/>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0" style={{maxWidth: '100%', maxHeight: '100%', height: '50%'}}>
      {Object.keys(transactionHistory).map((transactionDate, index) => (
        <div  id={`${transactionDate}`} className="card text-dark bg-warning mb-3" style={{maxWidth: '100%'}}>
  <div className="card-header">Transactions on {transactionDate}</div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        ))}
    </div>
  </div>
</div>
      )
   }else{
    return <></>
   }

}
