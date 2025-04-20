import React, { useState } from 'react'
import { Headphone } from '../data';


interface CardProps{
  headphone: Headphone;
  onAddToBasket: (headphone: Headphone) => void;
}


export default function Card({ headphone, onAddToBasket }: CardProps) {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddBasket = () =>{
    onAddToBasket(headphone);
  }

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); 
  };




  return (
   <div className="card">
      <div className="card-img-container">
        <img src={headphone.img}
             alt={headphone.title}
             className='card-img'
         />
      </div>
      <div className="card-content">
          <p>{headphone.title}</p>
          <div className="price-container">
          <p className="price">{headphone.price } ₽</p>
            {headphone.sale !== undefined && headphone.sale !== null && (
              <p className="price-sale">{headphone.sale} ₽</p>
            )}
          </div>
          <p className="p-rate">
          <svg
            className="svg-rate"
            width="22"
            height="22"
            viewBox="0 0 25 23"
            fill={isFavorite ? "#FFCE7F" : "none"} 
            stroke={isFavorite ? "none" : "#FFCE7F"} 
            strokeWidth="1" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleFavorite} 
            style={{ cursor: 'pointer' }} 
          >
            <path
              d="M12.627 18.0143L5.41636 22.3656L7.37665 14.2449L0.960938 8.81491L9.38233 8.14829L12.627 0.439671L15.8716 8.14829L24.2943 8.81491L17.8773 14.2449L19.8376 22.3656L12.627 18.0143Z"
            />
          </svg>
          {headphone.rate}
        </p>
        <button className='button-bye' onClick={handleAddBasket}>
            Купить
        </button>
      </div>
   </div>
  )
}
