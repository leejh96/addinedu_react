import React, {useRef} from 'react'

function HookUseRef() {
    
    //초기값 지정 x => DOM 접근
    const inputText = useRef();
    const moveFocus = () => {
        inputText.current.focus();
    }
    return (
        <>
            <input ref={inputText}  type="text" />
            <button type='button' onClick={moveFocus}>초기화</button>
        </>
    )
}

export default HookUseRef
