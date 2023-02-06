import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const ReadOnlyRow = ({ contact, handleLockClick }) => {
  const [disable, setDisable] = React.useState(false);
  const [buttonText, setButtonText] = useState("Select"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const changeText = (text) => setButtonText(text);
  const lockandDisable = (event, contact) => {
    changeText("Locked");
    setDisable = true;
    isDisabled = { disable };
    handleLockClick(event, contact);
  };
  return (
    <tr>
      <td>{contact.PONumber}</td>
      <td>{contact.Requester}</td>
      <td>{contact.PODate}</td>
      <td>{contact.total}</td>
      <td>
        <button
          type="button"
          onClick={() => lockandDisable()}
          isDisabled={disable}
        >
          {buttonText}
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
