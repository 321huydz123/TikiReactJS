import React, { useContext, useState } from 'react'
import { ProductContext } from '../Contexts/productContext'
import Product from './Product'
import Pagination from './Pagination'
const ProductList = () => {
  const { products } = useContext(ProductContext)
  // console.log(products);
  const [currentPage , setCurrentPage] = useState(1)
  const postPerPage = 20
  const lastPostIndex = currentPage * postPerPage 
  const firsPostIndex = lastPostIndex - postPerPage
  const currentPost = products.slice(firsPostIndex, lastPostIndex)
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='md:container md:mx-auto w-full'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-[10px] gap-4 h-fit '>
            {currentPost.map((products) => {
              return <Product product={products} key={products.id} />
            })}
          </div>
          <div className='my-[100px]'>  
          <Pagination 
          totalPosts={products.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
        </div>
        </div>
    </div>
  )
}

export default ProductList