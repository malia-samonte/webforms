import React, { Component, useState, Fragment } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import "../App.css";
import { nanoid } from "nanoid";
import logo from "../s-l500.svg";
import TextField from "@material-ui/core/TextField";
import Dynamictable from "./DynamicTable";
import Header from "./header";
import SubHeader from "./SubHeader";

export default class Form extends Component {
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
        <div className="App-header">
          <body>
            {/* Purchase Request Form */}
            <SubHeader value="Purchase Request Form"></SubHeader>
            <form onSubmit={this.handleSubmit}>
              <table className="form-table">
                <tr className="form-table">
                  <td className="form-table">
                    <label>Department:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="department"
                      name="department"
                      onChange={this.handleChange}
                      value={this.state.department}
                      required
                    />
                  </td>
                  {/* <tr className="form-table"> */}
                  <td className="form-table">
                    <label>Account:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="account"
                      name="account"
                      onChange={this.handleChange}
                      value={this.state.account}
                      required
                    />
                  </td>
                  {/* </tr> */}
                  <td classname="form-table">
                    <label>Location CF:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="locationCF"
                      name="locationCF"
                      onChange={this.handleChange}
                      value={this.state.locationCF}
                      required
                    />
                  </td>
                </tr>
                <tr classname="form-table">
                  <td classname="form-table">
                    <label>Program:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="program"
                      name="program"
                      onChange={this.handleChange}
                      value={this.state.program}
                      required
                    />
                  </td>
                  <td classname="form-table">
                    <label>User Code:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="usercode"
                      name="usercode"
                      onChange={this.handleChange}
                      value={this.state.usercode}
                      required
                    />
                    <br></br>
                  </td>

                  <td classname="form-table">
                    <label>Ship To:</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="shipto"
                      name="shipto"
                      onChange={this.handleChange}
                      value={this.state.shipto}
                      required
                    />
                    <br></br>
                  </td>
                </tr>
              </table>
              {/* Requester Details */}
              <SubHeader value="Requester Details"></SubHeader>
              <table classname="form-table">
                <tr classname="form-table">
                  <td classname="form-table">
                    <label>Requester Name :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="requestername"
                      name="requestername"
                      onChange={this.handleChange}
                      value={this.state.requestername}
                      required
                    />
                  </td>

                  <td classname="form-table">
                    <label>Email Address :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="emailaddress"
                      name="emailaddress"
                      onChange={this.handleChange}
                      value={this.state.emailaddress}
                      required
                    />
                  </td>

                  <td classname="form-table">
                    <label>Phone Number :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="phonenumber"
                      name="phonenumber"
                      onChange={this.handleChange}
                      value={this.state.phonenumber}
                      required
                    />
                  </td>
                </tr>

                <tr classname="form-table">
                  <td classname="form-table">
                    <label>Supplier :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="supplier"
                      name="supplier"
                      onChange={this.handleChange}
                      value={this.state.supplier}
                      required
                    />
                  </td>

                  <td classname="form-table">
                    <label>Ship To Street :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="shiptostreet"
                      name="shiptostreet"
                      onChange={this.handleChange}
                      value={this.state.shiptostreet}
                      required
                    />
                  </td>

                  <td classname="form-table">
                    <label>Justification :</label>
                    <input
                      className="purchase-request-fields"
                      type="text"
                      id="justification"
                      name="justification"
                      onChange={this.handleChange}
                      value={this.state.justification}
                      required
                    />
                  </td>
                </tr>

                <tr classname="form-table">
                  <td classname="form-table">
                    <label>Date Requested : </label>
                    <TextField
                      className="purchase-request-fields"
                      id="date"
                      type="date"
                      //variant="outlined"
                      defaultValue="2023-01-18"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
                  </td>
                </tr>
              </table>
              {/* Dynamic Table */}
              <Dynamictable></Dynamictable>
              {/* Submit Button */}
              <button
                className="button button2"
                type="submit"
                onClick={() => props.onFormSwitch("Lock")}
              >
                SUBMIT
              </button>
            </form>
          </body>
        </div>
      </React.Fragment>
    );
  }
}
