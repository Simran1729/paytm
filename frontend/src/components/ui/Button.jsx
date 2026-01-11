import React from 'react'

function Button({label, loading=false,loadingText="Loading..",...rest}) {
  return (
    <>
        <button {...rest} className={`text-white py-2.5 my-4 rounded w-full shadow-md transition
        ${loading? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-800 hover:shadow-lg"}
        `}>{loading ? loadingText : label}</button>
    </>
  )
}

export default Button