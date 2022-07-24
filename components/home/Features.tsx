import React from 'react'

const Features = () => {
  return (
    <section className="mt-5">
        <div className="p-0">
            <div className="flex flex-row p-0 text-center">
                <div className="p-5 text-white h-[120px] bg-primary basis-1/4 flex flex-col justify-center">
                    <h3 className="text-xl mb-1 font-semibold">$400,000 </h3>
                    <p className="mb-0 text-xs">donated in funds and in-kind donations</p>
                </div>
                <div className="p-5 text-white bg-secondary basis-1/4 flex flex-col justify-center">
                    <h3 className="text-xl mb-1 font-semibold">1,000 electronics </h3>
                    <p className="mb-0 text-xs">distributed around the world</p>
                </div>
                <div className="p-5 text-white bg-primary basis-1/4 flex flex-col justify-center">
                    <h3 className="text-xl mb-1 font-semibold">14,000 pounds </h3>
                    <p className="mb-0 text-xs">of electronics recycled</p>
                </div>
                <div className="p-5 text-white bg-secondary basis-1/4 flex flex-col justify-center">
                    <h3 className="text-xl mb-1 font-semibold">21 disasters </h3>
                    <p className="mb-0 text-xs">that We Care Act has provided relief for</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features