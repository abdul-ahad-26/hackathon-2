import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='  flex flex-col md:flex-row  gap-8  '>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList