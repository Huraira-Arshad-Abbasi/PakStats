import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
export default function Navbar () {
  const navRef = useRef(null)
  const [icon_class, setIcon_class] = useState('humbarger_icon')
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (!isOpen) {
      
      setIcon_class('humbarger_icon open ')
    } else {
     
      setIcon_class('humbarger_icon')
    }
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // navRef.current.style.borderBottom = '0px'
        navRef.current.style.backgroundColor = 'var(--bg)'
      } else {
        
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
          <div className={icon_class} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <NavLink to='/' className='nav-link'>
            PAK.<span>Stats</span>
          </NavLink>
          
        </div>
        <div className={'nav__links' + (isOpen ? 'open ' : '')}>
          <ul className={isOpen ? 'open ' : ''}>
            <li>
              <NavLink
                to='/'
                onClick={isOpen? toggleMenu : ""}
                className={({ isActive }) =>
                  isActive ? 'nav-link active ' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/Education'
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
                onClick={isOpen? toggleMenu : ""}
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
