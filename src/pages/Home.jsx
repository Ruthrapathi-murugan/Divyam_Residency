import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Rooms from '../components/Rooms'
import Gallery from '../components/Gallery'

const Home = ({ onBookNow }) => {
  return (
    <>
      <Hero />
      <Features />
      <Rooms onGlobalBookNow={onBookNow} />
      <Gallery />
    </>
  )
}

export default Home
