import React, { useState } from 'react'
import '../GlobalCss/GetEarly.css'
import GetEarlyBtn from './GetEarlyBtn'

const GetEarly = () => {
  const [email, setEmail] = useState('')

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSend = () => {
    if (!email.trim()) {
      alert("No input data!")
      return
    }
    // console.log("Send clicked! Email:", email)
    setEmail('')
  }

  const handleNotify = () => {
    if (!email.trim()) {
      alert("No input data!")
      return
    }
    // console.log("Notify clicked! Email:", email)
     setEmail('')
  }

  return (
    <div className='getEarlyContainer'>
      <div className='getEarlyLeft'>
        <h1>Get Early <span>Access</span></h1>
      </div>

      <div className='getEarlyRight'>
        <input
          type="text"
          placeholder='Enter your email'
          value={email}
          onChange={handleInputChange}
        />

        <div className='getEarlyBtn'>
          <div onClick={handleSend}>
            <GetEarlyBtn text="Send" />
          </div>
          <div onClick={handleNotify}>
            <GetEarlyBtn text="Notify me" />
          </div>
        </div>

        <p>
          Be among the first 100 pilots to experience revolutionary <br /> training.
        </p>
      </div>
    </div>
  )
}

export default GetEarly
