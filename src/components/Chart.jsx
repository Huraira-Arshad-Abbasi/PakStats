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
          <YAxis />
          <Tooltip className='tooltip' />
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
          <YAxis />
          <Tooltip />
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
