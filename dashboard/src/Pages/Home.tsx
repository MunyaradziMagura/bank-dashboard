import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import Server from '../components/Server'

export default function Home() {
  const [keyCapture, setKeyCapture] = useState<string>('')

  async function checkUserToken(_token: string) {
    const connection = await new Server(_token, '/util/ping');
    const response = await connection.checkToken()

    // if response is valid then re-direct user to the dashboard page 
    if (response.status === 200) {
      let urlArray = window.location.href.split('')

      // check that the last character within the url is a /
      if (urlArray[urlArray.length - 1] != '/') {
        urlArray.forEach(e => {
          if (urlArray[urlArray.length - 1] != '/') {
            urlArray.pop()
          }
        })
      }
      // change current url to the new dashboard url
      window.location.href = `${urlArray.join('')}dashboard`

      // save API key to local storage
      localStorage.setItem('ApiKey', _token)

    }
  }

  const inputElement = document.getElementById('api-input');

  useEffect(() => {
    document.title = "Up | Home";
  }, []);

  return (
    <div>
      <div className="logo-container">
        <div style={{transform: 'translate(0, -25%)'}}>
          <Logo />
        </div>
      </div>
      
      <div className='input-container'>
        <div className='input-group'>
          <input
            id='api-input'
            type="text"
            className="form-control"
            placeholder="Enter Api Key"
            aria-describedby="go-button"
            onChange={e => setKeyCapture(keyCapture + e.target.value)}
          />
          <input type="submit" value="Go" id="go-button"
            onMouseEnter={() => {
              inputElement!.style.borderColor = `${process.env.REACT_APP_UPORANGE}`
              inputElement!.style.borderWidth = '3px'
            }}
            onMouseLeave={() => {
              inputElement!.style.borderColor = "lightgray"
              inputElement!.style.borderWidth = '3px'
              inputElement!.style.borderInlineEndWidth = '0px'
            }}
            onClick={() => checkUserToken(keyCapture)}
          />
        </div>
      </div>

    </div>

  )
}



