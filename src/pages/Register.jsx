
import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../store/slice/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  function submitHandler(data){
    console.log(data);
    dispatch(registerUser(data));
    reset()

  }

  return (
    <div className='overflow-hidden w-full relative h-screen'>
      <img className='w-full h-1/3 object-cover' src="/images/banner.webp" alt="" />
      <div className='w-full h-full bg-[#000000b9] absolute top-0'></div> 
      <h2 className='text-white absolute z-30 text-5xl tracking-tighter font-[rome] italic top-[15%] left-1/2 transform translate-x-[-50%] opacity-90'>Register</h2>

      <div className="w-full flex items-center justify-center px-6 bg-white h-[75vh] z-40 absolute bottom-0 rounded-l-[50px]">
        <form onSubmit={handleSubmit(submitHandler)} className='border-black w-full h-[70%] flex flex-col items-center gap-8'>
          <input {...register("username" , {required : "Username is required"}) } type="text" className='border-b-2 border-zinc-400 bg-zinc-100 px-4 py-2 font-semibold text-xl text-[#ed4c22] outline-none' placeholder='username' />

          <small className='text-rose-600 font-semibold mx-auto'>{errors?.username?.message}</small>

          <input {...register("password", {required : "Password is required"})} type="password" className='border-b-2 border-zinc-400 bg-zinc-100 px-4 py-2 font-semibold text-xl text-[#ed4c22] outline-none' placeholder='password' />
          <small className='text-rose-600 font-semibold mx-auto'>{errors?.password?.message}</small>

          <button type='submit' className='bg-[#ed4c22] rounded px-4 py-2 text-xl font-semibold w-1/3 mx-auto'>Register</button>

          <small className='text-black text-sm font-semibold'>Already have an account ? <Link to={"/login"}><span className='text-[#ed4c22]'>Login</span></Link></small>
        </form>

      </div>
        

    </div>
  )
}

export default Register
