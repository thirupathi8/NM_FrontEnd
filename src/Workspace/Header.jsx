import React from 'react'
import { UserButton } from '@clerk/clerk-react'

const Header = () => {
    return (
        <div className='flex justify-between shadow-md p-5'>
            <img src="src\assets\logo.svg" alt="logo" width={120} height={120} />
            <UserButton />
        </div>
    )
}

export default Header