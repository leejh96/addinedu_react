// 배열 렌더링 - 기초 방식
import React from 'react'

function ListItem({ value}) {
    return (
        <li>
            <span>{value.carname} - </span>
            <span>{value.color}</span>
        </li>
    )
}

function Array04List({array}) {
    return (
        <ul>
            {array.map((car) => {
                return(
                    <ListItem value={car} key={car.id} />
                )
            })}
        </ul>
    )
}

export default Array04List
