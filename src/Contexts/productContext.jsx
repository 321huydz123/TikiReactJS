import React, { createContext, useState, useEffect } from 'react'
import * as request from '../utils/request'
import data from '../utils/data.json'
export const ProductContext = createContext()
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fecthProduct = async () => {
      try {
        // const res = await request.get('product')
        const parsedData = JSON.parse(JSON.stringify(data));
        setProducts(parsedData.books);
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    
    fecthProduct();
  }, [])

  console.log(products);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}
export default ProductProvider