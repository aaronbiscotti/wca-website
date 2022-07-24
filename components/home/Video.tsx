import React, { useRef, useState } from 'react'

const Video = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    setPlay(true);
    vidRef.current.play();
  }
  return (
    <div className="mt-10 bg-gray-bg absolute left-0 right-0 px-[10%] py-[5%]">
        <div className="h-[500px] w-[800px] m-auto">
            <h2 className="text-xl font-semibold">We Care Act Houston</h2>
            <p className="text-lg font-[300]">Learn more about our parent organization, We Care Act Houston.</p>
            <p className="text-muted text-md font-[300] mb-[30px]">Source: <a target="_blank"
                    href="https://www.youtube.com/watch?v=LA-W3u8dtEQ&t=37s">2018 Texas
                    Environmental Excellence Awards</a></p>
            <div className="flex justify-center">
            <div className="rounded-[4px] relative flex flex-col justify-center">
                <video controls={play ? true : false} className="rounded-[15px]" ref={vidRef} preload="metadata" poster="/thumbnail.png">
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${play ? 'z-[-10]' : ''}`}>
                    <button className="flex flex-col justify-center items-center" onClick={handlePlayVideo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
                            <defs>
                                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="a">
                                    <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
                                    <stop stop-color="#FFF" offset="100%" />
                                </radialGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <circle fill="url(#a)" opacity=".3" cx="65" cy="65" r="65" />
                                <circle fill="url(#a)" opacity=".3" cx="65" cy="65" r="46.429" />
                                <path
                                    d="m75.983 69.819-13.744 9.02a5 5 0 0 1-7.743-4.181v-18.04a5 5 0 0 1 7.743-4.18l13.744 9.02a5 5 0 0 1 0 8.36z"
                                    fill="#FFF" />
                            </g>
                        </svg>
                        <p className="text-white text-[20px] mt-[20px]">Watch video</p>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Video