import { useState } from 'react'
import Choises from './components/inputChoices'
import TextArea from './components/textArea'
import Button from './components/buttons'
import './App.css'

function App() {

  return (
    <>
    <div className='container'>
      <h1 className='title'>Translation</h1>
      <Choises />
      <TextArea />
      <Button />
        <TextArea />
    </div>
      
    </>
  )
}

export default App
