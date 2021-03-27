import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

import Slider from './Components/Home/Slider'
import Process from './Components/Home/Process'
import TopRecipe  from './Components/Home/TopRecipe'

import Data from './data.json'
import Data1 from './data1.json'


import RecipeSingle from './Components/Recipe/RecipeSingle'
import Hero from './Components/Hero/Hero'
import Discover from './Components/Discover/Discover'
import Ingredients from './Components/Ingredients/Ingredients'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {Route, Switch } from "react-router-dom"

function App() {
  return (
    // <div className="App full-height-grow">
    //   <Header />
    //   <Switch>
    //             <Route path="/" component={Hero} exact />
    //             <Route path="/discover" component={Discover} />
    //             <Route path="/login" component={Login} />
    //             <Route path="/findmyrecipe" component={Ingredients}/>
    //             <Route path="/join" component={Register} />
    //   </Switch>
    //   <Footer />
    // </div>
    <div className="wrapper"> 
      <div className="Loader"></div>
    <Header />

    {/* home page */}
    {/* <Slider />
    <Process />
    <TopRecipe data = {Data}/> */}
{/* home page end */}

<RecipeSingle data = {Data1} />
    <Footer />
    </div>
  );
}

export default App;
