import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
export default function Navbar () {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // navRef.current.style.borderBottom = '0px'
        navRef.current.style.boxShadow = '0 0 5px 0px var(--border)'
        navRef.current.style.backgroundColor = 'var(--bg)'
      } else {
        navRef.current.style.boxShadow = 'none'
        navRef.current.style.backgroundColor = 'transparent'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
                to='/Debt'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                External Debt
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Tech'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Science & Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/poverty'
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                poverty
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
