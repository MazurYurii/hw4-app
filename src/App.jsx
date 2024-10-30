import { useState } from 'react';

function App() {
  const [colorText, setColorText] = useState({color: 'wite'});
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [num, setNum] = useState(0);
  
  const changeColorText = () => {
    setColorText({color: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`});
  }

  const randomNumToArr = () => {
    setArr([...arr, Math.floor(Math.random()*1001)])
  }

  const randomNum = () => {
    setNum(Math.floor(Math.random()*101))
  }
  
  return (
    <>
      <button onClick={changeColorText}>Change to random color</button>
      <p style={colorText} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad rem nemo illum, eligendi eos amet tenetur sunt praesentium est.</p>
      
      <br />

      <button onClick={randomNumToArr}>Random value to Array</button>
      <ul>
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

      <br />

      <button onClick={randomNum}>Random number with 0 ... 100</button>
      <h3>{num}</h3>
    </>
  )
}

export default App
