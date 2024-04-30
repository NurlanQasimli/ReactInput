import React from 'react'

export const email = () => {
  return (
    <div className="input-group">
      
    <input className='input' type="text" required autoComplete='off' />
    <label  className='user-label'>
    Email
    </label>
  </div>
  )
}