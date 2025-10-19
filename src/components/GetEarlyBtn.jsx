import React from 'react'
import "../GlobalCss/getEarlyBtn.css"

const GetEarlyBtn = ({text}) => {
  return (
    <div className='getEarlyBtn'>
       <button>{text}</button>
    </div>
  )
}

export default GetEarlyBtn