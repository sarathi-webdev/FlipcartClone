import React from 'react'
import '../ProductDetailsCart/ProductDetailsCart.css'

const ProductDetailsCart = ({Data}) => {
  return (
    <div className='ProductDetailsCart'>
        <div className='ProductDetailsCart-Img'>
            <img src={Data.url}>
            </img>

        </div>
        <div className='ProductDetailsCart-details'>
            <p className='ProductDetailCard-name'>{Data.Product}

            </p>
            <div className='ratingAndreviews'>
                <div className='stars'>{Data.rating}★

                </div>
                <p className='ratings'>
                    {Data.rating} Ratings & {Data.reviews} Reviews
                </p>

            </div>
            <div className='ProductDetailCard-Productdetails'>
                <li className='ProductDetailCard-detail'>{Data.Descripition}</li>
                <li className='ProductDetailCard-detail'>{Data.Display}</li>
                <li className='ProductDetailCard-detail'>{Data.Camera}</li>
                <li className='ProductDetailCard-detail'>{Data.Proccessor}</li>

            </div>
            </div>
            <div className='ProductDetailCard-PriceandDelivery'>
                <div className='pricecontainer'>
                    <p className='ProductDetail-price'>₹{Data.Sellingprice}

                    </p>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 
                    height={21}
                    alt=""/>
                   

                </div>
                 <p className='Freedel'>
                        Free Delivery
                    </p>
                    <p className='discount'>
                        Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317
                    </p>

            </div>

        
    </div>
  )
}

export default ProductDetailsCart