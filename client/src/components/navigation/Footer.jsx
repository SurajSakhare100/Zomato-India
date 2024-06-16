import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    

<footer className="bg-white w-full h-auto shadow-black shadow-sm ">
    <div className="w-3/4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
           <Link 
           to={'/'}
           className="text-3xl text-black font-bold"
           >
           Zomato</Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-700 sm:mb-0 hover:text-black">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer