import React from "react";

import "./styles.sass";

const Button = ({ label, icon }: { label: string; icon: React.ReactNode }) => {
  return (
    <div className="button__wrapper">
      <button className="button">{icon}</button>
      <span className="button__label">{label}</span>
    </div>
  );
};

export default Button;
