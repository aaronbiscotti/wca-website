import React, { useState } from 'react'
import SlideshowButton from './SlideshowButton';

const Hero = () => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="relative h-[500px]">
      <div className="absolute left-0 h-[500px] w-[50%] flex justify-center items-start flex-col space-y-5">
        <h1 className="relative text-5xl w-[700px] font-bold text-primary">Humanitarian enablers committed to good</h1>
        <p>Today, nearly 200,000 students attending New York City’s public schools lack the funding and resources they need to achieve their goals. 100% of proceeds from your donations will go toward providing underprivileged children with technological resources such as e-readers, laptops, books, textbooks, and more.</p>
        <button className="rounded-[100px] w-[140px] h-[35px] bg-primary text-white text-sm">+ Learn more</button>
      </div>
      <div className="absolute left-0 bottom-0 flex space-x-3">
        <button onClick={() => {
          setIsActive1(true);
          setIsActive2(false);
          setIsActive3(false);
        }}>
          <SlideshowButton isActive={isActive1} />
        </button>
        <button onClick={() => {
          setIsActive1(false);
          setIsActive2(true);
          setIsActive3(false);
        }}>
          <SlideshowButton isActive={isActive2} />
        </button>
        <button onClick={() => {
          setIsActive1(false);
          setIsActive2(false);
          setIsActive3(true);
        }}>
          <SlideshowButton isActive={isActive3} />
        </button>
      </div>
      <img src="/hero.png" className="h-[500px] object-cover absolute right-0" />
    </div>
  )
}

export default Hero