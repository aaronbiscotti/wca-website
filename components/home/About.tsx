import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 left-0 right-0 py-[2%] w-[80%] flex justify-between text-center flex-col items-center">
          <div className="p-5 text-white relative flex justify-center flex-col">
            <h1 className="font-light text-lg mb-5 text-primary">OUR MISSION & WHY WE DO WHAT WE DO</h1>
            <p className="text-black">After returning to school from the pandemic and remote learning, we noticed a considerable amount of students who lacked laptops lag behind in their studying because they didnt have 
              the necessary access to online resources to succeed. Mixed with continuing issues of global warming, we discovered our mission- to help underserved students accelerate their academic journeys
              while benefiting the environment.
              Through our progress, we believe that education is a fundamental right, and everyone should have access to the same resources and learning advantages offered in our ever-increasingly technological world.</p>
          </div>
          <button className="bg-primary text-white px-5 py-2 rounded-full mt-5">LEARN MORE ABOUT US</button>
      </div>
    </div>
  )
}

export default About