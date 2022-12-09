import { Fragment } from 'react'
import MyLogo from '../components/Logo'
import { useState, useEffect } from 'react'
import { hover } from '@testing-library/user-event/dist/hover'
import styled from 'styled-components'

const groupStyle: any = {
  left:'50%', 
  top: '50%', 
  position: 'absolute', 
  transform: 'translate(-50%, -50%)', 
  maxWidth:'30%'
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

    useEffect(() => {
        console.log(keyCapture)
    }
    ,[keyCapture])
    
    const inputElement = document.getElementById('inputBox');

  return (
    <>
      <MyLogo width='10%' positionX={'50%'} positionY={'40%'} />
      <div className='input-group' style={groupStyle}>
        <input
          id='inputBox'
          type="text"
          className="form-control"
          placeholder="Enter Api Key"
          aria-describedby="button-addon2"
          style={{borderColor:'lightgray', borderWidth: '3px', borderInlineEndWidth: '0px', borderInlineEndColor: `${process.env.REACT_APP_UPORANGE}`}}
          onKeyUpCapture={e => setKeyCapture(keyCapture + e.key)}
        />
        <Button
          type="submit"
          id="button-addon2"
          onMouseEnter={() => {
            inputElement!.style.borderColor=`${process.env.REACT_APP_UPORANGE}`
            inputElement!.style.borderWidth='3px'

        }} 
          onMouseLeave={() => {
            inputElement!.style.borderColor="lightgray"
            inputElement!.style.borderWidth='3px'
            inputElement!.style.borderInlineEndWidth='0px'


        }} 


        >Go</Button>
      </div>

    </>
  )
}


