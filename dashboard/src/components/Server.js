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
    console.log(transactions)
    return transactions
  }
  // remember to clear raw data outputs

  // group by dates creating a 2d array containing transaction objects
  groupby(_data) {
    console.log('groupby !');
  }
}




