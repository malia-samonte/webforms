import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "../App.css";
import data from "../mock-data requests.json";
import ReadOnlyRow from "./ReadOnlyRow_Approval";
import EditableRow from "./EditableRow_Approval";

const Dynamictable = () => {
  //COnstants
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    PONumber: "",
    Requester: "",
    PODate: "",
    total: "",
  });
  const [editFormData, setEditFormData] = useState({
    PONumber: "",
    Requester: "",
    PODate: "",
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
      PONumber: addFormData.PONumber,
      Requester: addFormData.Requester,
      PODate: addFormData.PODate,
      total: addFormData.total,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      PONumber: editFormData.PONumber,
      Requester: editFormData.Requester,
      PODate: editFormData.PODate,
      total: editFormData.total,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleLockClick = (contactId) => {};
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      PONumber: contact.PONumber,
      Requester: contact.Requester,
      PODate: contact.PODate,
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
              <th classname="item-list_table">PO Number</th>
              <th classname="item-list_table">Requester</th>
              <th classname="item-list_table">PO Date</th>
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
                    handleLockClick={handleLockClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Dynamictable;
