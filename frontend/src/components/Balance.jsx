import React from 'react'

function Balance({balance=0}) {
  return (
    <div className='flex gap-2 font-medium p-4'>
        <div>
        Your Balance
        </div>
        <div>
        Rs {balance}
        </div>
    </div>
  )
}

export default Balance