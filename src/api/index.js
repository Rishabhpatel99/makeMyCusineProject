import axios from 'axios';

const API_KEY = '6a4eddeba91f46dc9437da846d105563';
const BACKUP_API_KEY = 'dbc867e302f1435fbc9ad2fb1978d71a';
const BACKUP_BACKUP_API_KEY = 'd251247679154d399a18557e5e08c473';

let url = `https://api.spoonacular.com/recipes/findByIngredients?&number=12&apiKey=${API_KEY}&limitLicense=true` 


const getIngredientsFromSelectedOptions = (selectedOptions) => {
    const options = [];
    if(selectedOptions.length && 
    selectedOptions.map(({value}) => {
        return options.push(value)
    }))
    return options.toString();
}

export const fetchRecipeData = async (ingredients) =>{
    const ingredientsList = await getIngredientsFromSelectedOptions(ingredients);
    const apiUrl = `${url}&ingredients=${ingredientsList}`
    try {
        const { data } = await axios.get(apiUrl);
        return (data.length>0 ? data : [])
    }catch(error){
        console.error(error);
    }
}

export const fetchRecipeDataByid = async (id) => {
    const getRecipeInfo = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
    try {
        const  {data}  = await axios.get(getRecipeInfo);
        return (data ? data : {})
    }catch(error){
        console.error(error);
    }
}

export const getRecipeSteps = async (id) => {
    const getRecipeStepsUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
    try {
        const  {data}  = await axios.get(getRecipeStepsUrl);
        return (data[0].steps ? data[0].steps : [])
    }catch(error){
        console.error(error);
    }
}