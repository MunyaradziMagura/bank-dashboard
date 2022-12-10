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

    // if response is valid then re-direct user to another page 
    if (response.status === 200) window.open(`${window.location.href}dashboard:${keyCapture}`)


  }

  const inputElement = document.getElementById('inputBox');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 400 }}
        animate={{ opacity: 1, scale: 1, y: 350 }}
        transition={{
          duration: 1,
        }}
      >
        <MyLogo width='10%' positionX={'50%'} positionY={'40%'} />
      </motion.div>

      <div className='input-group' style={groupStyle}>
        <input
          id='inputBox'
          type="text"
          className="form-control"
          placeholder="Enter Api Key"
          aria-describedby="button-addon2"
          style={{ borderColor: 'lightgray', borderWidth: '3px', borderInlineEndWidth: '0px', borderInlineEndColor: `${process.env.REACT_APP_UPORANGE}` }}
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

    </>
  )
}


