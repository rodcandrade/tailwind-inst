import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  return (
  <div>
    <Navbar />
    <Content />
    <Contact />
    <Footer />
    </div>
  )
}

export default App