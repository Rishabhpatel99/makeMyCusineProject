import axios from 'axios';

const API_KEY = '6a4eddeba91f46dc9437da846d105563';


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
        console.log(data)
        return (data.length>0 ? data : [])
        
    }catch(error){
        console.error(error);
    }
}