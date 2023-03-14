import logo from './Northcoders.jpeg';
import Header from './component/Header'
import {ReviewList} from './component/ReviewList'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <ReviewList />
      </header>
    </div>
  );
}

export default App;
