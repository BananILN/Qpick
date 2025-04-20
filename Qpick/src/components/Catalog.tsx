import React, { useState } from 'react'
import { Headphone } from '../data'
import Card from './Card';
import { headphones , WirelessHeadPhones } from '../data';

export default function Catalog() {

  const [basket, setBasket] = useState<Headphone[]>([]);


  const onAddToBasket = (headphone: Headphone) =>{{

  }}

  return (
    <div className='catalog'>

        <div className="catalog-title">
          Наушники
        </div>

        <div className="card-container">

          {headphones.map((card) =>(
          <Card headphone={card} onAddToBasket={onAddToBasket}/>
          
        ))}
        </div>
        <div className="card-container">

          {headphones.map((card) =>(
          <Card headphone={card} onAddToBasket={onAddToBasket}/>

          ))}
          </div>

        <div className="catalog-title">
          Беспроводные наушники
        </div>

        <div className="card-container-wireless">
          {WirelessHeadPhones.map((card) => (
            <Card headphone={card} onAddToBasket={onAddToBasket} />
          ))}
        </div>

    
    </div>
  )
}
