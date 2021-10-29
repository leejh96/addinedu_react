import React from 'react'

function Array05Create({ updateObject, createObject, carname, color}) {
    return (
        <div>
            <input name='carname' type="text" onChange={updateObject} value={carname}/>
            <input name='color' type="text" onChange={updateObject} value={color}/>
            <button type='button' onClick={createObject}>등록</button>
        </div>
    )
}

export default Array05Create
