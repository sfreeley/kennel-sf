const remoteURL =  "http://localhost:5002"

export default {
    getEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
    },

    getAllEmployees() {
        return fetch(`${remoteURL}/employees`).then(result => result.json())
    },

    deleteEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },

    postEmployee(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    },

    updateEmployee(editedEmployee) {
        return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
    },

    //this is getting the employees with which animals they are taking care of
    getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
            .then(result => result.json())
    }

}