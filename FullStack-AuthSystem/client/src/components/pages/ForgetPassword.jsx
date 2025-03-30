import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <section className="font-mono bg-gray-400">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover bg-center rounded-l-lg"
                            style={{
                                backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/035/342/329/non_2x/ai-generated-an-underwater-creature-with-the-ability-to-change-its-appearance-mimicking-its-surroundings-like-a-chameleon-ai-generative-photo.jpg')`,
                            }}
                        ></div>

                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Forget Password!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="userName">
                                        User Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="userName"
                                        type="text"
                                        placeholder="SuperStar_Ramu"
                                    />
                                </div>
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className='flex items-center space-x-3'>
                                    <div className="text-center">
                                        <Link
                                            to='/register'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Didn't have an account? Register!
                                        </Link>
                                    </div>
                                    <div className='h-16 w-0.5 bg-gray-400 '></div>
                                    <div className="text-center">
                                        <Link
                                            to='/'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgetPassword