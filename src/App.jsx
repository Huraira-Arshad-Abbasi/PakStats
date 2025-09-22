import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trade from './components/Trade'
import Education from './components/Education'
import Economy from './components/Economy'

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
    // {
    //   path: '/poverty&Jobs',
    //   element: <>
    //       <Navbar />
    //       <div>poverty & jobs</div>
    //       <Footer />
    //     </>
    // },
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
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
