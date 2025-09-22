import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import './css/chart.css'
const Chart = ({ code }) => {
  const [Data, setData] = React.useState([])
  const [Chart,setChart] = React.useState({
    lineChart: true,
    barChart: false
  })


  React.useEffect(() => {
    
    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://api.worldbank.org/v2/country/PK/indicator/${code}?format=json`
        )
        let res = await response.json()
        const formattedData = res[1]
          .filter(d => d.value !== null) // remove null values
          .map(d => ({
            year: d.date,
            value: d.value
          }))
          .reverse() // reverse to ascending years

        setData(formattedData)
      } catch (error) {
        console.log(
          'error in fetching the data with code',
          code,
          ':',
          error.message
        )
      }
    }
    fetchData()
  }, [code])

 const formatNumber = (num)=>{
  if (num === null || num === undefined) return "";

  const absNum = Math.abs(num);

  if (absNum >= 1.0e12) {
    return (num / 1.0e12).toFixed(2) + "T"; // trillion
  } else if (absNum >= 1.0e9) {
    return (num / 1.0e9).toFixed(2) + "B"; // billion
  } else if (absNum >= 1.0e6) {
    return (num / 1.0e6).toFixed(2) + "M"; // million
  } else if (absNum >= 1.0e3) {
    return (num / 1.0e3).toFixed(2) + "K"; // thousand
  } else {
    return num.toFixed(2); // small numbers
  }
 }

  const handleChange =(e)=>{
       const {name, checked: isChecked} = e.target


        setChart((pre)=>({
          ...pre,
          [name]: isChecked
        }))
        // setChart(.)
        
  }

  return (
    <div className='chart_container'>
      <div className='buttons'>  
        <label htmlFor='lineChart'>
          <input type='checkbox' checked={Chart.lineChart} name='lineChart' id='lineChart' onChange={handleChange} />
          Line Chart</label>
        
        <label htmlFor='barChart'>
          <input type='checkbox'checked={Chart.barChart} name='barChart' id='barChart' onChange={handleChange}/>
          Bar Chart</label>
      </div>
      {Chart.lineChart && <ResponsiveContainer width='100%' height={400}>
        <LineChart data={Data}>
          <CartesianGrid strokeDasharray='5 5' opacity={0.5} />
          <XAxis dataKey='year' />
          <YAxis tickFormatter={formatNumber}/>
          <Tooltip className='tooltip' formatter={(value) => formatNumber(value)}/>
          <Line
            type='monotone'
            dataKey='value'
            stroke='#2f373eff'
            strokeWidth={1}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>}
      { Chart.barChart && <ResponsiveContainer width='100%' height={400}>
        <BarChart data={Data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis tickFormatter={formatNumber}/>
          <Tooltip className='tooltip' formatter={(value) => formatNumber(value)}/>
          <Bar dataKey='value' fill='#4454a1ff' />
        </BarChart>
      </ResponsiveContainer>}
      {/* {Data.map((data, index)=>{
      return (

          <div className="container" key={index}>
            {data.date}
            </div>
        
      )
     })} */}
    </div>
  )
}

export default Chart
