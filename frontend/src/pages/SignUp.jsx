import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';

import { createUser, SignUpSchema } from '../services/auth';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {toast} from 'sonner'

function SignUp() {

  const {register, handleSubmit, formState : {errors, isSubmitting}} = useForm({ resolver : zodResolver(SignUpSchema)});
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    try{
      await createUser(data);
      toast("User created successfully");
      navigate('/', {replace : true});
    }catch(err){
      console.error(err);
      toast("Sign Up Failed");
    }
  }
  
  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className='w-90 bg-white h-max py-4 px-4 rounded-lg'>
        <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
        <p className='text-sm text-gray-500 text-center my-2 px-8'>Enter you information to create an account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
        label={"Email"} 
        placeholder={"Email"} 
        {...register("userName")}
        error={errors.userName?.message}
        />

        <Input 
        label={"First Name"} 
        placeholder={"First Name"} 
        {...register("firstName")}
        error={errors.firstName?.message}
        />

        <Input 
        label={"Last Name"} 
        placeholder={"Last Name"} 
        {...register("lastName")}
        error={errors.lastName?.message}
        />

        <Input 
        label={"Password"} 
        placeholder={"Password"} 
        {...register("password")}
        error={errors.password?.message}
        type={"password"}
        />

        <Button 
        label={"Sign Up"} 
        loading={isSubmitting}
        type={"submit"}
        loadingText={"Creating Account.."}
        />
        </form>
        <div className="flex justify-center items-center gap-1 my-1 text-sm">
        <span className="text-gray-600">Already have an account?</span>
        <Link to="/signin" className="underline font-medium">
          Sign In
        </Link>
      </div>
      </div>
    </div>
  )
}

export default SignUp