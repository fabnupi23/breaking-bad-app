import React from 'react'

function Quot({ quote }) {
  return (
    <p>
        { quote.text }<br/>
        <span>- { quote.author }</span>
     </p>
  )
}

export { Quot };