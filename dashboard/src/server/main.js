const UP_TOKEN = 'up:yeah:02OiBvK62qeqOvkdpUfUTA1NnRuRJwtcO9XNjQL18tblgNYplADUGyjUaaxu50hrNW3TeRcT1jRAK5xYnIU2wcklRJCj264A10wwLUSzsSfTWsJYeSshATaScY66hnTs'; // This is your personal access token
import axios from 'axios';
const endpoint = "/accounts"
const baseURL = "https://api.up.com.au/api/v1"

const get = async () => {
      var result = await axios.get(baseURL + endpoint, {headers: {Authorization: 'Bearer ' + UP_TOKEN}})
      console.log(result.data)
      return result
}

get()
