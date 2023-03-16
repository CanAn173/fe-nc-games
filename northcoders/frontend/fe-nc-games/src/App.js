import logo from './Northcoders.jpeg';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header'
import {ReviewList} from './component/ReviewList'
import {ReviewCards} from './component/ReviewCard'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Routes>
        <Route path="/reviews" element={<ReviewList />}/>
        <Route path="/reviews/:review_id" element={<ReviewCards />}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
