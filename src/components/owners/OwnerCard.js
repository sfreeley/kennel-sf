import React from "react";

const OwnerCard = () => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require("./dog-friend.jpg")} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-ownerName">Otto</span>
            </h3>
            <p>Phone: (253) 555-1111</p>
        </div>
    </div>

    );
}
export default OwnerCard;