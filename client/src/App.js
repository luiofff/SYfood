import './App.css';
import MainPage from './pages/MainPage/MainPage';
import ResultPage from './pages/ResultPage/ResultPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/recipes' element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;