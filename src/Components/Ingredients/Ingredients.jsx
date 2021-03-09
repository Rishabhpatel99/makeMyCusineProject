import React ,{ useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ingredientsData from "./../../api/ingredients"

const StyledButtonLink = styled.a`
    color : white;
    background-color : #92A742;
    padding : .75rem 1.5rem;
    border-radius : 1.563rem;
    text-decoration: none;
  `;

const StyledSection = styled.section`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;
  align-items: center;
`;



const StyledSelection = styled(Select)`
    margin-top: 10vh;
    margin-bottom: 30vh;
`
const animatedComponents = makeAnimated();

// colourOptions = []
const styles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '2px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20,
      }),
    container: base => ({
      ...base,
      flex: 1,
    })
  };

const getIngredients = ()=>{
    console.log('helloooo')
}

const Ingredients = () => {

    const selectedIngredients = []


    const updateIngredients = () => {
        // selectedIngredients = 
    }


  return (
    <div>
        <h1 className="title">Add ingredients</h1>
            <StyledSelection
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={ingredientsData}
            // onClick={}
            styles={styles}
            isMulti
          />
           <StyledButtonLink onClick={() => getIngredients()}>
                    Join Now
            </StyledButtonLink>
          </div>
  );
};

export default Ingredients;
