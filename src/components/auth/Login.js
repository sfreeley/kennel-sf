import React, { useState } from "react";

const Login = props => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [isChecked, setIsChecked] = useState(false)
    //update state whenever input field is edited
    const handleFieldChange = event => {
        const stateToChange = {...credentials };
        stateToChange[event.target.id] = event.target.value;
        //change state based on what the user types (ie change values of properties that coincide with the id of the input field, name and password)
        setCredentials(stateToChange)
          
    };

    const handleLogin = event => {
        event.preventDefault();
        //if checkbox is checked, set user login info into localStorage, if checkbox not checked, only set in sessionStorage
        isChecked ? localStorage.setItem("credentials", JSON.stringify(credentials)) : sessionStorage.setItem("credentials", JSON.stringify(credentials))
        props.history.push("/")
    };

return (
    <form onSubmit={handleLogin}>
        <fieldset>
            <h3> Please Sign In</h3>
            <div className="formgrid">
                <input onChange={handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail"> Email address </label>

                <input onChange={handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>

                <input onChange={() => setIsChecked(true)} type="checkbox"
                       checked={isChecked} />
                <label htmlFor="checkbox">Remember Me</label>    
                      
            </div>
            <button type="submit">Sign in</button>
        </fieldset>
    </form>
    );

};

export default Login