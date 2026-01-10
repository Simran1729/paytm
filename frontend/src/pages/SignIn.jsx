import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
        <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className='w-90 bg-white h-max py-4 px-4 rounded-lg'>
        <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
        <p className='text-sm text-gray-500 text-center my-2 px-8'>Enter you information to log in to your account</p>
        <Input label={"Email"} placeholder={"Email"} onChange={(e) => {console.log("")}}/>
        <Input label={"Password"} placeholder={"Password"} onChange={(e) => {console.log("")}}/>
        <Button label={"Sign In"} onClick={() => {console.log("")}}/>
        <div className="flex justify-center items-center gap-1 my-1 text-sm">
        <span className="text-gray-600">Don't have an account?</span>
        <Link to="/signup" className="underline font-medium">
          Sign Up
        </Link>
      </div>
      </div>
    </div>
    )
}

export default SignIn