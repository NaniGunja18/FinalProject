import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext'; 
import Header3 from "./Header3";
import EditPaymentModal from "./EditPay";
import "./Profile.css";

const ProductPage = () => {
  const { user } = useUser(); 
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([
    { id: 1, cardNumber: "xxxx xxxx xxxx 1234", name: "Mike Ross", type: "Mastercard", expiration: "11/26", cvc: "123" },
    { id: 2, cardNumber: "xxxx xxxx xxxx 6789", name: "Mike Ross", type: "Rupay", expiration: "12/25", cvc: "456" },
    { id: 3, cardNumber: "xxxx xxxx xxxx 3468", name: "Mike Ross", type: "Rupay", expiration: "10/24", cvc: "789" },
  ]);

  const handleEditClick = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleSave = (updatedCard) => {
    setCards(cards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
    setModalVisible(false);
  };

  const handleRemove = (cardToRemove) => {
    setCards(cards.filter((card) => card.id !== cardToRemove.id));
    setModalVisible(false);
  };

  return (
    <div className="Productpage-container">
      <div>
        <Header3 />
      </div>
      <div className="p1">
        <div className="main">
          <div className="rig">
            <p className="s1">
              <img src="arr.png" className="arr" />
              <p className="mp" style={{fontSize:"25px"}}>My Pro</p>
            </p>
            <p className="s2">
              <img src="profile.png" className="pro" />
              <p className="pf">{ localStorage.getItem("name")
              }</p> 
            </p>
          </div>
          <div className="lef">
            <button className="edit" onClick={() => navigate('/Profile')}>Edit</button>
          </div>
        </div>
        <div className="fh">
          <div className="flex1">
            <p className="fn">Full Name</p>
            <button className="mr1">{localStorage.getItem("name")}</button> 
          </div>
          <div className="flex2">
            <p className="ea">Email Address</p>
            <button className="mr2">{localStorage.getItem("email")}</button> 
          </div>
        </div>
        <div className="fh">
          <div className="flex1">
            <p className="fn">Gender</p>
            <button className="mr1">Male</button> 
          </div>
          <div className="flex2">
            <p className="ea">Country</p>
            <button className="mr2">India</button>
          </div>
        </div>
      </div>
      {modalVisible && (
        <EditPaymentModal
          cardDetails={selectedCard}
          onClose={() => setModalVisible(false)}
          onSave={handleSave}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
};

export default ProductPage;
