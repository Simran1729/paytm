import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link, replace, useNavigate } from 'react-router-dom'
import {toast} from 'sonner'

import { SignInSchema, loginUser} from '../services/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function SignIn() {
  const {register, handleSubmit, formState : {errors, isSubmitting}} = useForm({resolver : zodResolver(SignInSchema)});
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try{
      await loginUser(data);
      navigate('/', {replace : true})
      toast('Login Successful')
    }catch(err){
      console.log(err);
    }
  }

  return (
      <div className='h-screen bg-gray-200 flex justify-center items-center'>
        <div className='w-90 bg-white h-max py-4 px-4 rounded-lg'>
            <h2 className='text-3xl text-center font-bold'>Sign In</h2>
            <p className='text-sm text-gray-500 text-center my-2 px-8'>Enter you information to log in to your account</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
              label={"Email"} 
              placeholder={"Email"}
              {...register('userName')}
              error={errors.userName?.message}
              />

              <Input 
              label={"Password"} 
              placeholder={"Password"} 
              {...register('password')}
              type={"password"}
              error={errors.password?.message}
              />

              <Button 
              label={"Sign In"}
              type={"submit"}
              loading={isSubmitting}
              loadingText={"Logging in.."}
              />
              <div className="flex justify-center items-center gap-1 my-1 text-sm">
                <span className="text-gray-600">Don't have an account?</span>
                <Link to="/signup" className="underline font-medium">
                  Sign Up
                </Link>
              </div>
            </form>
        </div>
      </div>
    )
}

export default SignIn