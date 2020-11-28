import React from 'react'
//import Layout from '../components/layout/layout'


const errorCode = {
  fontSize: '5rem',
  textAlign: 'center'
}

const errorCodeDesc = {
  fontSize: '1.5rem',
  textAlign: 'center'
}


export default function NotFoundPage() {
  return (
    <div>
      <div className="error-title">
        <h1 style={errorCode}>Error :(</h1>
        <p style={errorCodeDesc}>404: Not Found</p>
      </div>
      The Page you are looking for doesn't exist or another error occurred.
      Go back, or Main page
    </div>
  )
}