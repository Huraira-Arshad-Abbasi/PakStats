import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './css/navbar.css'
export default function Navbar () {
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = location.pathname === '/'
      if (!isHomePage) {
        if (window.scrollY > 0) {
          
          navRef.current.style.boxShadow = '0 0 10px 0px var(--shadow)'
               navRef.current.style.backgroundColor = 'white'
           return; // don’t attach scroll listener
        }
    }
      
        if (window.scrollY > 600) {
          navRef.current.style.boxShadow = '0 0 10px 0px var(--shadow)'
          navRef.current.style.backgroundColor = 'white'
        } else if (window.scrollY > 200) {
          navRef.current.style.borderBottom = '0px'
          navRef.current.style.boxShadow = '0 0 10px 0px var(--shadow)'
          navRef.current.style.backgroundColor = '#252932'
        } else {
          navRef.current.style.borderBottom = '.5px solid #99919182'
          navRef.current.style.boxShadow = 'none'
          navRef.current.style.backgroundColor = 'transparent'
        }
      
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  return (
    <div>
      <nav ref={navRef}>
        <div className='logo'>
          <NavLink to='/' className='nav-link'>
            PAK.<span>Stats</span>
          </NavLink>
        </div>
        <div className='nav__links'>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to='/poverty&Jobs'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                poverty & Jobs
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to='/Education'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Economy'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Economy
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/Trade'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Trade
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/About'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
