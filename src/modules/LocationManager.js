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
    }
}