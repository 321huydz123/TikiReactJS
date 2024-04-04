/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../Contexts/productContext"
import { CartContext } from '../Contexts/cartContext'
import Loader from "./Loader"
import { formattedNumber } from '../utils/formatteNumber'
const DetailProduct = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1)

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }
    const { addToCart } = useContext(CartContext)
    const { products } = useContext(ProductContext)
    const product = products.find(item => {
        return item.id === id
    })
    if (!product.images || !product.authors) {
        return <section className="h-screen flex justify-center items-center mx-auto ">
            <Loader />
        </section>
    }
    const thumbnailUrl = product.images.length > 0 ? product.images[0].large_url : null;
    const author = product.authors.length > 0 ? product.authors[0].name : null;
    const percentageSale = ((product.original_price - product.list_price) / product.original_price) * 100;
    const specifications = product.specifications.length > 0 ? product.specifications[0].attributes : null;
    console.log(specifications);
    // console.log(cart)
    if (!product) {
        return <section className="h-screen flex justify-center items-center mx-auto ">
            <Loader />
        </section>
    }
    return (
        <section className="mt-10 container mx-auto">
            <div className="flex">
                <div className="mx-2 w-[400px] h-[695px] bg-white rounded-lg">
                    <div className="h-[432px]">
                        <div className="w-[368px] h-[370px] m-4">
                            <img className="object-cover object-center object-fit w-full h-full" src={thumbnailUrl} alt={product.name} />
                        </div>
                        <div className="h-[62px] mx-4 my-1">
                            <div className="flex items-center">
                                {product.images.map((image, index) => (

                                    <div key={index} className="w-[54px] h-[54px] mx-2 border border-gray-200">
                                        <img className="w-[54px] h-[54px] p-1 object-cover object-center object-fit " src={image.thumbnail_url} alt={`Image ${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[116px]">
                            <div className="m-4">
                                <h2 className="text-[16px] font-bold">Đặc điểm nổi bật</h2>
                                <div className="my-1 flex">
                                    <img className="w-[16px] h-[16px]" src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mof1htk-vpmRVjL9LAS79hR7PxilpphTimqZ1BrR-dH4BBlXRpXFceTHGCHRZgFjhDO6NLIbzXIbL7XEqd6H~G1fgDddRWK~15r9XWIghSOtgN8BaKivDUnI9-dJI-En9RpjsaIUlTl~5wTp892zmJOtbeBdsFbV1WXinq0xeNNhv3y3YeEO3VHytSAwb7wzIM3po1QOhLaE1MVw26AdQSwBgTy3OH3AFxgY9hqCf~TwcJ6~W1QnKKzk9zzEAYkcpEv0M~Eur8siUmdHgVDQPlLAb8oUZl0b8mKbruXND2qVLVWtTBMQPwhDoZwyTpay2LH3WYo6WJOIxUueiOn69w__" alt="" />
                                    <p className="text-[14px] ml-2">Kích thước lớn và bìa cứng, tạo cảm giác sang trọng
                                        và bền bỉ.</p>
                                </div>
                                <div className="my-1 flex">
                                    <img className="w-[16px] h-[16px]" src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mof1htk-vpmRVjL9LAS79hR7PxilpphTimqZ1BrR-dH4BBlXRpXFceTHGCHRZgFjhDO6NLIbzXIbL7XEqd6H~G1fgDddRWK~15r9XWIghSOtgN8BaKivDUnI9-dJI-En9RpjsaIUlTl~5wTp892zmJOtbeBdsFbV1WXinq0xeNNhv3y3YeEO3VHytSAwb7wzIM3po1QOhLaE1MVw26AdQSwBgTy3OH3AFxgY9hqCf~TwcJ6~W1QnKKzk9zzEAYkcpEv0M~Eur8siUmdHgVDQPlLAb8oUZl0b8mKbruXND2qVLVWtTBMQPwhDoZwyTpay2LH3WYo6WJOIxUueiOn69w__" alt="" />
                                    <p className="text-[14px] ml-2">Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút
                                        sự chú ý của trẻ em.</p>
                                </div>
                                <div className="my-1 flex">
                                    <img className="w-[16px] h-[16px]" src="https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mof1htk-vpmRVjL9LAS79hR7PxilpphTimqZ1BrR-dH4BBlXRpXFceTHGCHRZgFjhDO6NLIbzXIbL7XEqd6H~G1fgDddRWK~15r9XWIghSOtgN8BaKivDUnI9-dJI-En9RpjsaIUlTl~5wTp892zmJOtbeBdsFbV1WXinq0xeNNhv3y3YeEO3VHytSAwb7wzIM3po1QOhLaE1MVw26AdQSwBgTy3OH3AFxgY9hqCf~TwcJ6~W1QnKKzk9zzEAYkcpEv0M~Eur8siUmdHgVDQPlLAb8oUZl0b8mKbruXND2qVLVWtTBMQPwhDoZwyTpay2LH3WYo6WJOIxUueiOn69w__" alt="" />
                                    <p className="text-[14px] ml-2">Cung cấp thông tin tổng quát về diện tích, dân số
                                        và ngôn ngữ của các quốc gia.</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="mx-4 w-full my-1 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="w-[24px] h-[24px]" src="https://s3-alpha-sig.figma.com/img/9c38/d62c/74de8a849faa243a350a9eff83ad1ef6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VABRbWifrln8qZDIOWhC5bKYN4h39cRf6BNZ3QsUlM-o42~MTt6682ODVj6CfRzOlnbhyP2~62PNPzM98Wi3Az4cJZSufVHCYNbjHhA9tVUqfsJ48Z~TxSb-WFshHX2wiWh~ktEg4ZxJgPFTFV7W13wSxLY3F6B~a~asAOAHu4iiv-PGquzwFFsI4rFkLeb8IzCJ6-nyH3vLxIcXGVlEOzcx~PJLc-HVg~cOMFbY~CXRQhCMnmjlfXamm9Z1QeLnbLZLfWWFLAmm0Gv40Iz3sEWWD-nDw-5Qwg9fChaJnxEwH0~GYHZqqFISf3I34Sv9xyBELbZqO4mcUfinYbFzdA__" alt="" />
                                    <div className="flex items-center ml-2">
                                        <p className="text-[14px] font-light text-gray-300">Xem thêm</p>
                                        <p className="ml-2 text-[14px] font-light-bold ">Tóm tắt nội dung sách</p>
                                    </div>

                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-2 w-[584px]">
                    <div className="h-[527px] bg-white rounded-lg">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img className="w-[89px] h-[20px]" src="https://s3-alpha-sig.figma.com/img/3787/ee15/f5fc9524f060e2540605302d3aa5a90f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gNu6pJpBSuAOUpeKUVYWVM6izisBj2mUDSeCItJJ92jECGV-76PbOudr~5tLconapTJxx98jN81M2xgjNlNs9IYnbHtfDnXP-AmSX21OlWLUrjYeEvDXZuiL3KBZ4-I-4zMbcH9NbLlABlaoIQTaqw7jrY6iCwZVEenNeY3LH51gjJ808hq9OzLyYPBut3tyQleBkuaJZTI-zsSUJfzECnkcHpmIAt6Jjls8rvd8HQLXsepZqiTZYzB~F72JnT1MjKpbF4T1~f9QcsRt-Yivy4U6cIPX3nS0t9J0tRiBwr9xLn5SHBKRY8M41PWkIlqeyvpFeG2up3DQltBOvTQawg__" alt="" />
                                <div className="flex items-center ml-1">
                                    <p className="text-[13px]">Tác giả: </p>
                                    <p className="text-[13px] text-blue-600 ml-1">{author}</p>
                                </div>
                            </div>
                            <h2 className="text-[20px] my-1 font-lgiht-bold">{product.name}</h2>
                            <div className='flex items-center'>
                                <div className='flex items-center my-1'>
                                    <p className="text-[14px] font-bold">{product.rating_average}</p>
                                    <div className="flex items-center ml-1">
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        <svg className="text-yellow-400" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#FFC400" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                    </div>
                                    <p className="mx-2 text-gray-400">(928)</p>
                                    <div className='w-[1.5px] bg-gray-300 h-[16px] mx-2'></div>
                                    <p className='text-[14px] text-gray-400'>{product.quantity_sold && product.quantity_sold.text && (
                                        <p>{product.quantity_sold.text}</p>
                                    )}</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex'>
                                    <p className='text-[24px] font-bold'>{formattedNumber(product.original_price)}</p>
                                    <p className='font-light text-[18px] mb-2 ml-1'>₫</p>
                                </div>
                                <div className='relative ml-2 w-[32px] p-1 h-[19px] rounded-[40%] bg-gray-100'>
                                    <p className='absolute font-bold text-[12px] top-[1px]'>-{percentageSale}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-[16px] font-bold">Thông tin chi tiết</h2>
                            <div className="my-2">
                                <div className="grid grid-cols-2 gap-4 my-1 text-[14px]">
                                    <div className="col-span-1 text-gray-400">
                                        <p>Phiên bản sách</p>
                                    </div>
                                    <div className="col-span-1">
                                        <p>{product.categories.name}</p>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200 my-2"></div>
                            </div>
                            {specifications.map((attribute, index) => (
                                <div key={index} className="my-2">
                                    <div className="grid grid-cols-2 gap-4 my-1 text-[14px]">
                                        <div className="col-span-1 text-gray-400">
                                            <p>{attribute.name}</p>
                                        </div>
                                        <div className="col-span-1">
                                            <p>{attribute.value}</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-200 my-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6  h-fit bg-white rounded-lg">
                        <div className="p-4">
                            <h2 className="text-[16px] font-bold">Mô tả sản phẩm</h2>
                            <div className="my-4">
                                <img className="object-cover object-center object-fit w-full h-full" src={thumbnailUrl} alt="" />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: product.description }}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-2 w-[360px] h-[332px] bg-white rounded-lg">
                    <div className="p-4">
                        <h2 className="text-[14px] font-bold">Số Lượng</h2>
                        <div className="my-2">
                            <div className="flex justify-between items-center h-[50px] rounded-xl w-[160px] bg-transparent border-solid border-2 border-gray-200">
                                <div onClick={decreaseQuantity} className="p-6 cursor-pointer hover:text-red-600 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                                <div>{quantity}</div>
                                <div onClick={increaseQuantity} className="p-6 cursor-pointer hover:text-blue-600 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="my-2">
                            <h2 className="font-bold text-[14px]">Tạm tính</h2>
                            <div className="my-2">
                                <div className='flex items-center'>
                                    <div className='flex'>
                                        <p className='text-[24px] font-bold'>{formattedNumber(product.original_price)}</p>
                                        <p className='font-light text-[18px] mb-2 ml-1'>₫</p>
                                    </div>
                                    <div className='relative ml-2 w-[32px] p-1 h-[19px] rounded-[40%] bg-gray-100'>
                                        <p className='absolute font-bold text-[12px] top-[1px]'>-{percentageSale}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-2">
                            <div className="flex justify-center items-center">
                                <Link to='/cart' onClick={() => addToCart(product, id, quantity)} className='font-light flex justify-center items-center text-md text-white bg-red-500 w-full h-[40px] rounded-md'>Mua ngay</Link>
                            </div>
                        </div>
                        <div className="my-2">
                            <div className="">
                                <button onClick={() => addToCart(product, id, quantity)} className='font-light border-solid border-2 border-blue-500 flex justify-center items-center text-blue-600 w-full h-[40px] rounded-md'>Thêm giỏ hàng</button>
                            </div>
                        </div>
                        <div className="my-2">
                            <div className="">
                                <button onClick={() => addToCart(product, id, quantity)} className='font-light border-solid border-2 border-blue-500 flex justify-center items-center text-blue-600 w-full h-[40px] rounded-md'>Mua trước trả sau</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DetailProduct