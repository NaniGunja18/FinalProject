import React, { useState } from "react";
import "./EditPay.css"; 

const EditPaymentModal = ({ cardDetails, onClose, onSave, onRemove }) => {
  const [editedDetails, setEditedDetails] = useState(cardDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Payment Method</h2>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={editedDetails.cardNumber}
          onChange={handleChange}
          placeholder="XXXX XXXX XXXX 1234"
        />
        <label>Expiration</label>
        <input
          type="text"
          name="expiration"
          value={editedDetails.expiration}
          onChange={handleChange}
          placeholder="MM/YY"
        />
        <label>CVC</label>
        <input
          type="text"
          name="cvc"
          value={editedDetails.cvc}
          onChange={handleChange}
          placeholder="XXX"
        />
        <label>Name on Card</label>
        <input
          type="text"
          name="name"
          value={editedDetails.name}
          onChange={handleChange}
        />
        <div className="modal-buttons">
          <button onClick={() => onRemove(editedDetails)}>Remove</button>
          <button onClick={onClose} className="cancel">Cancel</button>
          <button onClick={() => onSave(editedDetails)} className="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditPaymentModal;
