import React from 'react'
function ListItem({ value, removeObject }) {
    return(
        <li>
            <span>{value.id} - </span>
            <span>{value.carname} - </span>
            <span>{value.color} </span>
            <button type='button' onClick={() => removeObject(value.id)}>삭제</button>
        </li>
    )
}
function Array05List({ array, removeObject }) {
    return (
        <ul>
            { 
                array.map( car => <ListItem removeObject={removeObject} value={car} key={car.id} /> )
            }
        </ul>  
    )
}

export default Array05List
