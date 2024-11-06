import React from "react";
import "./StatCard.scss";

const StatCard = ({ title, value, changeType, icon }) => {
  return (
    <div className={`stat-card ${changeType}`}>
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        <span className="stat-card__icon">{icon}</span>
      </div>
      <div className="stat-card__value">{value}</div>
    </div>
  );
};

export default StatCard;
