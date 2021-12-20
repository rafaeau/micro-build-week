import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar categories={[`business`, `entertainment`, `general`, `health`, `science`, `sports`,` technology`]}/>
    </div>
  )
}
export default App
