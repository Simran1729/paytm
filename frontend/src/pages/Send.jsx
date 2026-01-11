import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Input from '../components/ui/Input';

function Send() {
  const searchParams = useSearchParams();
  const id = searchParams.id || 2345432;
  const name = searchParams.name || "Simran Bhatnagar";
  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className ='h-max w-90 bg-white rounded-lg shadow-sm p-4 flex flex-col py-8'>
        <div className='text-2xl font-medium text-center'>
        Send Money
        </div>

        <div className='flex items-center my-2 mt-10'>
            <div className='w-8 h-8 rounded-full bg-green-500 text-white px-2 flex items-center justify-center text-sm'>{name[0].toUpperCase()}</div>
            <div className='px-2 ml-1 font-medium'>{name}</div>
        </div>

        <div className ='flex flex-col'>
            <Input placeholder={"Enter Amount"} label={'Amount (in Rs)'}/>
            <button className='p-2 rounded-sm font-medium text-white bg-green-500 mt-4'>Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default Send