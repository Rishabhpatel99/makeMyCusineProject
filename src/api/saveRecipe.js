import fire from "../firebase/fire";

var database = fire.firestore();


export const saveRecipe = async (data,userId) => {
    var UsersRef = database.collection("users").doc(userId);
    const prevData = await UsersRef.get();
    

    //if user is new 
    if(!prevData.exists){
        return addDocument({ id: [data.id] }, UsersRef);
    }

    //else user has already saved recipes
    const { id }  = prevData.data()

    //check if recipe is not in the saved recipes list
    if(!id.includes(data.id)){
        id.push(data.id);
        return addDocument({ id: id }, UsersRef);    
    }
    return true;
}

const addDocument = (data, ref) => {
    ref
        .set(data)
        .then(() => {
            return true;
        })
        .catch((error) => {
            return false;
        });
};



export const getSavedRecipesById = async (userId) => {
    var UsersRef = database.collection("users").doc(userId);
    const data = await UsersRef.get();
    

    //if user is new 
    if(!data.exists){
        return false;
    }
    const { id }  = data.data();
    return id;
}