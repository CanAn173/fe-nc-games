import logo from './Northcoders.jpeg';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import {ReviewList} from './component/ReviewList';
import {ReviewCards} from './component/ReviewCard';
import {CommentCards} from './component/CommentCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />}/>
        <Route path="/reviews/:review_id" element={<ReviewCards />}/>
        <Route path="/reviews/:review_id/comments" element={<CommentCards />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
