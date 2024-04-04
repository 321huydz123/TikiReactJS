import Header from "./Header"
import Footer from "./Footer"

const DefaultLayout = ({ children }) => {
    return (
        <div className="h-100vh">
            <Header />
            <div className=' h-[94px] mb-2 bg-white md:hidden'>
                <div className="flex items-center justify-around py-2">
                    <div className=''>
                        <p className='text-[14px] text-blue-400'>Phổ biến</p>
                    </div>
                    <div className="w-[4px] h-[4px] rounded-[2px] bg-gray-200">
                    </div>
                    <div>
                        <p className='text-[14px]'>Bán chạy</p>
                    </div>
                    <div className="w-[4px] h-[4px] rounded-[2px] bg-gray-200">
                    </div>
                    <div>
                        <p className='text-[14px]'>Hàng mới</p>
                    </div>
                    <div className="w-[4px] h-[4px] rounded-[2px] bg-gray-200">
                    </div>
                    <div>
                        <p className='text-[14px]'>Giá</p>
                    </div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[12.5px] h-[13.2px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-200 my-2">

                </div>
                <div className="flex items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[16.5px] h-[17.25px] text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                    <p className="ml-2">Lọc</p>
                    <div className="w-[1px] h-[20px] mx-2 bg-gray-200">

                    </div>
                    <div className="relative w-[64px] h-[32px] rounded-[100px] bg-gray-100">
                    <img className="w-[40px] ml-3 mt-1.5 h-[20px] absolute" src="https://s3-alpha-sig.figma.com/img/9f63/2df5/52d4ff178b5e56072899664c52a61fe5?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJ8Dx9Es1IIn8l5ZI6f~XXFWbjQhiie3Jf8DXRiGpomcU-5XZnbtOgLngNS9nJaANyp3lyHFhf5xy2GN8orZ6d2tbcCaCmPwc3cHGE6r~xRiPsQJicTP7Qlp~BZVjzvNy~XQzPtn0oWzffoL6-QmUKZq~G0MNKdkirqyk~~hvnEZL-MD1d0suc9n7wze~WcvkwpcwT-mCJJCHR79cKyslTjgTtHBrMWVo2wLbLMvawUYDIiYXDuLioDvcRsg0Kb45GcCeNbpBtHUkmvOdI-BBickO3e-lpyyN8KzDkJQoPEUZNIKp1D26d15P1MIzWUgl1PLFlEW0AA9gOT6yeEf6g__" alt="" />

                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto w-full px-2">
                <div className="md:my-3 md:flex items-center text-[12px] hidden">
                    <p className="text-gray-400">Trang chủ</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p className="text-gray-700">Nhà Sách Tiki</p>
                </div>
                <div className="flex">
                    <div className="md:h-[505px] md:w-[200px] md:bg-white md:rounded-sm hidden md:block">
                        <div className="ml-[16px] mt-[13.5px]">
                            <p className="">Danh Mục Sản Phẩm</p>
                            <ul className="font-light text-[12px]">
                                <li className="my-1">
                                    English Books
                                </li>
                                <li className="my-1">
                                    Sách tiếng Việt
                                </li>
                                <li className="my-1">
                                    Văn phòng phẩm
                                </li>
                                <li className="my-1">
                                    Quà lưu niệm
                                </li>
                            </ul>
                        </div>
                        <div className="w-full h-[0.5px] bg-gray-100"></div>
                        <div className="ml-[16px] mt-[13.5px]">
                            <p className="">Nhà cung cấp</p>
                            <div className="font-light text-[12px]">
                                <div className="flex items-center my-1">
                                    <input className="bg-gray-200" type="checkbox" />
                                    <p className=" ml-3 font-light text-[12px]">Nhà sách Fahasa</p>
                                </div>
                                <div className="flex items-center my-1">
                                    <input className="bg-gray-200" type="checkbox" />
                                    <p className=" ml-3 font-light text-[12px]">Bamboo Books</p>
                                </div>
                                <div className="flex items-center my-1">
                                    <input className="bg-gray-200" type="checkbox" />
                                    <p className=" ml-3 font-light text-[12px]">Times Books</p>
                                </div>
                                <div className="flex items-center my-1">
                                    <input className="bg-gray-200" type="checkbox" />
                                    <p className=" ml-3 font-light text-[12px]">Nhà Sách Trẻ Online</p>
                                </div>
                                <div className="flex items-center my-1">
                                    <input className="bg-gray-200" type="checkbox" />
                                    <p className=" ml-3 font-light text-[12px]">VBooks</p>
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <p className="text-blue-600 font-light-bold text-[12px]">Xem thêm</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full h-[0.5px] bg-gray-100 my-4"></div>
                        <div className="ml-[16px] mt-[13.5px]">
                            <p className="">Đánh giá</p>
                            <div className="font-light text-[12px] mt-[13.5px]">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                    </div>
                                    <p className="text-[12px] ml-2">từ 5 sao</p>
                                </div>
                            </div>
                            <div className="font-light text-[12px] mt-3">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-gray-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                    </div>
                                    <p className="text-[12px] ml-2">từ 4 sao</p>
                                </div>
                            </div>
                            <div className="font-light text-[12px] mt-3">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-gray-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-gray-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                    </div>
                                    <p className="text-[12px] ml-2">từ 3 sao</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:ml-[20px]">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default DefaultLayout;