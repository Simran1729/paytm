import React from 'react'

function Input({label="", error, ...rest}) {
  return (
    <>
        <div className='text-sm mb-1 mt-4'>{label}</div>
        <input {...rest} className={`border p-2 rounded-sm w-full focus:outline-none focus:border-gray-400 ${error ? "border-red-500" : "border-gray-200"}`}/>
        {
          error && (
            <p className='text-red-500 text-xs mt-1'>{error}</p>
          )
        }
    </>
  )
}

export default Input