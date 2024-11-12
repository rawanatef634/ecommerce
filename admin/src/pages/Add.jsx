import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import backendUrl from '../App'
import axios from 'axios'
const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
    const formData = new FormData()
    formData.append('image1', image1)
    formData.append('image2', image2)
    formData.append('image3', image3)
    formData.append('image4', image4)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('subCategory', subCategory)
    formData.append('bestseller', bestseller)
    formData.append('sizes', JSON.stringify(sizes))
    const response = await axios.post(backendUrl + '/api/product/addProduct', formData, {
      headers: { token }
    })
    if (response.status === 200) {
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setPrice('')
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
    }
    } catch (e) {
      console.log(e)
      toast.error(e.message)
    }
  }

  return (
    <form className='flex flex-col w-full items-start gap-3' onSubmit={onSubmitHandler}>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          <label htmlFor='image2'>
            <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor='image3'>
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor='image4'>
            <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none' type="text" placeholder='Product Name'/>
      </div> 
      <div className='w-full'>
        <p className='mb-2'>Description</p>
        <input onChange={(e) => setDescription(e.target.value)} value={description} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none' type="text" placeholder='Description'/>
      </div> 
    
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
      <div className='w-full'>
        <p className='mb-2'>Category</p>
        <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Sub Category</p>
        <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none'>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Price</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none' type="Number" placeholder='Price'/>
      </div> 
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes('S') ? 'bg-blue-500 text-white' : ''}`}>S</p>
          </div>
          <div onClick={() =>  setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes('M') ? 'bg-blue-500 text-white' : ''}`}>M</p>
          </div>
          <div onClick={() =>  setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes('L') ? 'bg-blue-500 text-white' : ''}`}>L</p>
          </div>
          <div onClick={() =>  setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes('XL') ? 'bg-blue-500 text-white' : ''}`}>XL</p>
          </div>
          <div onClick={() =>  setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev, 'XXl'])}>
            <p className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes('XXL') ? 'bg-blue-500 text-white' : ''}`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
        <label className="cursor-pointer" htmlFor='bestseller'>Add to Best Seller</label>
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>Add Product</button>
    </form>
  )
}

export default Add