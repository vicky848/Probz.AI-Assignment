
import './App.css';
import Chart from './components/Charts';
const data = [
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 }
]


function App() {
  return (
    <div className="App">
    <Chart data={data} />
   
    </div>
  );
}

export default App;
