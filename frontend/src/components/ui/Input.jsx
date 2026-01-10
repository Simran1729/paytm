import React from 'react'

function Input({label="", placeholder, onChange}) {
  return (
    <>
        <div className='text-sm mb-1 mt-4'>{label}</div>
        <input className='border border-gray-200 p-2 rounded-sm w-full focus:outline-none focus:border-gray-400' placeholder={placeholder} onChange={onChange}/>
    </>
  )
}

export default Input