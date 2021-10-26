import React from 'react'

function Variable() {
  const car = {
    name : 'Hyundai',
    weight : '850KG',
    color  : 'white'
  } 

  return (
    <ul>
      <li>
        <span>자동차 이름 : {car.name}</span>
      </li>
      <li>
        <span>자동차 중량 : {car.weight}</span>
      </li>
      <li>
        <span>자동차 색 : {car.color}</span>
      </li>
    </ul>
  )
}

export default Variable
