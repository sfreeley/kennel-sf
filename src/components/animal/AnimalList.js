import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager"

const AnimalList = (props) => {
    //the initial state is an empty array
    const [animals, setAnimals] = useState([]);

   const getAnimals = () => {
        //after data comes back from API, use the setAnimals function 
        //to update state (setAnimals function gives us access to change the state once invoked)
        //once data is returned from getAll fetch call, setAnimals function invoked to
        //SAVE the animals in component's state
        //after execution of setAnimals(), component re-renders and displays animals
        //any time the state changes, re-rendering occurs 
        //what happens during re-rendering? the component function gets called again and whatever
        //HTML it returns, it will get placed on DOM
       return AnimalManager.getAll().then(animalsFromAPI => {
           setAnimals(animalsFromAPI)
       });
   };

   const deleteAnimal = id => {
       AnimalManager.delete(id)
       .then(() => {
           AnimalManager.getAll().then((animalsFromAPI) => {
                setAnimals(animalsFromAPI)
           });
       });
   };

   //when state changes what should be done? it will invoke getAnimals function
   //which will get all the animals from the API
   //empty array tells when to call the function (ie at first render of the component)
   //only need to be called once because can save the data after first render and use this saved data when needed
   useEffect(() => {
       getAnimals();
   }, []);

   //use map() to iterate through the animals array and show list of animals
   //passing the deleteAnimal function to child component (which gives it the ability to invoke function that belongs to parent)
   //REMEMBER: component where state lives is only place state can change -- children cannot change state
   return(
       <>
       <section className="section-content">
           <button type="button"
           className="btn"
           onClick={() => {props.history.push("/animals/new")}}>
               Admit Animal
           </button>
       </section>
       <div className="container-cards">
           {animals.map(animal => <AnimalCard 
                                    key={animal.id} 
                                    animal={animal}
                                    deleteAnimal={deleteAnimal} />)}
       </div>
       </>
   );
};

export default AnimalList;