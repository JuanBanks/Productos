import Header from './Components/Header/Header'
import HomePage from './Views/HomePage/HomePage'
import DetallePage from './Views/DetallePage/DetallePage'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {


  return (
    <div className='App' >
      <Router>
      < Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Detalle/:id' element={<DetallePage />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
