import { SignInButton } from "@clerk/clerk-react";
import React from 'react'

const SignUp = () => {
    return (
        <div className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

            <div className="absolute inset-0 bg-opacity-40 bg-gradient-to-tl from-black via-transparent to-black" />
            <div className="relative text-center px-4 max-w-xl">
                <h1 className="text-white text-4xl sm:text-6xl font-bold mb-6">
                    Welcome to <div className="text-yellow-300">Note Maker</div>
                </h1>
                <p className="text-white text-lg sm:text-xl mb-8">
                    Your one-stop solution to organize
                    <p>
                        your ideas and tasks effortlessly.
                    </p>
                </p>    
                    <SignInButton className="bg-yellow-300 text-black font-semibold text-lg py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-400"/>
            </div>
        </div>
    )
}

export default SignUp
