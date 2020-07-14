import React from "react";
import { firstLetterCase } from "../../modules/helpers";

const OwnerCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require(`./${props.owner.picture}`)} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-ownerName"> 
                    {firstLetterCase(props.owner.name)}
                </span>
            </h3>
            <p>Phone: {props.owner.phone} </p>
            <button type="button"
                onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
                    Edit
                </button>
            <button type="button" onClick={() => {props.deleteOwner(props.owner.id)}}>Remove</button>
        </div>
    </div>

    );
}
export default OwnerCard;