import React, {useRef, useState, useEffect} from "react";


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
                <div class="tfactsheader">
                    <header>
                    <div class="transparentheader">
                        <div class="logo">
                            <img src="https://tfactscluster1.dcs.tn.gov/images/DCSColorWhiteS.png"></img>
                        </div>
                    </div>
                    </header>
                </div>
                <div class="button-header">
                    <button
                        className="admin-link-btn" 
                        // onClick={() => props.onFormSwitch('AdminLogin')} 
                        > Sign Out
                    </button>
                </div>
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
