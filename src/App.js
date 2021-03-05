import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Hero from './Components/Hero/Hero'
import Discover from './Components/Discover/Discover'
import Ingredients from './Components/Ingredients/Ingredients'

function App() {
  return (
    <div className="App full-height-grow">
      <Header />
      <Hero />
      <Discover />
      <Ingredients />
    </div>
  );
}

export default App;
