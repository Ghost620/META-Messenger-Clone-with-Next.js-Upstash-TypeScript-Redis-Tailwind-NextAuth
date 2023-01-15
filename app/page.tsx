import dynamic from 'next/dynamic'
import React from 'react'

const Homepage = () => {
  return (
    <div className='text-4xl'>
      Homepage
    </div>
  )
}

export default dynamic(() => Promise.resolve(Homepage), { ssr: false })
