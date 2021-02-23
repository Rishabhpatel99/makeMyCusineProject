import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Discover from './Components/Discover/Discover'

function App() {
  return (
    <div className="App full-height-grow">
      <Header />
      <Hero />
      <Discover />
    </div>
  );
}

export default App;
