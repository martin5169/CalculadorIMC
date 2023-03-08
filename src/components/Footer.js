import React from "react";

function Footer() {
  return (
    <div bgColor="light" class="fixed-bottom"  >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
         {new Date().getFullYear()} - IMC
      </div>
      
    </div>
  );
}

export default Footer;
