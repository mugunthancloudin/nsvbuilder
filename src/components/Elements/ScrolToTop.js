import React from "react";

const ScrolToTop = () => {
  const handleClick = () => {
    window.location.href = "https://wa.me/98948 17125"; // Redirects to a specific WhatsApp chat
  };

  return (
    <>
      <button className="scroltop" onClick={handleClick}>
        <span className="fa fa-whatsapp relative" id="btn-vibrate" />
      </button>
    </>
  );
};

export default ScrolToTop;
