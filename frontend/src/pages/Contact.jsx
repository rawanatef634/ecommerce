import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 text-center'>
        <img src={assets.contact_img} alt='' className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <div className='text-2xl py-4'>
        <Title text1={'GET'} text2={'IN TOUCH'} />
      </div>
      <div className='text-sm py-4'>
        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York 10018 or call us on (+1) 96 716 6879</p>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'FIND US'} text2={'HERE'} />
      </div>
      <div className='text-sm py-4'>
        <p>Find us on 8th floor, 379 Hudson St, New York 10018</p>
      </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact