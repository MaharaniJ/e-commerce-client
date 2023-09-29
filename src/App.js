import React from 'react'
import Navbar from './componets/header/Navbar'
import Newnav from './componets/newnav/Newnav'
import './app.css'
import Main from './componets/home/Main'

function App() {
  return (
    <div>
        <Navbar />
        <Newnav />
        <Main />
    </div>
  )
}

export default App