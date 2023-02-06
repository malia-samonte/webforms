import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "../App.css";
import data from "../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Dynamictable = () => {
  //COnstants
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    item: "",
    description: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [editFormData, setEditFormData] = useState({
    item: "",
    description: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  //Functions
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      item: addFormData.item,
      description: addFormData.description,
      quantity: addFormData.quantity,
      price: addFormData.price,
      total: addFormData.price * addFormData.quantity,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      item: editFormData.item,
      description: editFormData.description,
      quantity: editFormData.quantity,
      price: editFormData.price,
      total: editFormData.price * editFormData.quantity,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      item: contact.item,
      description: contact.description,
      quantity: contact.quantity,
      price: contact.price,
      total: contact.total,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  async function handleSubmit(event) {
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
        department: "hello",
        account: "chitra",
        locationCF: "pal",
        program: "got it",
        usercode: "chik chik",
        shipto: "lol",
      }
    );
  }

  // Main Code
  return (
    <div className="App-header">
      <form onSubmit={handleEditFormSubmit}>
        <table classname="item-list_table">
          <thead>
            <tr>
              <th classname="item-list_table">Item</th>
              <th classname="item-list_table">Description</th>
              <th classname="item-list_table">Quantity</th>
              <th classname="item-list_table">Price</th>
              <th classname="item-list_table">Total</th>
              <th classname="item-list_table">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}

            <tr>
              <td>
                <input
                  className="purchase-request-fields"
                  type="text"
                  name="item"
                  required="required"
                  placeholder="Enter item name"
                  onChange={handleAddFormChange}
                />
              </td>

              <td>
                <input
                  className="purchase-request-fields"
                  type="text"
                  name="description"
                  required="required"
                  placeholder="Enter description"
                  onChange={handleAddFormChange}
                />
              </td>
              <td>
                <input
                  className="purchase-request-fields"
                  type="text"
                  name="quantity"
                  required="required"
                  placeholder="Enter quantity"
                  onChange={handleAddFormChange}
                />
              </td>
              <td>
                <input
                  className="purchase-request-fields"
                  type="text"
                  name="price"
                  required="required"
                  placeholder="Enter price"
                  onChange={handleAddFormChange}
                />
              </td>

              <td>
                <input
                  className="purchase-request-fields"
                  type="text"
                  name="price"
                  required="required"
                  placeholder="Enter price"
                  value=""
                  onChange={handleAddFormChange}
                  disabled
                />
              </td>
              <td>
                <button
                  className="button button2"
                  type="button"
                  onClick={handleAddSubmit}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Dynamictable;
