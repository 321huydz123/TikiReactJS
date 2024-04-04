import React from 'react'
import { Link } from 'react-router-dom'
import { formattedNumber } from '../utils/formatteNumber'
const Product = ({ product }) => {
    const { id, images, name, list_price, quantity_sold,original_price } = product;
    const thumbnailUrl = images.length > 0 ? images[0].thumbnail_url : null;
    const percentageSale = ((original_price - list_price) / original_price) * 100;
    return (
        <div className=" mb-4 col-span-1 h-[388px] md:w-[200px] w-[180px] bg-white">
            <Link to={`/product/${id}`} className="md:flex-row md:max-w-xl">
                {thumbnailUrl && (
                    <img
                        className="object-cover object-center object-fit w-[200px] h-[200px]"
                        src={thumbnailUrl}
                        alt={name}
                    />
                )}
                <div className="p-4">
                    <div className='h-[92px] mb-2'>
                    <h5 className="mb-2 text-[12px] font-bold-light tracking-tight hover:underline h-fit">{name}
                    </h5>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <div className="flex items-center">
                                <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            </div>
                            <div className='w-[1.5px] bg-gray-300 h-[16px] mx-2'></div>
                            <p className='font-light text-[10px] text-gray-400'>{quantity_sold && quantity_sold.text && (
                                <p>{quantity_sold.text}</p>
                            )}</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex'>
                                <p className='text-[16px] font-bold'>{formattedNumber(original_price)}</p>
                                <p className='font-light text-[12px] mb-2 ml-1'>₫</p>
                        </div>
                        <div className='relative ml-2 w-[32px] p-1 h-[19px] rounded-[40%] bg-gray-200'>
                            <p className='absolute font-bold text-[12px] top-[1px]'>-{percentageSale}%</p>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto h-[1px] bg-gray-200'></div>
                <p className='font-light text-[12px] flex items-center justify-center mt-1 text-gray-300'>Giao siêu tốc 2h</p>
            </Link >
        </div >
    )
}

export default Product