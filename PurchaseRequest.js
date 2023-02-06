import React, { Component, useState, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./App.css";
import { nanoid } from "nanoid";
import logo from "./s-l500.svg";
import TextField from "@material-ui/core/TextField";
import Dynamictable from "./components/DynamicTable";
import Form from "./components/Form";
import Header from "./components/header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      account: "",
      locationCF: "",
      program: "",
      usercode: "",
      shipto: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const {
      department,
      account,
      locationCF,
      program,
      usercode,
      shipto,
      requestername,
      emailaddress,
      phonenumber,
      daterequested,
      supplier,
      shiptostreet,
      justification,
    } = this.state;

    await axios.post(
      "https://bom1azlkv6.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction",
      {
        department: `${department}`,
        account: `${account}`,
        locationCF: `${locationCF}`,
        program: `${program}`,
        usercode: `${usercode}`,
        shipto: `${shipto}`,
      }
    );

    await axios.post(
      "https://bom1azlkv6.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction",
      {
        requestername: `${requestername}`,
        emailaddress: `${emailaddress}`,
        phonenumber: `${phonenumber}`,
        daterequested: `${daterequested}`,
        supplier: `${supplier}`,
        shiptostreet: `${shiptostreet}`,
        justification: `${justification}`,
      }
    );
  }

  render() {
    return (
      <React.Fragment className="App">
        <body>
          <Header></Header>
          <div className="App-header">
            <Form></Form>
          </div>
        </body>
      </React.Fragment>
    );
  }
}
