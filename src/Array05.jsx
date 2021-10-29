import React, {useState, useRef} from 'react'
import Array05Create from './Array05Create';
import Array05List from './Array05List';
function Array05() {
    const [carArray, setCarArray] = useState([
        {
            id : 1,
            carname : 'Fiat',
            color : 'white',
        },
        {
            id : 2,
            carname : 'Hyundai',
            color : 'black',
        },
        {
            id : 3,
            carname : 'Kia',
            color : 'silver',
        }
    ])
    const [inputText, setInputText] = useState({
        carname : '',
        color : '',
    });
    const { carname, color } = inputText;

    const nextIndex = useRef(carArray.length + 1);

    const updateObject = (e) => {
        const { name, value } = e.target;
        setInputText({
            ...inputText,
            [name] : value,
        })
    }
    const createObject = () => {
        const car = {
            id: nextIndex.current,
            carname,
            color,
        }
        setCarArray([
            ...carArray,
            car
        ])

        setInputText({
            carname : '',
            color : '',
        })
        nextIndex.current++;
    }
    const removeObject = (id) => {
        //car.id 값을 사용해서 일치하지 않는 배열 요소들을 추출하여 새로운 배열 생성
        //배열.filter(function(실행원소){실행코드(비교구문)})

        setCarArray(
            carArray.filter((car) => {
                return (car.id !== id)
            })
        )
    }
    return (
        <>
            <Array05Create
                updateObject={updateObject}
                createObject={createObject} 
                carname={carname} 
                color={color} 
            />
            <Array05List array={carArray} removeObject={removeObject}/>
        </>
    )
}

export default Array05
