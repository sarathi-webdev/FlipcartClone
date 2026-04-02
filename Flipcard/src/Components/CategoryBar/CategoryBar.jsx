import React from 'react'
import '../CategoryBar/CategoryBar.css'

const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className='CategoryBar'>
        <div className='categoryBar-Img'>
            <img src={Imgsrc} alt="CategoryImg"></img>

        </div>
        <p className='CategoryBar-name'>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar