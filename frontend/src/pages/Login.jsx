import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up")
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/user/register`, {name, email, password})
        if (response.statusCode === 200) {
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        setCurrentState("Login")
        } else {
          toast.error(response.data.message)
        }
      }
      else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {email, password})
      if (response.status === 200) {
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        navigate("/")
      } else {
        toast.error(response.data.message)
        } 
      }
    } catch (e) {
      console.log(e)
      if (e.response.status === 400) {
        toast.error(e.response.data.message)
      }
      else {
        toast.error(e.message)
    }
    }
  }
  return (
    <form  onSubmit={onSubmitHandler} className='flex flex-col gap-5 items-center w-[90%] sm:w-96 m-auto mt-14 text-gray-500'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
      {currentState === "Login" ? "" : <input onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Name' />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Email' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='password' placeholder='Password' />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {
          currentState === "Login" ? <button onClick={() => setCurrentState("Sign Up")}>Don't have an account ?</button> : <button onClick={() => setCurrentState("Login")}>Login here</button>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState}</button>
    
    </form>
  )
}

export default Login