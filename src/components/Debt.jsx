import React from 'react'
import Template from './Template'
const Debt = () => {

    const headings = [
    {
    title: 'Total external debt stocks (current US$)',
    code: 'DT.DOD.DECT.CD',
    desc: "Represents the total external debt owed by Pakistan to foreign creditors in current US dollars. Indicates the overall debt burden."
  },
  {
    title: 'External debt stocks (% of GNI)',
    code: 'DT.DOD.DECT.GN.ZS',
    desc: "Shows Pakistan's total external debt as a percentage of Gross National Income (GNI). Highlights debt relative to the size of the economy."
  },
  {
    title: 'External debt stocks (% of exports of goods, services and primary income)',
    code: 'DT.DOD.DECT.EX.ZS',
    desc: "Measures external debt compared to Pakistan's total exports. A high value suggests difficulty in repaying debt from export earnings."
  },
  {
    title: 'Total debt service (% of exports of goods, services and primary income)',
    code: 'DT.TDS.DECT.EX.ZS',
    desc: "Shows how much of export earnings are used to pay back debt (principal + interest). Reflects repayment pressure."
  },
  {
    title: 'Short-term external debt (% of total reserves)',
    code: 'DT.DOD.DSTC.IR.ZS',
    desc: "Measures the share of short-term external debt relative to Pakistan's foreign reserves. A higher ratio indicates higher financial risk."
  },
  {
    title: 'External debt service (TDS, current US$)',
    code: 'DT.TDS.DECT.CD',
    desc: "Represents the total annual amount Pakistan pays to service external debt, in current US dollars. Includes principal and interest."
  }
]

  return (
    <div>
      <Template headings={headings} icon="💰 " section="External Debt" WhyItMatter="External debt reflects how much Pakistan owes to international lenders,
    including foreign governments and financial institutions. While borrowing
    can support development projects and stabilize the economy, high levels of
    debt may burden future generations and limit financial independence.
    Tracking debt levels, repayment trends, and debt-to-GDP ratios reveals
    whether Pakistan is on a sustainable financial path or facing potential
    risks." />
    </div>
  )
}

export default Debt
