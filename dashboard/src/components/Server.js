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
        var result = await axios.get(this.baseURL + this.endpoint, {headers: {Authorization: 'Bearer ' + this.UP_TOKEN}})
        // console.log(result.data)
        return result.data.data
    }
    // get accounts
    accounts = async (_data) => {
        let data = await _data
        let accounts = []
        data.forEach(account => {
          accounts.push(account.attributes.displayName)
        })
        return accounts
      }

}


