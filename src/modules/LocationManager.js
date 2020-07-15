const remoteURL = " http://localhost:5002"

export default {
    //GET one location based on id
    getLocation(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
    },

    //GET All locations
    getAllLocations() {
        return fetch(`${remoteURL}/locations`).then(result => result.json())
    },

    //DELETE
    deleteLocation(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },

    //POST (Create) newLocation object and save to database
    postLocation(newLocation) {
        return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        }).then(data => data.json())
    },

    updateLocation(editedLocation) {
        return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedLocation)
        }).then(data => data.json())
    },

    //this GET function will retrieve employees as children of 1 location
    getWithEmployees(id) {
        return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
            .then(data => data.json())
    }
}