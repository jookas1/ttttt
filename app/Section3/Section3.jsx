import React from 'react'

export default function Section3() {
  return (
    <section className='py-5'>
        <div className='w-[90%] md:w-[70%]  bg-gradient-to-br from-[#ffffff] via-[#C9D6F5] to-[#ffffff] mx-auto lg:flex justify-around  gap-5  items-center mt-15 rounded-xl pt-2 pb-80 lg:pb-50 overflow-hidden  -translate-y-5'>
        <div className='w-[45%] md:mx-0 mx-2 mt-6'>
          <h3 className='text-3xl font-semibold w-90 my-4'>ترفيه برؤية جديدة… من المملكة إلى العالم.</h3>
          <p className='w-90 lg:w-[460px]'>تأسست مجموعة رفيه للترفيه من قبل مجموعة البلطان، بعد أن رسّخت مكانتها في مجالي العقارات والاستثمار.
            </p>       <p className='lg:w-auto w-70'>رأى الأستاذ الوليد البلطان فجوة في سوق الترفيه والخدمات المتكاملة داخل المملكة، فأنشأ Rafeeh Entertainment Group لتكون المعيار الجديد في عالم الترفيه والخدمات المبتكرة في المملكة العربية السعودية.</p>
         </div>
       <div className='bg-red-400 lg:w-[45%] relative '> 
          <div className='absolute -bottom-200 rounded-2xl translate-y-19 lg:-translate-x-30 -translate-x-25 h-[880px] '>
            
            <img src="./557a7ae67532f2fb7d050a7eb4fa92ae7c59c367.png"className=' rounded-xl w-[230px]  lg:w-[345px]'  alt="" />
          </div>
          <div className=' absolute top-8 right-60 overflow-hidden w-[230px]  md:w-[343px] md:translate-x-70 translate-x-50 rounded-2xl  translate-y-22'>
            
            <img src="./557a7ae67532f2fb7d050a7eb4fa92ae7c59c367.png" className=' -translate-y-55 h-[880px] w-full' alt="" />
          </div>
       </div>
          
        
      </div>
    </section>
  )
}
