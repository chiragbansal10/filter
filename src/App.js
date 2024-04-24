import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchCoursePage from './components/SearchCoursePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage';
function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/search" element={ <SearchPage />} />
       

        {/* Add routes for other pages */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
