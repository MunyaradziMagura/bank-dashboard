import axios from 'axios';

export default class Server {
  UP_TOKEN: string;
  endpoint: string;
  baseURL: string;

  // set token 
  constructor(_token: string, _endpoint: string) {
    this.UP_TOKEN = _token;
    this.endpoint = _endpoint // "/accounts" 
    this.baseURL = "https://api.up.com.au/api/v1"
  }

  checkToken = async () => {
    const result = await axios.get(this.baseURL + '/util/ping', { headers: { Authorization: 'Bearer ' + this.UP_TOKEN } })
    return result
  }

  // get token
  getToken() {
    return this.UP_TOKEN
  }
  // get json full data
  getUpData = async () => {
    const result = await axios.get(this.baseURL + this.endpoint, { headers: { Authorization: 'Bearer ' + this.UP_TOKEN } })
    return result.data.data
  }

  // get transactions by account 
  accountTransactions = async (accountID: string | null | undefined) => {
    if (accountID === null || accountID === undefined) return 'No Data'
    const accountTransactionResults = await axios.get(this.baseURL + this.endpoint + `/${accountID}/transactions`, { headers: { Authorization: 'Bearer ' + this.UP_TOKEN } })
    return accountTransactionResults.data.data
  }

  // get accounts
  accounts = async (_data: any) => {
    let data = await _data
    let accounts: any[] = []
    data.forEach((account: { id: any; attributes: { displayName: any; }; }) => {
      // index 0 stores the id and index 1 stores the display name 
      accounts.push([account.id, account.attributes.displayName])

    })
    return accounts // returns an array of arrays 
  }

}


export class TransactionCleaner {
  // convert iso dates to normal dates 
  cleanDates(_data: any[]) {
    let transactions: any[] = []
    _data.forEach((e: { attributes: { createdAt: string; }; }) => {
      e.attributes.createdAt = e.attributes.createdAt.substring(0, 10)
      transactions.push(e)
    })
    return transactions
  }


  // group by dates creating a 2d array containing transaction objects
  groupby(_data: any[]) {
    // convert object into an object where each key represents the date and value is an array of objects containing transaction details
    const groupedTransactions = _data.reduce((transaction: { [x: string]: any[]; }, item: { attributes: { createdAt: string | number; }; }) => {
      transaction[item.attributes.createdAt] = transaction[item.attributes.createdAt] ?? [];
      transaction[item.attributes.createdAt].push(item)
      return transaction
    }, {})

    return groupedTransactions // returns {date: [{transaction}, {transaction}]}
  }
}




