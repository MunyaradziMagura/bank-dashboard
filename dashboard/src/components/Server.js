import axios from 'axios';

export default class Server {
    // set token 
    constructor(_token, _endpoint) {
        this.UP_TOKEN = _token;
        this.endpoint = _endpoint // "/accounts" 
        this.baseURL = "https://api.up.com.au/api/v1"
      }
    // get token
    getToken() {
        return this.UP_TOKEN
    }
    // get json full data
    getUpData = async () => {
        const result = await axios.get(this.baseURL + this.endpoint, {headers: {Authorization: 'Bearer ' + this.UP_TOKEN}})
        // console.log(result.data)
        return result.data.data
    }

    // get transactions by account 
    accountTransactions = async (accountID) => {
      if (accountID == null || accountID == undefined) return 'No Data'
      const accountTransactionResults = await axios.get(this.baseURL + this.endpoint + `/${accountID}/transactions`, {headers: {Authorization: 'Bearer ' + this.UP_TOKEN}})
      return accountTransactionResults.data.data
    }

    // get accounts
    accounts = async (_data) => {
        let data = await _data
        let accounts = [] 
        data.forEach((account) => {
          // index 0 stores the id and index 1 stores the display name 
          accounts.push([account.id, account.attributes.displayName])

        })
        return accounts // returns an array of arrays 
      }

}


export class TransactionCleaner {
  // convert iso dates to normal dates 
  cleanDates(_data) {
    let transactions = []
    _data.forEach(e => {
      e.attributes.createdAt = e.attributes.createdAt.substring(0, 10)
      transactions.push(e)
    })
    return transactions
  }
  

  // group by dates creating a 2d array containing transaction objects
  groupby(_data) {
    // convert object into an object where each key represents the date and value is an array of objects containing transaction details
    const groupedTransactions = _data.reduce((transaction, item) => {
      transaction[item.attributes.createdAt] = transaction[item.attributes.createdAt] ?? [];
      transaction[item.attributes.createdAt].push(item)
      return transaction
    },{})

    return groupedTransactions // returns {date: [{transaction}, {transaction}]}
  }
}




