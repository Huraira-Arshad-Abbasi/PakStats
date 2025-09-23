import React from 'react'
import Chart from './Chart'
import './css/details.css'
import ComparisonChart from './ComparisonChart'

const Details = ({section, code, p }) => {
  const [compare, setCompare] = React.useState(false)

  const handleClick = () => {
    setCompare(!compare)
  }
  return (
    <div className='detail_container'>
      <p>{p}</p>
      <Chart code={code} />
      {
        section !== "Education" && <div className='compare_container'>
        <h6 onClick={handleClick} style={{color:compare ? "":"var( --text-secondary)", borderBottom: compare ? "1px solid var(--text)":""}}>
          <span style={{display: 'inline-block',transition: "transform 0.3s ease",transform: (compare== true) ? 'rotate(90deg)':'rotate(0deg)'}}
          >►</span> compare with other contries:
        </h6>
        {compare && (
          <div className="compChart" >
              <ComparisonChart code ={code}/>
          </div>
        )}
      </div>
      }
      
    </div>
  )
}

export default Details
