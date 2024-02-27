import './index.css'
import Main from './components/Main'
import Menu from './components/Menu'
import Section from './components/Section'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyCV from './pages/MyCV'

const App = () => {

  
  return (
    <BrowserRouter>
    <section className='bg-primary flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </section>
    </BrowserRouter>
  )
}

export default App

