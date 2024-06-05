import React from "react";
import "./scroll.css";

const Whatsapp = () => {
  const handleClick = () => {
    window.location.href = "https://wa.me/9894817125"; // Redirects to a specific WhatsApp chat
  };

  return (
    <>
      <button className="whatsapp" onClick={handleClick}>
        <span className="fa fa-whatsapp " id="btn-vibrate" />
      </button>
    </>
  );
};

export default Whatsapp;
