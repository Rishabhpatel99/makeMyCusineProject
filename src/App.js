import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Hero from './Components/Hero/Hero'
import Discover from './Components/Discover/Discover'
import Ingredients from './Components/Ingredients/Ingredients'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
  return (
    <div className="App full-height-grow">
      <Header />
      <Hero />
      <Discover />
      <Ingredients />
      <Login />
      <Register />
    </div>
  );
}

export default App;
