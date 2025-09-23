import React from 'react'
// import './css/economy.css'
import Template from './Template'
const Economy = () => {

  const WhyItMatter = "A growing economy creates jobs, increases incomes, and improves living standards for ordinary citizens. Pakistan’s economic growth is shaped by investments, productivity, and trade. By monitoring GDP growth, per capita income, and sectoral contributions, we can understand whether the economy is expanding in a healthy and inclusive way, and how it compares to other developing nations."
   const headings = [
    {
    title: 'GDP (current US$)',
    code: 'NY.GDP.MKTP.CD',
    desc: "The total value of all goods and services produced in Pakistan in current US dollars. Reflects the overall size of the economy."
  },
  {
    title: 'GDP per capita (current US$)',
    code: 'NY.GDP.PCAP.CD',
    desc: "Average economic output per person in current US dollars. Helps compare living standards across time or countries."
  },
  {
    title: 'GDP growth (annual %)',
    code: 'NY.GDP.MKTP.KD.ZG',
    desc: "The annual percentage growth rate of GDP at constant prices. Shows whether the economy is expanding or contracting."
  },
  {
    title: 'Inflation, consumer prices (annual %)',
    code: 'FP.CPI.TOTL.ZG',
    desc: "Measures the annual percentage change in the cost of a typical basket of goods and services. Reflects the rise in living costs."
  },
  {
    title: 'Unemployment, total (% of total labor force)',
    code: 'SL.UEM.TOTL.ZS',
    desc: "Represents the share of the labor force that is without work but available for and seeking employment."
  },
  {
    title: 'Gross fixed capital formation (% of GDP)',
    code: 'NE.GDI.FTOT.ZS',
    desc: "Shows investment in fixed assets such as buildings, machinery, and infrastructure, as a share of GDP. Indicates economic development."
  },
  {
    title: 'Exports of goods and services (% of GDP)',
    code: 'NE.EXP.GNFS.ZS',
    desc: "The value of goods and services Pakistan sells abroad as a share of GDP. Reflects integration into the global economy."
  },
  {
    title: 'Imports of goods and services (% of GDP)',
    code: 'NE.IMP.GNFS.ZS',
    desc: "The value of goods and services Pakistan buys from abroad as a share of GDP. High imports can pressure foreign reserves."
  },
  {
    title: 'Current account balance (% of GDP)',
    code: 'BN.CAB.XOKA.GD.ZS',
    desc: "Shows the balance of trade, net income, and transfers as a percentage of GDP. Indicates whether the country is a net borrower or lender to the world."
  }
]


  return (
    <div className='economy'>
      {/* <h2>📈 Economy & Growth</h2>
      <article>
        <h3>📈  Why It Matters</h3>
        <p>
          A growing economy creates jobs, increases incomes, and improves living
          standards for ordinary citizens. Pakistan’s economic growth is shaped
          by investments, productivity, and trade. By monitoring GDP growth, per
          capita income, and sectoral contributions, we can understand whether
          the economy is expanding in a healthy and inclusive way, and how it
          compares to other developing nations.
        </p>
      </article> */}
      <Template headings={headings} icon="📈 " section="Economy" WhyItMatter={WhyItMatter} />
    </div>
  )
}

export default Economy
