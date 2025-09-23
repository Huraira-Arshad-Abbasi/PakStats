import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trade from './components/Trade'
import Education from './components/Education'
import Economy from './components/Economy'
import Poverty from './components/Poverty'
import Debt from './components/Debt'
import Tech from './components/Tech'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: '/About',
      element: 
      <>
          <Navbar />
          < About />
          <Footer />
        </>
      
    },
    {
      path: '/poverty',
      element: <>
          <Navbar />
          <Poverty/>
          <Footer />
        </>
    },
    {
      path: '/Education',
      element: <>
          <Navbar />
          <Education/>
          <Footer/>
        </>
    },
    {
      path: '/Trade',
      element: <>
          <Navbar />
          < Trade />
          <Footer />
        </>
    },
    {
      path: '/Economy',
      element: <>
          <Navbar />
          < Economy/>
          <Footer />
        </>
    },
    {
      path: '/Debt',
      element: <>
          <Navbar />
          <Debt/>
          <Footer />
        </>
    },
    {
      path: '/Tech',
      element: <>
          <Navbar />
          <Tech/>
          <Footer />
        </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
