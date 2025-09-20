import React from 'react'
import './css/compChart.css'
import {
  LineChart,
  Line,
  Legend,
  BarChart,
  Bar,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const ComparisonChart = ({ code }) => {
  const [selection, setSelection] = React.useState({
    country: 'IND',
    chartType: 'line'
  })
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    // fetch the data with coutry code ... + pak
    // store both data1 and Pakdata in a variable
    // then modify the data into by using the map and fillter methods
    // apply map on pakdata as we apply in chart
    // under only pick the value of other country
    // then save it to the state > data
    const fetchCountryData = async countryCode => {
      try {
        let response = await fetch(
          `https://api.worldbank.org/v2/country/${countryCode}/indicator/${code}?format=json`
        )
        let res = await response.json()
        return res[1]
          .filter(d => d.value !== null)
          .map(d => ({
            year: d.date,
            value: d.value
          }))
      } catch (error) {
        console.log(
          'error in fetching the data with code',
          code,
          ':',
          error.message
        )
      }
    }
    const fetchData = async () => {
      const [PakData, OtherData] = await Promise.all([
        fetchCountryData('PK'),
        fetchCountryData(selection.country)
      ])
      const merged = PakData.map(pakD => {
        // modifiey the data
        const other = OtherData.find(d => d.year === pakD.year)

        return {
          year: pakD.year,
          Pakistan: pakD.value,
          [selection.country]: other.value ? other.value : null
        }
      })
      setData(merged.reverse())
    }
    fetchData()
  }, [selection, code])
  const handleChange = e => {
    const { name, value } = e.target
    setSelection(pre => ({
      ...pre,
      [name]: value
    }))
  }

  return (
    <div className='container'>
      <div>
        <div className='selection'>
          <label htmlFor='country'>Select the country</label>
          <select
            name='country'
            id=''
            value={selection.country}
            onChange={handleChange}
          >
            <option value='IN'>India</option>
            <option value='BD'>Bangladesh</option>
            <option value='IR'>Iran</option>
            <option value='CN'>China</option>
            <option value='NP'>Nepal</option>
            <option value='SA'>Saudi Arabia</option>
            <option value='TR'>Turkiye</option>
          </select>
        </div>
        <div className='selection'>
          <label htmlFor='chartType'>Select the chart type</label>
          <select
            name='chartType'
            id=''
            value={selection.chartType}
            onChange={handleChange}
          >
            <option value='line'>Line Chart</option>
            <option value='bar'>Bar Chart</option>
            <option value='composed'>Composed Chart</option>
          </select>
        </div>
      </div>
      <div className='chart_countainer'>
        {(selection.chartType === 'line') && 
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 8' />
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='Pakistan'
              stroke='#8884d8'
              strokeWidth={2}
            />
            <Line
              type='monotone'
              dataKey={selection.country}
              stroke='#82ca9d'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        }
        {(selection.chartType === 'bar') && 
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 8' />
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar fill="#8884d8"
            dataKey='Pakistan'/>
            <Bar fill="#82ca9d"
            dataKey={selection.country}/>
          </BarChart>
        </ResponsiveContainer>}
        {(selection.chartType === 'composed') && 
        <ResponsiveContainer width='100%' height={400}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 8' />
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar fill="#8884d8"
            dataKey='Pakistan'/>
            <Line
              type='monotone'
              dataKey={selection.country}
              stroke='#82ca9d'
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>}
      </div>
    </div>
  )
}

export default ComparisonChart
