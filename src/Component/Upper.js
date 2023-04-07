import React from 'react';

function Upper(props) {
    return (
    <div className='Upper'>
      <div className="leftUpper">
        <a href="/">
        <h1>Quote App</h1>
        </a>
      </div>
      <div className="rightUpper">
        <button onClick={()=>{props.dsplyConfig()}}>About</button>
      </div>
    </div>
  )
}

export default Upper;