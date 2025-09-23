import React from 'react'
import Template from './Template'
const Education = () => {


  const headings = [
    {
      title: 'School enrollment, primary (% gross)',
      code: 'SE.PRM.ENRR',
      desc: 'Shows the total enrollment in primary education as a percentage of the population of official primary education age. High values suggest broad access to primary education.'
    },
    {
      title: 'School enrollment, secondary (% gross)',
      code: 'SE.SEC.ENRR',
      desc: 'Represents the enrollment in secondary education regardless of age, expressed as a percentage of the population of official secondary school age. Indicates progression beyond primary education.'
    },
    {
      title: 'School enrollment, tertiary (% gross)',
      code: 'SE.TER.ENRR',
      desc: 'Shows how many students are enrolled in higher education (universities and colleges) compared to the population of official tertiary school age. Highlights access to advanced education.'
    },
    {
      title: 'Out-of-school children of primary school age (number)',
      code: 'SE.PRM.UNER',
      desc: 'Reflects the number of children of primary school age who are not enrolled in school. A critical measure of access and inclusivity in education.'
    },
    {
      title: 'Pupil-teacher ratio, primary',
      code: 'SE.PRM.ENRL.TC.ZS',
      desc: 'Indicates the average number of pupils per teacher in primary schools. Lower ratios suggest better individual attention and teaching quality.'
    },
    {
      title: 'Government expenditure on education (% of GDP)',
      code: 'SE.XPD.TOTL.GD.ZS',
      desc: "Shows how much of Pakistan's GDP is spent on education. Higher spending can indicate stronger commitment to improving the education system."
    },
    {
      title: 'Learning-adjusted years of schooling (LAYS)',
      code: 'HD.HCI.LAYS',
      desc: 'Measures the number of years of schooling adjusted for quality of learning. Helps to understand not just how long children go to school, but how much they actually learn.'
    },
    {
      title: 'Literacy rate, youth (% ages 15–24)',
      code: 'SE.ADT.1524.LT.ZS',
      desc: 'The percentage of people ages 15–24 who can read and write. Reflects recent progress in education among young Pakistanis.'
    },
    {
      title: 'Literacy rate, adult (% ages 15 and above)',
      code: 'SE.ADT.LITR.ZS',
      desc: 'Shows the percentage of the adult population who can read and write. Indicates the overall educational attainment of society.'
    },
    {
      title: 'Gender parity index in school enrollment (primary)',
      code: 'SE.ENR.PRIM.FM.ZS',
      desc: 'Compares the enrollment rate of girls to boys in primary school. A value of 1 means gender equality in enrollment.'
    },
    {
      title: 'Primary completion rate (% of relevant age group)',
      code: 'SE.PRM.CMPT.ZS',
      desc: 'Shows the percentage of children completing the last grade of primary school. Indicates how many students finish the first stage of education.'
    },
    {
      title: 'Secondary completion rate (% of relevant age group)',
      code: 'SE.SEC.CMPT.LO.ZS',
      desc: 'Represents the percentage of students completing the last grade of secondary education. Shows how many finish matriculation/intermediate.'
    },
    {
      title: 'Transition rate from primary to secondary (% of cohort)',
      code: 'SE.SEC.PROG.ZS',
      desc: 'Measures the percentage of students advancing from the last grade of primary education to the first grade of secondary education. Indicates continuity in schooling.'
    },
    {
      title:
        'Youth not in employment, education, or training (NEET, % of youth)',
      code: 'SL.UEM.NEET.ZS',
      desc: 'The share of young people who are not in school, not working, and not in training. Highlights challenges in connecting education with the job market.'
    },
    {
      title:
        'Educational attainment, at least completed lower secondary (% of population 25+)',
      code: 'SE.SEC.CUAT.LO.ZS',
      desc: 'Shows the share of adults aged 25 and above who have completed at least lower secondary education. Reflects long-term educational development in society.'
    }
  ]

  return (
    <div>
      <Template headings={headings} icon="🎓 " section="Education" WhyItMatter="Education is the foundation of national progress, shaping the future workforce and driving innovation. In Pakistan, access to quality education determines how prepared young people are for global challenges and opportunities. Tracking literacy rates, enrollment levels, and graduate numbers provides insights into how well the country is equipping its citizens with the skills needed for sustainable growth and social development." />
    </div>
    // <section className='education'>
    //   <div className="img"></div>
    //   <h2>🎓 Education</h2>
    //   <article>
    //     <h3>🎓 Why It Matters</h3>
    //     <p>
    //       Education is the foundation of national progress, shaping the future
    //       workforce and driving innovation. In Pakistan, access to quality
    //       education determines how prepared young people are for global
    //       challenges and opportunities. Tracking literacy rates, enrollment
    //       levels, and graduate numbers provides insights into how well the
    //       country is equipping its citizens with the skills needed for
    //       sustainable growth and social development.
    //     </p>
    //   </article>
    //   <article className='indicators'>
    //     <h3>📊 Key Trade Indicators</h3>
    //     <div>
    //       <ul>
    //         {headings.map((h, index) => {
    //           return(
    //             <li key={index}>
    //             <h4
    //               onClick={() => handleHeadingClick(index)}
    //               style={{
    //                 textDecoration: open[index] ? 'underline' : 'none'
    //               }}
    //             >
    //               <span
    //                   style={{
    //                     transition: "transform 0.3s ease",
    //                     transform: open[index]
    //                       ? 'rotate(90deg)'
    //                       : 'rotate(0deg)'
    //                   }}
    //                 >
    //                   ►
    //                 </span>
    //               {h.title}
    //             </h4>
    //             <div>
    //               {open[index] && <Details code={h.code} p={h.desc} />}
    //             </div>
    //           </li>
    //           )
    //         })}
    //       </ul>
    //     </div>
    //   </article>
    //   <article></article>
    // </section>
  )
}

export default Education
