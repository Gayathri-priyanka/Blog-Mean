import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
            Want to learn more about React?
        </h2>
        <p className='text-gray-500 my-2'>
            Ckeck out these documention provided by React 
        </p>
        <Button gradientDuoTone='purpleToBlue' className="rounded-tl-xl rounded-bl-none"><a href="https://legacy.reactjs.org/docs/getting-started.html" target='_blank' rel='noopener noreferrer'>Learn more</a></Button>
        </div>
        <div className="p-7 flex-1">
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5992700/og_image/optimized/1005_Design-Patterns-in-React_Cover-9181bdf0d728b73804e11b6344434b0c.png" alt="img"/>
        </div>
    </div>

  )
}
