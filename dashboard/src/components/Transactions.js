import React from 'react'
import {TransactionCleaner} from './Server'
export default function Transactions({transactionData}, props) {
    const transaction = new TransactionCleaner();
    const cleanedDateTransaction = transaction.cleanDates(transactionData);
    transaction.groupby();

  return (
    <div>Transactions</div>
  )
}
