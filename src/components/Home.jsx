import React from 'react'
import './css/home.css'

const Home = () => {

  React.useEffect(()=>{
    fetch(
    "https://api.worldbank.org/v2/country/PK/indicator/SL.UEM.TOTL.ZS?format=json&MRV=1"
    ).then((res)=>res.json()).then((res)=>console.log(res));
    
  },[])
  return (
    <div className='home_container'>
      <div className='hero_bg_img'></div>
      <div className='hero_section'>
        <div className='hero_content'>
          <h1>Pakistan Indicators Dashboard</h1>
          <p>
            Explore Pakistan{'’'}s economy, poverty, jobs, and trade through
            interactive charts.
          </p>
          <div className='key_stats'>
            <button>Export & Import</button>
            <button>Inflation</button>
            <button>Poverty & Jobs</button>
          </div>
        </div>
      </div>

      <div className='popular_stats'>
        <h2>Popular Stats</h2>
        <div className='stats_cards'>
          <div className='card'>
            <h3>Unemployment Rate</h3>
            <p>5.8%</p>
          </div>
          <div className='card'>
            <h3>Trade balance Rate</h3>
            <p>5.8%</p>
          </div>
          <div className='card'>
            <h3>Poverty Rate</h3>
            <p>5.8%</p>
          </div>
          <div className='card'>
            <h3>letracy Rate</h3>
            <p>5.8%</p>
          </div>
          <div className='card'>
            <h3>abc Rate</h3>
            <p>5.8%</p>
          </div>
          <div className='card'>
            <h3>Unemployment Rate</h3>
            <p>5.8%</p>
          </div>
        </div>
      </div>

      <div className='latest_news'></div>
    </div>
  )
}

export default Home
