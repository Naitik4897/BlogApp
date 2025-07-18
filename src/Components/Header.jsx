import React from 'react'

const Header = () => {
  return (
    <div className="py-3 sm:py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl uppercase text-center text-gray-900">
                Naitik - Blogs
            </h1>
        </div>
    </div>
  )
}

export default Header;