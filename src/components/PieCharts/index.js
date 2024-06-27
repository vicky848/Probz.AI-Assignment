import React from 'react'
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import'./index.css'

 const PieCharts = ({data,timeFrame}) => {
  const dataKey = "value";

  data = [
    { "timestamp": "2023-01-01T00:00:00Z", [dataKey]: 10 },
    { "timestamp": "2023-01-02T00:00:00Z", [dataKey]: 12 },
    { "timestamp": "2023-01-03T00:00:00Z", [dataKey]: 5 }
  ]
      

  


 

  return (
    <div className='pie-chart-container'>
      <h1 className='pie-chart-header'>PIE CHART</h1>
     <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        
        <Pie
        data = {data}
          cx="70%"
          cy="40%"
         
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey={dataKey}
          nameKey='timestamp'
        >
          <Cell dataKey={dataKey} timestamp={timeFrame} fill="#fecba6" />
          <Cell dataKey={dataKey} timestamp={timeFrame} fill="#b3d23f" />
          <Cell dataKey={dataKey} timestamp={timeFrame} fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>





    </div>
  )
}

export default PieCharts
