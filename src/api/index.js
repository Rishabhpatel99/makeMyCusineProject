import axios from 'axios';

const API_KEY = '6a4eddeba91f46dc9437da846d105563';
const BACKUP_API_KEY = 'dbc867e302f1435fbc9ad2fb1978d71a';

let url = `https://api.spoonacular.com/recipes/findByIngredients?&number=12&apiKey=${BACKUP_API_KEY}&limitLicense=true` 


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
    const getRecipeInfo = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${BACKUP_API_KEY}`
    console.log(getRecipeInfo)
    try {
        const  {data}  = await axios.get(getRecipeInfo);
        console.log(data)
        return (data ? data : {})
    }catch(error){
        console.error(error);
    }
}