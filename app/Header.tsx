import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <Image src='https://links.papareact.com/jne' alt='logo' height={10} width={50} />
            </div>
        </div>
    </header>
  )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })
