import React from 'react'
import Template from './Template'
const Poverty = () => {

const headings = [
    {
    title: 'Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)',
    code: 'SI.POV.DDAY',
    desc: "Shows the percentage of people in Pakistan living on less than $2.15 per day. This represents extreme poverty."
  },
  {
    title: 'Poverty headcount ratio at $3.65 a day (2017 PPP) (% of population)',
    code: 'SI.POV.LMIC',
    desc: "Shows the share of people living below $3.65/day, a broader measure of poverty for lower-middle-income countries like Pakistan."
  },
  {
    title: 'Poverty headcount ratio at $6.85 a day (2017 PPP) (% of population)',
    code: 'SI.POV.UMIC',
    desc: "Shows the percentage of people living below $6.85/day. Highlights vulnerability even among those above extreme poverty."
  },
  {
    title: 'GINI index (World Bank estimate)',
    code: 'SI.POV.GINI',
    desc: "Measures income inequality on a scale of 0 to 100. Higher values mean greater inequality between rich and poor."
  },
  {
    title: 'Income share held by lowest 20% (% of population)',
    code: 'SI.DST.FRST.20',
    desc: "Represents the percentage of total income earned by the poorest 20% of the population. A measure of inclusiveness."
  },
  {
    title: 'Income share held by highest 20% (% of population)',
    code: 'SI.DST.05TH.20',
    desc: "Shows the percentage of total income earned by the richest 20% of the population. Helps compare rich vs poor."
  }
]

  return (
    <div>
      <Template headings={headings} icon="🤝 " section="Poverty in Pakistan" WhyItMatter="Poverty affects millions of Pakistanis, influencing access to food,
    healthcare, and education. Reducing poverty not only improves individual
    lives but also strengthens the nation’s overall stability and productivity.
    By examining poverty headcount ratios, income inequality, and social
    protection coverage, we can better understand the challenges faced by
    vulnerable populations and measure progress toward a more inclusive society." />
    </div>
  )
}

export default Poverty
