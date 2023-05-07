//import{BrowserRouter ,Routes,Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home'
import Hotel from './pages/home/hotel/Hotel';
import List  from './pages/home/list/List';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path='/List/:id' element={<Hotel />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App; 