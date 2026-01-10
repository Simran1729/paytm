import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Input from '../components/ui/Input';

function Send() {
  const searchParams = useSearchParams();
  const id = searchParams.id || 2345432;
  const name = searchParams.name || "Simran Bhatnagar";
  return (
    <div className='h-screen bg-gray-200'>
      <div className ='h-max w-80 bg-white rounded-lg shadow-sm p-4 flex flex-col items-center'>
        <div className='text-2xl font-medium'>
        Send Money
        </div>

        <div className='flex flex-col justify-center'>
            <div className='w-8 h-8 rounded-full bg-green-500 text-white px-2 flex items-center justify-center text-sm'>{name[0].toUpperCase()}</div>
            <div>{name}</div>
            <div>Amount (in Rs)</div>
            <Input placeholder={"Enter Amount"}/>
            <button className='p-2 rounded-sm font-medium text-white bg-green-500'>Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default Send