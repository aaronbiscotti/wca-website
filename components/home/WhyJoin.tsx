import React from 'react'
import { Users, HeartHandshake, MoodSmile } from 'tabler-icons-react'

const WhyJoin = () => {
  return (
    <section className="py-5 mt-[700px]">
        <div className="container py-5">
        <header className="mb-4 text-center mb-5">
            <p className="text-serif mb-0 text-primary italic text-sm">Join and help our cause</p>
            <h2 className="text-uppercase text-2xl font-semibold">Why join us? </h2>
        </header>
        <div className="flex space-x-5">
            <div className="flex items-center text-center flex-col basis-1/3"><Users className="text-primary mb-4" size={40} />
                <h3 className="font-semibold">The people</h3>
                <p className="text-muted">Introduce yourself to our hard-working members and leaders! Expand your network and
                    make
                    new friends.
                </p>
            </div>
            <div className="flex items-center text-center flex-col basis-1/3"><HeartHandshake className="text-primary mb-4 fa-3x" size={40} />
                <h3 className="font-semibold">The community</h3>
                <p className="text-muted">Make a positive impact on your community. Joining us is a great way to expose
                    yourself
                    to issues around NYC and be part of the effort to help!
                </p>
            </div>
            <div className="flex items-center text-center flex-col basis-1/3"><MoodSmile className="text-primary mb-4 fa-3x" size={40} />
                <h3 className="font-semibold">The experience</h3>
                <p className="text-muted">Big things often have small beginnings. Contributing to our organization is a good
                    way
                    to get a leadership role in the future!
                </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default WhyJoin