import React from 'react'
import './index.css'
 const TimeframeSelector = ({onSelect}) => {
  return (
    <div className='button-container'>
        <button className='button green' onClick={()=> onSelect('daily')}>Daily</button>
        <button className='button blue' onClick={()=> onSelect('weekly')}> Weekly</button>
        <button className='button orange' onClick={()=> onSelect('monthly')}>Monthly</button>

    </div>
  )
}

export default TimeframeSelector