import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://linkedin.com/in/abhiramkrishnam" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://linkedin.com/abhiramkrishnam" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://linkedin.com/abhiramkrishnam" fgColor='gray' bgColor='transparent'/>
        </div>

        <div>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray' 
            bgColor='transparent'
            />

            <p className="uppercase hidden md: inline-flex text-sm text-gray-400"> Get In Touch </p>
        </div>

    </header>
  )
}