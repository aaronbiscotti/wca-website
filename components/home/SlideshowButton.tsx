import React from 'react'

interface Active {
    isActive: boolean;
}

const SlideshowButton = ({isActive}: Active) => {
  return (
    <div>
    {isActive ? (<div className="h-5 w-5 border border-gray-300 rounded-full flex justify-center items-center"><div className="h-2 w-2 bg-primary rounded-full" /></div>) 
    : (<div className="h-5 w-5 flex justify-center items-center"><div className="h-2 w-2 rounded-full bg-gray-300" /></div>)}
    </div>
    
  )
}

export default SlideshowButton