import React, {useState} from 'react'
import './App.css'

export default function App() {
  const [option, setoption] = useState('success_kid')
  const [text1, settext1] = useState('')
  const [text2, settext2] = useState('')

  const onChangeOption = (event) => {
    setoption(event.target.value)
  }

  const onChangeText1 = (event) => {
    settext1(event.target.value)
  }

  const onChangeText2 = (event) => {
    settext2(event.target.value)
  }

  return (
    <>
    <div>
      <select id="option" onChange={onChangeOption}>
        <option value="success_kid">Success Kid</option>
        <option value="laughing_leo">Laughing Leo</option>
        <option value="disaster_girl">Disaster Girl</option>
        <option value="smart_person">Smart Person</option>
      </select>    

      <input type="text" placeholder="Texto 1" onChange={onChangeText1}/>
      <input type="text" placeholder="Texto 2" onChange={onChangeText2}/>
    </div>
    <div id="meme">
      <span>{text1}</span>
      <img src={`/img/${option}.png`}/>
      <span>{text2}</span>
    </div>
    </>
  )
}

