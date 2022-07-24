import type { NextPage } from 'next'
import About from '../components/home/About'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import Video from '../components/home/Video'
import WhyJoin from '../components/home/WhyJoin'

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <About />
      <Video />
      <WhyJoin />
    </div>
  )
}

export default Home
