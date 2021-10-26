import React from 'react'

//감싸주는 부분만 컴포넌트로 만들고 안에 내용은 각기 다른내용 일경우
//안에 컴포넌트 내용은 children에서 가져올 수 있음
function Props06Wrap({children}) {
    return (
        <section className="section">
            {children}
        </section>
    )
}

export default Props06Wrap
