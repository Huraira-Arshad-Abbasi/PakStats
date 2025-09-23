import React from 'react'
import Template from './Template'
const Tech = () => {


    const headings = [
    {
    title: 'Research and development expenditure (% of GDP)',
    code: 'GB.XPD.RSDV.GD.ZS',
    desc: "Shows the percentage of GDP spent on research and development (R&D). Indicates investment in innovation and scientific progress."
  },
  {
    title: 'Researchers in R&D (per million people)',
    code: 'SP.POP.SCIE.RD.P6',
    desc: "The number of people engaged in research and development per million population. Reflects the capacity for scientific research."
  },
  {
    title: 'Scientific and technical journal articles',
    code: 'IP.JRN.ARTC.SC',
    desc: "The number of scientific and technical journal articles published. Measures the output of research and innovation."
  },
  {
    title: 'High-technology exports (% of manufactured exports)',
    code: 'TX.VAL.TECH.MF.ZS',
    desc: "The share of manufactured exports that are high-tech products such as aerospace, computers, pharmaceuticals, and electronics. Shows technology advancement in exports."
  },
  {
    title: 'Individuals using the Internet (% of population)',
    code: 'IT.NET.USER.ZS',
    desc: "The percentage of Pakistan's population using the internet. Indicates digital connectivity and access to technology."
  },
  {
    title: 'Mobile cellular subscriptions (per 100 people)',
    code: 'IT.CEL.SETS.P2',
    desc: "Shows the number of mobile cellular subscriptions per 100 people. Reflects access to mobile communication technology."
  },
  {
    title: 'Fixed broadband subscriptions (per 100 people)',
    code: 'IT.NET.BBND.P2',
    desc: "Represents the number of fixed broadband internet subscriptions per 100 people. Indicates internet infrastructure and speed of connectivity."
  }]

  return (
    <div>
      <Template headings={headings} icon="🔬 " section="Science & Technology" WhyItMatter="Science and technology drive innovation, boost productivity, and improve
    competitiveness in the global market. For Pakistan, investment in research,
    digital infrastructure, and higher education in STEM fields can transform
    industries and create new opportunities. By tracking research spending,
    patent activity, and technology adoption, we can see how Pakistan is
    preparing for the future and adapting to the digital age." />
    </div>
  )
}

export default Tech
