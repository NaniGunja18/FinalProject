import React, { useState } from "react";
import "./Delivary.css";
import { useNavigate } from "react-router-dom";
import { useAddress } from "./delcontext";
import Header3 from "./Header3";

const CheckoutPage = () => {
  const { selectedAddress, setSelectedAddress } = useAddress();

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Mike Ross",
      address: "45, Green Street, Sector 12, New Delhi, 110001, India",
      phone: "8734637488",
      state: "Delhi",
    },
  ]);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    phone: "",
    state: "",
  });

  const statesList = [
    "Andhra Pradesh",
    "Delhi",
    "Karnataka",
    "Maharashtra",
    "Tamil Nadu",
    "Uttar Pradesh",
    "West Bengal",
  ];

  const handleSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleAddAddress = () => {
    setPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.address ||
      !newAddress.phone ||
      !newAddress.state
    ) {
      alert("Please fill out all fields!");
      return;
    }

    const updatedAddresses = [
      ...addresses,
      { ...newAddress, id: addresses.length + 1 },
    ];
    setAddresses(updatedAddresses);
    setPopupVisible(false);
    setNewAddress({ name: "", address: "", phone: "", state: "" });
  };

  const handleCancel = () => {
    setPopupVisible(false);
    setNewAddress({ name: "", address: "", phone: "", state: "" });
  };

  return (
    <>
      <div className="head">
        <Header3 />
      </div>
      <div className="delivery-address-page">
        <div className="ya">
          <img src="arr.png" className="arr" alt="arrow" />
          <p className="y">Your Addresses</p>
        </div>

        <div className="addresses-container">
          <div className="add-new">
            <button className="add-address-button" onClick={handleAddAddress}>
              <button className="plus">+</button>
              <br /> Add Address
            </button>
          </div>
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`address-card ${
                selectedAddress?.id === address.id ? "active" : ""
              }`}
              onClick={() => handleSelect(address)}
            >
              <h3>{address.name}</h3>
              <p>{address.address}</p>
              <p>State: {address.state}</p>
              <p>Phone: {address.phone}</p>
              {selectedAddress?.id === address.id && <span>Default</span>}
              <div className="modify">
                <button className="ed">Edit</button>
                <button className="ed">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add New Address</h2>
            <form>
            <div className="form-group">
                
                <select
                  name="state"
                  value={newAddress.state}
                  onChange={handleInputChange}
                >
                  <option value="">State</option>
                  {statesList.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                
                <input
                  type="text"
                  name="name"
                  value={newAddress.name}
                  onChange={handleInputChange}
                  placeholder="City/District"
                />
              </div>
              
              
              <div className="form-group">
                
                <input
                  type="text"
                  name="phone"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  placeholder="Pin Code"
                />
              </div>
              <div className="form-group">
                
                <input
                  type="text"
                  name="phone"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  placeholder="phone number"
                />
              </div>
              <div className="form-group">
                
                <textarea
                  name="address"
                  value={newAddress.address}
                  onChange={handleInputChange}
                  placeholder="Enter full address"
                ></textarea>
              </div>    
              <div className="form-buttons">
                <button type="button" onClick={handleSaveAddress}>
                  Save
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
