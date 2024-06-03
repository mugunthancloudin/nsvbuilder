import React from "react";

const ScrolToTop = () => {
  const handleClick = () => {
    window.location.href = "https://wa.me/9842984247"; // Redirects to a specific WhatsApp chat
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
