import React from 'react'

import { Button, Paragraph } from 'kaanlibui'
import 'kaanlibui/dist/index.css'

const App = () => {
  return (
    <>
    <Paragraph text='merhaba'/>
    <Button text='Click'onClick={()=>alert('sa')}/>
    </>
  )
}

export default App
