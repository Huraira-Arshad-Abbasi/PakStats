// import { useEffect } from 'react'
import './css/footer.css'
import { useLocation, Link } from 'react-router-dom'


const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // useEffect(()=>{
    
  // },[location.pathname])
  return (
    <footer className='footer' style={{boxShadow: isHomePage? "none":"0 0 10px 0px var(--shadow)"}} >
        <p>© 2025 Pakistan Indicators Dashboard</p>
      <div className="links">
        {/* <a href="/">Home</a> */}
        {/* <a href="/poverty&Jobs">Poverty & Jobs</a> */}
        {/* <a href="/Trade">Trade</a> */}
        <Link to="/About">About</Link>
      </div>
    </footer>
  )
}

export default Footer
