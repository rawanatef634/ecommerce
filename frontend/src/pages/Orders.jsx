import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency, } = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(0,4).map((item, index) => {
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid lg:grid-cols-[3fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex gap-2'>
                  <img src={item.image[0]} className='w-16 h-16 object-cover' />
                  <div>
                    <p className='text-sm'>{item.name}</p>
                    <p className='text-sm'>{currency}{item.price}</p>
                  </div>
                </div>
                <div>
                  <p className='text-sm'>Size : M</p>
                </div>
                <div>
                  <p className='text-sm'>Quantity : 1</p>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track order</button>
                </div>
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default Orders