import './App.css';
import Weather from './Components/Weather';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
