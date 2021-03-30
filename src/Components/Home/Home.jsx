import React from 'react'
import Slider from './Slider'
import Process from './Process'
import TopRecipe from './TopRecipe'
import Data from '../../data.json'


const Home = ()=>{
    
    return(
        <div>
        <Slider />
        <Process />
        <TopRecipe data={Data} />
        </div>
    );
}

export default Home