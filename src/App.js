import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

import Slider from './Components/Home/Slider'
import Process from './Components/Home/Process'
import TopRecipe from './Components/Home/TopRecipe'

import Data from './data.json'
import Data1 from './data1.json'

import Home from './Components/Home/Home'

import RecipeSingle from './Components/Recipe/RecipeSingle'
import RecipeSearch from './Components/Recipe/RecipeSearch'
import Hero from './Components/Hero/Hero'
import Discover from './Components/Discover/Discover'
import Ingredients from './Components/Ingredients/Ingredients'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {Route, Switch, useHistory } from "react-router-dom"


import React,{useState,useEffect} from "react";
import fire from './firebase/fire'


function App() {


const [user,setUser] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [emailError,setEmailError] = useState("");
const [passwordError,setPasswordError] = useState("");
const [hasAccount,setHasAccount] = useState(false);
const history  = useHistory();


const clearInput = ()=>{
setEmail("");
setPassword("");
}

const clearError = ()=>{
setEmailError("");
setPasswordError("");
}


const handleLogin = ()=>{
  fire
  .auth()
  .signInWithEmailAndPassword(email,password).then(({user}) => {
    if(user && user.uid){
      localStorage.setItem('userId' , user.uid)
        history.push('/search')
    }
  })
  .catch((err)=>{
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;
        default:
  }
  
  });
}



const handleSignup = ()=>{
fire
.auth()
.createUserWithEmailAndPassword(email,password)
.catch((err)=>{
switch(err.code){
case "auth/email-already-use":
case "auth/Invalid-email":

setEmailError(err.message);
break;
case "auth/weak -password":
setPasswordError(err.message);
break;
default:
}
});
}

const handleLogout = ()=>{
fire.auth().signOut();
}

const authListener = ()=>{

fire.auth().onAuthStateChanged((user)=>{
if(user){
clearInput();
setUser(user);
localStorage.setItem("userId",user.uid);
// history.push("/");
}else{
setUser("");
}
})
}

useEffect(()=>{
  authListener();
},[]);



return (
  
  
<div className="wrapper">
  <div className="Loader"></div>
  <Header />
  <div style={{minHeight:"700px"}}>
  {/*
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/search" component={RecipeSearch} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/recipeSingle" component={Register} />

  </Switch> */}




  {/* home page */}
  {/*
  <Slider /> */}
  {/*
  <Process /> */}
  {/*
  <TopRecipe data={Data} /> */}
  {/* home page end */}

  {/*
  <RecipeSingle data={Data1} /> */}

<div>
 <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/search" component={RecipeSearch} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/login" render={(props) => <Login 
                  email={email} 
                  setEmail={setEmail} 
                  password={password} 
                  setPassword={setPassword} 
                  handleLogin={handleLogin}
                  handleSignup={handleSignup} 
                  hasAccount={hasAccount} 
                  setHasAccount={setHasAccount} 
                  emailError={emailError}
                  passwordError={passwordError} {...props}/>} />
                <Route path="/register" component={Register}/>
                <Route path="/recipe" render={(props) => <RecipeSingle {...props}/>}/>
                
      </Switch>
 </div>


{console.log(user)}

{/* <p>user login</p> */}

 {/* <Login 
  email={email} 
  setEmail={setEmail} 
  password={password} 
  setPassword={setPassword} 
  handleLogin={handleLogin}
  handleSignup={handleSignup} 
  hasAccount={hasAccount} 
  setHasAccount={setHasAccount} 
  emailError={emailError}
  passwordError={passwordError} /> */}
  

  {/*
  <RecipeSearch /> */}
</div>
  <Footer />
</div>
);
}

export default App;