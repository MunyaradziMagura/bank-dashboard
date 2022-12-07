import React from 'react'
import { TransactionCleaner } from './Server'
import TransactionDateLinks from './TransactionDateLinks'
export default function Transactions({ transactionData }: any, props: any) {
  const transaction = new TransactionCleaner();
  const cleanedDateTransaction = transaction.cleanDates(transactionData);
  const transactionHistory = transaction.groupby(cleanedDateTransaction)

  function getTime(isoDate: string | number | Date) {
    const date = new Date(isoDate);
    return `${date.getUTCHours()}:${date.getUTCMinutes()}`
  }
  if (Object.keys(transactionHistory).length > 0) {
    return (
      <div className="row" style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <div className="col-4" style={{ maxWidth: '100%', maxHeight: '100%', height: '50%' }}>
          <TransactionDateLinks transactionHistory={transactionHistory} />
        </div>
        <div className="col-8">
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0} style={{ maxWidth: '100%', maxHeight: '100%', height: '50%' }}>
            {Object.keys(transactionHistory).map((transactionDate: any, index: number) => (
              <div id={`${transactionDate}`} className="card text-dark bg-warning mb-3" style={{ maxWidth: '100%' }} key={index + 'nav'}>
                <div className="card-header bg-transparent border-warning">Transactions on <b>{transactionDate}</b></div>
                <div className="card-body text-success">
                  <table className="table">  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">Location</th>
                      <th scope="col">Mount</th>
                    </tr>
                  </thead>
                    <tbody>
                      {transactionHistory[`${transactionDate}`].map((transactionsOnDate: any, transactionIndex: number) => (
                        <tr id={`${index}`} key={transactionIndex}>
                          <td>{
                            getTime(transactionsOnDate.attributes.settledAt)
                          }</td>
                          <td>{transactionsOnDate.attributes.description}</td>
                          <td style={{ color: (Number(transactionsOnDate.attributes.amount.value) < 0) ? 'red' : 'green' }}>{transactionsOnDate.attributes.amount.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }

}
