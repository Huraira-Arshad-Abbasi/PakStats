import React from 'react'
import './css/template.css'
import Details from './Details'

const Template = ({ headings, icon, section, WhyItMatter }) => {
  const [open, setOpen] = React.useState([])

  const backgrounds = {
    Education: {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/edu1.jpg") ',
      // filter: 'blur(1px) opacity(0.3)',
      backgroundPosition: 'center'
    },
    "Trade in Pakistan": {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/trade.jpg")',
      // filter: 'blur(1px) opacity(.3)',
      backgroundPosition: 'bottom left'
    },
    Economy: {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/hero.jpg")',
      // filter: 'blur(1px) opacity(0.2)',
      backgroundPosition: 'top'
    },
   "Science & Technology": {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/tec.jpg")',
      // filter: 'blur(.1px) opacity(0.9)',
      backgroundPosition: 'top'
    },
   "External Debt": {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/debt.webp")',
      // filter: 'blur(.1px) opacity(0.4)',
      backgroundPosition: 'top'
    },
   "Poverty in Pakistan": {
      backgroundImage: 'radial-gradient(circle at center, #31294354, var(--bg) 80%), url("/src/assets/poverty.jpg")',
      filter: 'grayscale(0.6)',
      backgroundPosition: 'top'
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
      <div className='img' style={backgrounds[section]}></div>
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
                      <Details section={section} code={h.code} p={h.desc} />
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
