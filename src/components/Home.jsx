import React from 'react'
import './css/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [stats, setStats] = React.useState([])

  React.useEffect(() => {
    const indicators = [
      { title: 'Unemployment Rate', code: 'SL.UEM.TOTL.ZS' },
      { title: 'Poverty Rate ($2.15/day)', code: 'SI.POV.DDAY' },
      { title: 'GDP (Current US$)', code: 'NY.GDP.MKTP.CD' },
      { title: 'Exports (% of GDP)', code: 'NE.EXP.GNFS.ZS' },
      { title: 'External Debt (% of GDP)', code: 'DT.DOD.DECT.GN.ZS' }
    ]

    async function fetchStats () {
       const formatNumber = num => {
          if (num === null || num === undefined) return ''
    
          const absNum = Math.abs(num)
    
          if (absNum >= 1.0e12) {
            return (num / 1.0e12).toFixed(2) + 'T' // trillion
          } else if (absNum >= 1.0e9) {
            return (num / 1.0e9).toFixed(2) + 'B' // billion
          } else if (absNum >= 1.0e6) {
            return (num / 1.0e6).toFixed(2) + 'M' // million
          } else if (absNum >= 1.0e3) {
            return (num / 1.0e3).toFixed(2) + 'K' // thousand
          } else {
            return num.toFixed(2) // small numbers
          }
        }
      try {
        const results = await Promise.all(
          indicators.map(async item => {
            const res = await fetch(
              `https://api.worldbank.org/v2/country/PK/indicator/${item.code}?format=json&MRV=1`
            )
            const data = await res.json()

            // World Bank returns: [metadata, [values]]
            const value = data[1]?.[0]?.value ?? 'N/A'
            const year = data[1]?.[0]?.date ?? ''

            return {
              title: item.title,
              value: formatNumber(value),
              year
            }
          })
        )
        setStats(results)
       
      } catch (err) {
        console.error('Error fetching stats:', err)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className='home_container'>
      <div className='hero_bg_img'></div>
      <div className='hero_section'>
        <div className='hero_content'>
          <h1>Explore Pakistan’s key indicators</h1>
          <p>
            From economy and trade to education, poverty, and technology — our
            platform brings you the latest World Bank data in a clear and simple
            way. Understand the numbers that shape lives, policies, and the
            future of Pakistan.
          </p>
          <div className='key_stats'>
            <Link to='/Education'>Education</Link>
            <Link to='/trade'>Trade</Link>
            <Link to='/Debt'>External Debt</Link>
            <Link to='/Economy'>Economy</Link>
          </div>
        </div>
      </div>

      <div className='popular_stats'>
        <h2>Popular Stats</h2>
        <div className='stats_cards'>
          {stats.map((stat, index) => {
            return (
              <div
                title='Explore more about this indicator'
                key={index}
                className='card'
              >
                <Link to='/poverty'>
                  <h3>{stat.title}</h3>
                  <p>{stat.value}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className='latest_news'></div>
    </div>
  )
}

export default Home
