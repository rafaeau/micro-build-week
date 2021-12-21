import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyFooter from './components/MyFooter'
import MyPosts from './components/MyPosts'
import MainPosts from './MainPosts'


function App() {
  return (
    <div className="App">
      <MyPosts />
      <MainPosts />
      <MyFooter />
    </div>
  )
}

export default App
