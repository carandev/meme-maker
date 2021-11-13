import React, {useState} from 'react'

export default function App() {
  const [option, setoption] = useState('')

  const onChangeOption = (event) => {
    setoption(event.target.value)
  }

  return (
    <>
    <select id="option" onChange={onChangeOption}>
      <option value="success_kid">Success Kid</option>
      <option value="laughing_leo">Laughing Leo</option>
      <option value="disaster_girl">Disaster Girl</option>
      <option value="smart_person">Smart Person</option>
    </select>    
    <input type="text" placeholder="Texto 1"/>
    <input type="text" placeholder="Texto 1"/>
    <img src={`/img/${option}.png`}/>
    </>
  )
}

