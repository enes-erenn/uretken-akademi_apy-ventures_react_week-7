import React from "react";

const Footer = () => {
  return (
    <div
      style={{ width: "100%", padding: "1rem 0", backgroundColor: "#c6c5b9" }}
    >
      <h3 style={{ padding: "0 2rem " }}>
        <span style={{ color: "#22C55E" }}>Uretken</span>
        <span style={{ color: "#000814" }}>Shop</span>
      </h3>
      <p style={{ textAlign: "center", width: "100%" }}>
        ©{new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
