import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header class="text-white body-font bg-slate-800">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl text-white">Tailblocks</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900">HOME</a>
                        <a class="mr-5 hover:text-gray-900">CONTACT</a>
                        <a class="mr-5 hover:text-gray-900">ABOUT</a>
                        <a class="mr-5 hover:text-gray-900">CUSTOMER SUPPORT</a>
                    </nav>
                    {/* <div className='space-x-2 text-white'>
                        <Link to="./" class="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">LOGIN</Link>
                        <Link to="./register" class="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">REGISTER</Link>
                    </div> */}
                </div>
            </header>
        </>
    )
}

export default Header