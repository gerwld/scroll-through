"use client";
import React from 'react'
import Hero from "@/components/hero"
import Content from "@/components/content"

const page = () => {
  React.useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className='content-wrapper'>
      <Hero/>
      <Content/>
    </div>
  )
}

export default page