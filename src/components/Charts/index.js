import { Component } from 'react'
import BarCharts from '../BarCharts'
import PieCharts from '../PieCharts'
import TimeframeSelector from '../TimeframeSelector'

import './index.css'




 class Chart extends Component {

 state = {
    timeFrame:'daily',
    currentChart: 'Bar',
    data: [], 

 }

handlerTimeFrame = (timeFrame) => {
  this.setState({
   timeFrame,
    
  })
   
    
}

handlerSelector = (newChart) => {
  this.setState({
    currentChart:newChart
  })
}


  render() {
   
    const {timeFrame,currentChart, data} = this.state
  
  return(
     
    <div className='chart-container'>
        <h1 className='header'>CHART APP</h1>
        <div className='btn-container'>
        <select className='selector' value={currentChart} onChange={(event)=> this.handlerSelector(event.target.value)}>
          <option value="Bar">Bar Chart</option>
          <option value="Pie">Pie Chart</option>
        </select>
        <TimeframeSelector onSelect= {this.handlerTimeFrame}/> 
        </div>

       

      <div className='chart-card'>

        {
          currentChart === 'Pie'? 
          ( <PieCharts data={data}  timeFrame= {timeFrame}/> ) :(
            
            <BarCharts data= {data}  timeFrame= {timeFrame}/>
            )
        }
      
     
      
      
      </div>
    
</div>
)
     
  }
 }

export default Chart