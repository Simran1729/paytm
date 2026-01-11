import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Input from '../components/ui/Input';
import { sendMoney, SendSchema } from '../services/account';
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {toast} from 'sonner';

function Send() {
  const {register, handleSubmit, reset, formState : {errors, isSubmitting}} = useForm({ resolver : zodResolver(SendSchema)})

  const onSubmit = async({amount}) => {
    await sendMoney({id, amount});
    toast("Money Sent Successfully");
    reset();
  }

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
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
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            placeholder={"Enter Amount"} 
            type={"number"}
            label={'Amount (in Rs)'}
            {...register("amount")}
            error={errors.amount?.message}
            />
            <button 
            type='submit' 
            disabled={isSubmitting}
            className={`p-2 rounded-sm font-medium text-white mt-4 hover:bg-green-600
            ${isSubmitting ? "bg-green-400" : "bg-green-500"}
            `}>{isSubmitting ? "Transfer Initiated" : "Initiate Transfer"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Send