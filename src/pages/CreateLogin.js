import React, {useRef, useState, useEffect, Fragment} from "react";
import ToggleSwitch from "../components/ToggleSwtich";
import MainHeader from "../layout/MainHeader";


export const CreateLogin = (props) => {
    const userRef = useRef();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    // Handling the name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    // Handling the name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };
     
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPwd(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || pwd === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    };
    
    // Showing success message
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>User {firstname +' '+ lastname} successfully created!!</h1>
        </div>
        );
    };
    
    // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
        </div>
        );
    };


    return (
        <body>
            <div id="wrapper">
                <MainHeader/>

                <br></br>
                <h1>Create User Login/Profile</h1>
                
                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <div id="main-content" >
                    <form onSubmit={handleSubmit}>
                    <div class="side-by-side">
                            <label type="name">  First Name </label>
                            <label type="name"> Last Name </label>
                        </div>
                        <div class="side-by-side">
                            <br></br>
                                <input 
                                    type = "name" 
                                    id = "firstname"
                                    ref={userRef} //allow us to set focus on input
                                    autocomplete="off"
                                    placeholder = "John" 
                                    onChange = {handleFirstName} 
                                    value = {firstname}
                                    required
                                />
                                 
                            <br></br>
                                <input 
                                     type = "name" 
                                     id = "lastname"
                                     ref={userRef} //allow us to set focus on input
                                     autocomplete="off"
                                     placeholder = "Doe" 
                                     onChange = {handleLastName}
                                     value = {lastname}
                                     required
                                />
                        </div>

                        <br></br>
                        <label htmlFor="email"> 
                            Email 
                        </label>
                        <br></br>
                            <input 
                                type="text"
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                placeholder = "member@example.com" 
                                onChange={handleEmail}
                                value={email}
                                required
                            />

                        <br></br>
                        <br></br>
                        <label htmlFor="password"> 
                            Password 
                        </label>
                        <br></br>
                            <input 
                                type="text"
                                id="password"
                                placeholder = "password" 
                                onChange={handlePassword}
                                value={pwd}
                                required
                            />

                        <br></br>
                        <br></br>
                        <br></br>

                        <label htmlFor="password"> 
                            --- User Access ---
                        </label>
                        <br></br>
                        <br></br>

                        <div class="side-by-side">
                            <Fragment>
                                <ToggleSwitch label="Admin Role"> </ToggleSwitch>
                                <ToggleSwitch label="User Role"> </ToggleSwitch>
                            </Fragment>
                            <Fragment>
                                <ToggleSwitch label="OrgAdmin Role"> </ToggleSwitch>
                                <ToggleSwitch label="Systems Role"> </ToggleSwitch>
                            </Fragment>
                        </div>

                        <br></br>
                        <button 
                            type="submit" > Save
                        </button>
                        <br />
                    </form>
                </div>
            </div>
       </body>
    )
}


