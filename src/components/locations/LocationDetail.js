// import React, { useState, useEffect } from "react";
// import LocationManager from "../../modules/LocationManager";
// import { firstLetterCase } from "../../modules/helpers";
// // import "./LocationDetail.css"

// const LocationDetail = (props) => {
//     const [location, setLocation] = useState({name: "", address: "", hours:"", picture:""});
//     //boolean value indicating whether component is loading
//     //true disables button (by putting isLoading in component's state, by changing value to false will trigger re-render)
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         LocationManager.getLocation(props.locationId)
//         .then(location => {
//             console.log(location)
//             setLocation({
//                 name: location.name,
//                 address: location.address,
//                 hours: location.hours,
//                 picture: location.picture
//             });
//             //once initial render and useEffect triggered, it will set new values for the properties
//             //button can be clicked and once clicked(state changes which causes re-render)
//             setIsLoading(false)
//         });
//     }, [props.locationId]);

//     const handleDelete = () => {
//         //invoke delete function on LocationManager and redirect to location list
//         setIsLoading(true);
//         LocationManager.deleteLocation(props.locationId).then(() => {
//             props.history.push("/locations")
//         })
//     }

//     return(
//         <div className="card">
//             <div className="card-content">
//                 <picture>
//                     {location.picture === "" ? undefined : <img src={require(`./${location.picture}`)} alt={location.name} /> } 
//                 </picture>
//             <h3> 
//             Name: <span style={{ color: "darkslategrey" }}>{firstLetterCase(location.name)}</span>
//             </h3>
//             <p>Address: {location.address}</p>
//             <p>Hours: {location.hours}</p>
//             <button type="button" disabled={isLoading} onClick={handleDelete}>
//                 Remove
//             </button>
//             </div>
//         </div>
//     )
// }

// export default LocationDetail;