import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogHeader from './Components/BlogHeader/BlogHeader'
import Home from './Pages/Home/Home'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <BlogHeader />
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
