import React from 'react'
import history from '../../helpers/history'
function Head(props) {
  
  return (
    <div className="head">
      <span className="cursor logo-icon" onClick={() => {
        props.history.push('/')
      }}>JOJO</span>
    </div>
  )
}

export default Head