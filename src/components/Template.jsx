import React from 'react'
import './css/template.css'
import Details from './Details'
import edu from '../assets/edu1.jpg'
import tradeImg from '../assets/trade.jpg'
import ec from '../assets/economy.jpg'
import tec from '../assets/tec.jpg'
import poverty from '../assets/poverty.jpg'
import debt from '../assets/debt.webp'

const Template = ({ headings, icon, section, WhyItMatter }) => {
  const [open, setOpen] = React.useState([])

  const backgrounds = {
    "Education": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg) ), url(${edu}) `,
      filter: 'brightness(0.6)',
      backgroundPosition: 'center'
    },
    "Trade in Pakistan": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg) ), url(${tradeImg})`,
      filter: 'brightness(0.6)',
      backgroundPosition: 'center'
    },
    "Economy": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg)), url(${ec})`,
      // filter: 'blur(1px) opacity(0.2)',
      backgroundPosition: 'top center'

    },
   "Science & Technology": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg)), url(${tec})`,
      filter: 'brightness(0.9)',
      backgroundPosition: 'top'
    },
   "External Debt": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg) ), url(${debt})`,
      filter: 'brightness(0.6)',
      backgroundPosition: 'top'
    },
   "Poverty in Pakistan": {
      backgroundImage: `radial-gradient(circle at center, #31294354, var(--bg)), url(${poverty})`,
      filter: 'brightness(0.8)',
      backgroundPosition: 'center'
    },
  }



  const handleHeadingClick = index => {
    setOpen(pre => {
      const newOpen = [...pre]
      newOpen[index] = !newOpen[index]
      return newOpen
    })
  }

  return (
    <section className='section-container'>
      <div className='img' style={{...backgrounds[section]}}></div>
      <h2>
        {icon}
        {section}
      </h2>
      <article>
        <h3>{icon} Why It Matters</h3>
        <p>{WhyItMatter}</p>
      </article>
      <article className='indicators'>
        <h3>📊 Key Trade Indicators</h3>
        <div>
          <ul>
            {headings.map((h, index) => {
              return (
                <li key={index}>
                  <h4
                    onClick={() => handleHeadingClick(index)}
                    style={{
                      textDecoration: open[index] ? 'underline' : 'none'
                    }}
                  >
                    <span
                      style={{
                        transition: 'transform 0.3s ease',
                        transform: open[index]
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)'
                      }}
                    >
                      ►
                    </span>
                    {h.title}
                  </h4>
                  <div>
                    {open[index] && (
                      <Details code={h.code} p={h.desc} />
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </article>
      <article></article>
    </section>
  )
}

export default Template
