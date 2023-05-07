import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import People from './components/People'
import Speeches from './components/Speeches'
import Early from './components/Early'
import Later from './components/Later'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/speeches" element={<Speeches />} />
          <Route path="/early" element={<Early />} />
          <Route path="/later" element={<Later />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App