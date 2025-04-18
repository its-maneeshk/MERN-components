import React from 'react'

const Profile = () => {
    return (
        <>
            <div class="flex flex-col justify-center items-center h-[100vh] bg-gray-200">
                <div class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-7/12 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                        <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' class="absolute flex h-52 w-full justify-center rounded-xl bg-cover" />
                        <div class="absolute -bottom-40 flex h-52 w-52 items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <img class="h-full w-full rounded-full" src='https://image.cdn2.seaart.me/static/upload/20241202/25761f7d-7c27-4043-99c3-e9e645340978.png' alt="" />
                        </div>
                    </div>
                    <div class="mt-48 flex flex-col items-center">
                        <h4 class="text-xl font-bold text-navy-700 text-black">
                            Adela Parkson
                        </h4>
                        <p class="text-base font-normal text-gray-600">Product Manager</p>
                    </div>
                    <div class="mt-6 mb-3 flex gap-14 md:!gap-14 text-black">
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700">17</p>
                            <p class="text-sm font-normal text-gray-600">Posts</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700">
                                9.7K
                            </p>
                            <p class="text-sm font-normal text-gray-600">Followers</p>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <p class="text-2xl font-bold text-navy-700">
                                434
                            </p>
                            <p class="text-sm font-normal text-gray-600">Following</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile