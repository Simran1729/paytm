import React from 'react'

function Button({onClick, label}) {
  return (
    <>
        <button className='text-white bg-gray-900 py-2.5 my-4 rounded w-full shadow-md hover:bg-gray-800 hover:shadow-lg transition' onClick={onClick}>{label}</button>
    </>
  )
}

export default Button