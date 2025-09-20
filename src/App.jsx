import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Trade from './components/Trade'

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
      path: '/Trade',
      element: <>
          <Navbar />
          < Trade />
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
