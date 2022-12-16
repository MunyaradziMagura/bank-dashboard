import MyLogo from '../components/Logo'
import { useState, useEffect } from 'react'
import Server from '../components/Server'

import styled from 'styled-components'
import { motion } from 'framer-motion';

const groupStyle: any = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  maxWidth: '30%'
}

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 3px solid ${process.env.REACT_APP_UPORANGE};
    color: ${process.env.REACT_APP_UPORANGE};
    margin: 0 1em;
    padding: 0.25em 1em;
    &:hover {
      background-color: ${process.env.REACT_APP_UPORANGE};
      color: white;
      cursor: pointer;
    }
`


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

  const inputElement = document.getElementById('inputBox');

  useEffect(() => {
    document.title = "Up | Home";
  }, []);

  window.addEventListener("resize", resize);
  var windowHeight = window.innerHeight;
  function resize() {
    windowHeight = window.innerHeight;
    document.getElementById("demo")!.innerHTML = windowHeight.toString();
  }

  return (
    <div style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: windowHeight * 0.5 }}
        animate={{ opacity: 1, scale: 1, y: windowHeight * 0.4 }}
        transition={{
          duration: 1,
        }}
        style={{
          position: 'relative'
        }}
      >
        <MyLogo width='10%' minWidth='150px' />
      </motion.div>

      <p>Window height <span id="demo">{windowHeight}</span></p>

      <div className='input-group my-3' style={groupStyle}>
        <input
          id='inputBox'
          type="text"
          className="form-control"
          placeholder="Enter Api Key"
          aria-describedby="button-addon2"
          style={{
            borderColor: 'lightgray',
            borderWidth: '3px',
            borderInlineEndWidth: '0px',
            borderInlineEndColor: `${process.env.REACT_APP_UPORANGE}`
          }}
          onChange={e => setKeyCapture(keyCapture + e.target.value)}
        />
        <Button
          type="submit"
          id="button-addon2"
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
        >Go</Button>
      </div>
    </div>

  )
}



