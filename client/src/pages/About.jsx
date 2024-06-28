import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div >
          <h1 className='text-3xl font-semibold text-center my-7'>About BlogHive</h1>
          <div className="text-ms text-gray-500 flex flex-col gap-5"></div>
          <p>
          Welcome to blogHive, your go-to destination for all things technology! At blogHive, we are passionate about exploring and discussing the latest trends, breakthroughs, and ideas in the tech world. 
          </p>
          <p className='mt-3'>Our mission is to provide insightful, engaging, and thought-provoking content that caters to tech enthusiasts, professionals, and curious minds alike. Whether you're interested in the latest gadgets, software developments, industry news, or in-depth analyses, blogHive is here to keep you informed and inspired</p>
          <p className='mt-3'>Join us on this exciting journey as we delve into the ever-evolving landscape of technology and innovation.</p>
        </div>
      </div>
    </div>
  )
}
