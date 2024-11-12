import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt='' className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis eum quibusdam reprehenderit! Autem quia explicabo numquam, cumque non laudantium aperiam, nulla ipsam obcaecati doloremque aliquid nostrum officia officiis laboriosam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quod eaque error ex fuga, aliquid voluptatum omnis tempora aspernatur ipsam voluptatibus? In illo autem tempora ipsa, voluptatum ipsam maiores modi.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore facere illo provident esse minus nemo quisquam sed nulla. Omnis non at magni pariatur eligendi eveniet autem explicabo aliquid neque!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b> Lorem ipsum dolor sit </b>
        <p className='text-gray-600'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse possimus ipsum tenetur doloribus repellendus laudantium totam quam eligendi, iste minima nulla quis. Qui fugiat, soluta nam repudiandae iste a animi. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b> Lorem ipsum dolor sit </b>
        <p className='text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat doloribus quidem explicabo vero vitae exercitationem quam architecto nam, molestias totam est tempora, sit praesentium, impedit possimus voluptas quia laboriosam. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b> Lorem ipsum dolor sit </b>
        <p className='text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti ullam nihil maxime ad enim placeat nostrum tempora, eveniet qui, dolorem error, at expedita aperiam perferendis vitae. Nemo, voluptates molestias!</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About