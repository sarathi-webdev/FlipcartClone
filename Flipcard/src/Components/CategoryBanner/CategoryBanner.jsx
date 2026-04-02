import React from 'react'
import '../CategoryBanner/CategoryBanner.css'

const CategoryBanner = ({ImgSrc, Title, Brand}) => {
  return (
    <div className='CategoryBanner'>
        <img src={ImgSrc} alt="" className='CategoryBanner-img' />
        
        <p className='CategoryBanner-Title'>
            {Title.length > 25 ? Title : Title.slice(0,15)+ "..."}
        </p>
        <p className='CategoryBanner-ShopNow'>
            ShopNow

        </p>
        <p className='CategoryBanner-Brand'>
           {Brand}
        </p>
    </div>
  )
}

export default CategoryBanner