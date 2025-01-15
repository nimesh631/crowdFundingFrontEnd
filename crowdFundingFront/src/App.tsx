import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
function App() {

  return (
    <Router>
        <NavBar/>
      <Routes>
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
