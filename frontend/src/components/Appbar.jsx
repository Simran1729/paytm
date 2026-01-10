import React from 'react'

function Appbar({name="Simran"}) {
  return (
    <div className='bg-white flex justify-between items-center px-4 py-3 border border-b-gray-200'>
        <div>PayTM App</div>
        <div className='flex items-center gap-4'>
            <div>
                Hello
            </div>
            <div className='w-8 h-8 rounded-full bg-gray-400 px-2 flex items-center justify-center text-sm'>
                {name[0]}
            </div>
        </div>
    </div>
  )
}

export default Appbar