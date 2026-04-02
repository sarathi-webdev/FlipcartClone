import React from 'react'
import '../Products/Product.css'
import { ProductsData } from '../../ProductData'
import ProductDetailsCart from '../../Components/ProductDetailsCart/ProductDetailsCart'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='Products'>
    <div className='Products-Filters'>
      <p className='filter-head'>Filters</p>
        <div className='category'>
          <p className='filter-categoryHead'>Categoryies</p>       
        <div  className='filter-category'>Mobiles</div>
        </div>
        <div className='Price'>
          <p className='priceHead'>Price</p>

          <input className="pricerange" type="range" name="" id="" />
          
         
          <div className='price-input'>
            <input type="number" value={0} className='pricebox' />
            
            <p>to</p>
            
            <input type="number" value={5000} className='pricebox' />
           </div>

          

        </div>
        <div className='Brand'>
          <p>
            Brand
          </p>
        </div>

      </div>
      <div className='Products-items'>
        <p>
          Showing 1-{ProductsData.length} of {ProductsData.length} results
        </p>
        <div className='sortby'>
          <p>Sort By</p>
          <div className='sortitems'>
            <li className='sortitems'>Relevance</li>
            <li className='sortitems'>Popularity</li>
            <li className='sortitems'>Price - Low to High</li>
            <li className='sortitems'>Price - Hight to Low</li>
            <li className='sortitems'>Newest First</li>
          </div>

        </div>
         <div className=''>
        {ProductsData.map((item , index) =>
        (
          <Link key={index} to={`/ProductDetails/${item.id}`}>
            <ProductDetailsCart Data={item} />
          </Link>
        ))}
      </div>
          
      </div>
     

    </div>
    
  )
}

export default Product