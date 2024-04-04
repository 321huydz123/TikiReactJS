import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import Search from "../../../Components/Search";
import { CartContext } from "../../../Contexts/cartContext";

const Header = () => {
    const { itemAmount } = useContext(CartContext);
    return (
        <nav className="md:bg-white bg-blue-400">
            <div className="md:max-w-screen md:h-[96px] md:flex md:flex-inline items-center md:justify-around mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] h-[56px]">
                <div className="flex justify-around px-4 items-center h-[56px] w-full md:hidden">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-white ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <div class="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-[18.3px] h-[24px] absolute text-gray-400 left-2 top-1/2 transform -translate-y-1/2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                type="search"
                                id="default-search"
                                class="w-fit px-2 text-[14px] text-gray-700 border border-gray-300 bg-gray-50 pl-8"
                                placeholder="Bạn đang tìm kiếm gì"
                                required
                            />
                        </div>
                        <Link to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-white ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        </Link>
                    </div>
                </div>
                <Link to='/' className="md:flex md:flex-col md:justify-center items-center hidden">
                    <img src="https://s3-alpha-sig.figma.com/img/0fc4/c1bd/682eccf8d6c5e3ed3e5df02dab272608?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBaGYclduUoVeQ1sJ-Eo~GxzCUW5wL0UeUhTDPboU~uC6Vupbho9pLWUb7mX4lBGHgzWBjF8gKV-r-yLEycuNdV9g7AWSgrSkYWgI97ZGuXG7T-sQGhOGX5vTU-JahDB7J~DzSYw43K0hvh1iww8RHncnXhTfctM1ZwzXmQYCddCrfBDS-tmixrkVxuuUpcV2UhP2wHBAL9blAEzhG9uv3-7bB19mI3PSdhBFFLm-MoZgqmYO-iA6YjM4BXHRELEZedB6UffItoSdjyJCGx3TOGBImncpeJM73pviS5aVzbICF-UnBGPOa6KBaDWBFPh828ewKJjG0vAHsaazfB-zg__" className="h-[72px] w-[72px]"
                        alt="Flowbite Logo" />
                </Link>
                <div className="items-center justify-start hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <div>
                        <Search />
                    </div>
                    <ul
                        className="flex flex-col items-center font-medium ml-[100px] p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <Link to='/'
                                    className="block py-2 pl-3 pr-4 text-gray-500 bg-red-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page">Trang chủ</Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>


                                <Link to='/'
                                    className="block py-2 pl-3 pr-4 text-gray-500 bg-red-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page">Tài khoản</Link>
                            </div>
                        </li>
                        <div className="flex items-center">
                            <div className="w-[1.5px] h-[20px] bg-gray-400"></div>
                            <Link to='/cart'>
                                <div className="flex items-center relative mr-8 ml-2 justify-center h-10 w-10  text-gray-500  rounded-full group-hover:bg-red-500 cursor-pointer">
                                    {itemAmount >= 0 && (
                                        <div className="absolute font-bold text-[10px] mb-8 ml-10 h-[20px] w-[20px] bg-red-600 rounded-full flex justify-center items-center text-white">{itemAmount}</div>
                                    )}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                </div>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header