import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './components/Nav/Nav'
import { Banner } from './components/Banner/Banner'
import './index.css'
import { Schools } from './components/Schools/Schools'
import { Courses } from './components/Courses/Courses'
import { Footer } from './components/Footer/Footer'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Methodology } from './components/Methodology/Methodology'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <Schools />
    <Courses />
    <Methodology />
    <Newsletter />
    <Footer />
  </React.StrictMode>,
)
