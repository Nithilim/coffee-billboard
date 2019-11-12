import React from "react";

const Header = () => {
  return (
    <div>
      <h1 style={{ position: "absolute" }}>Coffee Billboard</h1>
      <img
        style={{ height: 50 }}
        src="/public/assets/coffee.jpg"
        alt="coffee-img"
      />
    </div>
  );
};

export default Header;
