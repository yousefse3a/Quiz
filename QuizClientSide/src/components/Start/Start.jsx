import React from 'react'
export default function Start({setActiveComponent}) {
  const start_btn ={
    fontSize: '25px',
    fontWeight: '500',
    color: '#007bff',
    padding: '15px 30px',
    outline: 'none',
    border: 'none',
    borderRadius: '5px',
    background: '#fff',
    cursor: 'pointer'
  }
  return (
    <div className="start_btn" ><button style={start_btn} onClick={()=>{setActiveComponent('Info')}}>Start Quiz</button></div>
  )
}
