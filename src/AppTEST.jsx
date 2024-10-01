// This is the main component of the application. It will be the parent component of all other components.
// type rafce - creates a react arrow function component with an export statement
import React from 'react'

const App = () => {
  const name = 'Aisha Khalfan';
  const x = 10;
  const y = 20;
  const names = ['Aisha', 'Khalfan', 'Muslim', 'Islam'];
  const loggedIn = false;
  const styles = {
    color: 'green',
    fontSize: '55px'
  }

// if (loggedIn) {
//   return <div>Welcome back {name}</div>
// }


  return (
    <div>  
    <div className='text-5xl'>App</div>
    <p style={{color: 'red', fontSize: '24px'}}>Hello {name}</p>
    <p style={styles}>
      The sum of {x} and  {y} is {x + y}
    </p>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedIn ? <h1>Hello {name}</h1> : <h1>Hello Guest</h1>}
    </div>
  )
}

export default App
