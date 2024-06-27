import React from 'react'
import { BarChart,Bar,XAxis,YAxis,Legend, ResponsiveContainer, } from "recharts"
import './index.css'

 const BarCharts = ({data,timeFrame}) => {
  const dataKey = timeFrame

   data = [
    { "timestamp": "2023-01-01T00:00:00Z", [dataKey]: 10 },
    { "timestamp": "2023-01-02T00:00:00Z", [dataKey]: 12 },
    { "timestamp": "2023-01-03T00:00:00Z", [dataKey]: 5 }
  ]
      



const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toFixed(1)}k`
    }
    return number.toString()
  }


  return (
    <div className='bar-chart-container'>
      <h1 className='bar-chart-header'>BAR CHART</h1>
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
       
      >
        <XAxis
          dataKey="timestamp"
        />
        <YAxis
          tickFormatter={DataFormatter}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey={dataKey} timestamp={timeFrame} fill="#1f77b4" barSize="20%" />
        <Bar dataKey={dataKey} timestamp={timeFrame} fill="#fd7f0e" barSize="20%" />
        <Bar dataKey={dataKey} timestamp={timeFrame} fill="#BE258F" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>

    </div>
  )
}

export default BarCharts