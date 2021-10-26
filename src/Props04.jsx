import React from 'react'

function Props04() {
  const person = {
    firstName : 'John',
    lastName : 'Doe',
    email : 'asdf@qwer',
  }
  // person 객체의 속성으로 변수명을 지정해야한다
  let { firstName, lastName, email } = person;

  return (
    <ul>
      <li>firstName : {firstName}</li>
      <li>LastName  : {lastName}</li>
      <li>Email : {email}</li>
    </ul>
  )
}

export default Props04;
