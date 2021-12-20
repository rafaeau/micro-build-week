import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyFooter from './components/MyFooter'
import MainPosts from './MainPosts'
import NewsList from './components/NewsList'

function App() {
  return (
    <div className="App">
      <NewsList />
      <MainPosts />
      <MyFooter />
    </div>
  )
}

export default App
