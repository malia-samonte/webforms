import React, {useRef, useState, useEffect, Fragment} from "react";
import MainHeader from "../layout/MainHeader";
import data from "./mock-data.json";
//import {nanoid} from 'nanoid';
import { v4 as uuidv4 } from 'uuid';
import {Form, Button, Modal} from 'react-bootstrap';
import EditForm from "../components/EditForm";



export const ManageUsers = () => {

    const [employees,setEmployees] = useState(data);

    //add
    const addEmployee = (fullName, address, phoneNumber, email) => {
        setEmployees([...employees,{id:uuidv4(), fullName, address, phoneNumber, email} ]) //have to put curly brace because this is ONE object
    }

        //initial values to form elements
        const [newEmployee, setNewEmployee] = useState({
            fullName:"", address:"", phoneNumber:"", email:"" 
        });

        //change the values of our form elements
        const onInputChange = (e) => {
            setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
        }

        // get all parts of the form element - will put these as an argument in add employee function
        const {fullName, address, phoneNumber, email} = newEmployee;

        const handleSubmitAdd = (e) => {
            e.preventDefault();
            addEmployee(fullName, address, phoneNumber, email); //implement add employee function
        }


    //delete 
    const handleDeleteClick = (id) => {
        const newEmployees = [...employees];

        const index = employees.findIndex((employee) => employee.id === id);

        newEmployees.splice(index, 1);

        setEmployees(newEmployees);
    }

    //edit
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    }

        //Modal show
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
    

    return (
        <body>
        <div id="wrapper">
            <MainHeader/>

            <br></br>

            <h1>Manage Users</h1>

            <br></br>

            <div id="main-content" >
                <Form onSubmit={handleSubmitAdd}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Name "
                        name="fullName"
                        value={fullName}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                    <Form.Control
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => onInputChange(e)}
                        rows={3}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => onInputChange(e)}
                    />
                    <Form.Control
                        type="email"
                        placeholder="Email "
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                        required
                    />
                </Form.Group>
                <Button variant = "success" type ="submit" block id="button-form">
                    Add Employee
                </Button>
            </Form>
            </div>
            
            <br></br>
            <br></br>


            <div id="main-content-general"  >
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) =>(                        
                            <tr>
                                <td>{employee.fullName}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phoneNumber}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Fragment>
                                        <button id="button-action" onClick={handleShow}> Edit</button>
                                        <button id="button-action" onClick={() => handleDeleteClick(employee.id)}> Delete</button>
                                    
                                        <Modal show= {show} onHide={handleClose} >
                                            <Modal.Header>
                                                <Modal.Title>
                                                    Edit Employee
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <EditForm theEmployee={employee}/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant ="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </Fragment>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>

                <br></br>
                
                
            </div>

        </div>
       </body>
    )
}
