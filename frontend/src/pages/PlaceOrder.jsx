import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod")
  const { navigate } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  })
  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] '>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='First Name' />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Last Name' />
          </div>
          <input onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='email' placeholder='Email' />
          <input onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='City' />
          <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
        <input onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Phone Number' />
        <input onChange={onChangeHandler} name='zip' value={formData.zip} className='border border-gray-300 rounded-md py-2 px-3 w-full' type='text' placeholder='Zip Code' />
        </div>
      </div>
      {/* right side */}
      <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p onClick={() => setMethod("stripe")} className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt='' />
              </div>
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p onClick={() => setMethod("razorpay")}  className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt='' />
              </div>
              <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p onClick={() => setMethod("cod")}  className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='w-full text-end mt-4'>
              <button type='submit' className='bg-black text-white py-3 px-16'>PLACE ORDER</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder