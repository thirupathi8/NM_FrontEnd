import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-end p-5 shadow-md'>
      <UserButton />
    </div>
  )
}

export default Header