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
    const fetchCountryData = async (countryCode) => {
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
      
      const merged = await PakData.map(async (pakD) => {
        // modifiey the data
        const other = await OtherData.find(d => d.year === pakD.year)
        
        return {
          year: pakD.year,
          Pakistan: pakD.value,
          [selection.country]: other ? other.value : null
        }
      })
      // console.log(merged.reverse()); here merged is a array of promises
      // so we have to wait for all the promises to resolve
      // before setting the state
      // we can use Promise.all to wait for all the promises to resolve
      const resolvedData = await Promise.all(merged)
      setData(resolvedData.reverse())
    }

    fetchData()
  }, [selection, code])

  const formatNumber = num => {
    if (num === null || num === undefined) return ''

    const absNum = Math.abs(num)

    if (absNum >= 1.0e12) {
      return (num / 1.0e12).toFixed(2) + 'T' // trillion
    } else if (absNum >= 1.0e9) {
      return (num / 1.0e9).toFixed(2) + 'B' // billion
    } else if (absNum >= 1.0e6) {
      return (num / 1.0e6).toFixed(2) + 'M' // million
    } else if (absNum >= 1.0e3) {
      return (num / 1.0e3).toFixed(2) + 'K' // thousand
    } else {
      return num.toFixed(2) // small numbers
    }
  }

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
        {data.length === 0 && <div className='no_data'>No Data Found</div>}
        {data.length !== 0 && selection.chartType === 'line' && (
          <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray='3 10'
                opacity={0.9}
                stroke='var(--text-secondary)'
              />
              <XAxis dataKey='year' />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={value => formatNumber(value)} />
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
        )}
        {data.length !== 0 && selection.chartType === 'bar' && (
          <ResponsiveContainer width='100%' height={400}>
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray='3 10'
                opacity={0.4}
                stroke='var(--text-secondary)'
              />
              <XAxis dataKey='year' />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={value => formatNumber(value)} />
              <Legend />
              <Bar fill='#8884d8' dataKey='Pakistan' />
              <Bar fill='#82ca9d' dataKey={selection.country} />
            </BarChart>
          </ResponsiveContainer>
        )}
        {data.length !== 0 && selection.chartType === 'composed' && (
          <ResponsiveContainer width='100%' height={400}>
            <ComposedChart data={data}>
              <CartesianGrid
                strokeDasharray='3 10'
                opacity={0.4}
                stroke='var(--text-secondary)'
              />
              <XAxis dataKey='year' />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={value => formatNumber(value)} />
              <Legend />
              <Bar fill='#8884d8' dataKey='Pakistan' />
              <Line
                type='monotone'
                dataKey={selection.country}
                stroke='#82ca9d'
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default ComparisonChart
