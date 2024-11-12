import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
const List = ({ token }) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.status === 200) {
        setList(response.data.products)
      }
    } catch (e) {
      console.log(e)
      toast.error(e.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/removeProduct', {id}, {headers: {token}})
      if (response.status === 200) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (e) {
      console.log(e)
      toast.error(e.message)
    }
  }
  useEffect(() => {
    fetchList()
  })
  return (
    <>
    <p className='mb-2'>Products List</p>
    <div className='flex flex-col gap-2'>
      <div className='hidden md:grid grid-cols-[1fr_3fr__1fr_1fr_1fr] items-center py-1 px=2 border bg-gray-100 text-sm'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>  
      </div>
      {list.map((product, index) => (
        <div key={index} className='grid grid-cols-[1fr_3fr__1fr_1fr_1fr] items-center py-1 px=2 border bg-gray-100 text-sm'>
          <img className='w-10 h-10' src={product.image[0]} alt="" />
          <p>{product.name}</p>
          <p>{product.category}</p>
          <p>{currency}{product.price}</p>
          <p  onClick={() => removeProduct(product._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default List