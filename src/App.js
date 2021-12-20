import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar categories={[`Business`, `Entertainment`, `General`, `Health`, `Science`, `Sports`,` Technology`]}/>
    </div>
  )
}
export default App
