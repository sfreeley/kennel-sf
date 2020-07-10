import React from "react";
import "./Animal.css";

//this is the component that is responsible for displaying an animal
const AnimalCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require(`./${props.animal.picture}`)} alt="My Dog" />   
                </picture>
                <h3>
                    Name: <span className="card-petname">
                        {props.animal.name}
                    </span>
                </h3>
                <p>Breed: {props.animal.breed} </p>
            </div>
        </div>
    );
};

export default AnimalCard; 