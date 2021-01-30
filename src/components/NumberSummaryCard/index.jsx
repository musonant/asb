import React from 'react';
import './styles.scss';
import infoIcon from '../../assets/icons/info.svg';

const NumberSummaryCard = ({ title, subTitle }) => {
  return (
    <div className="number-summary-card">
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subTitle}</p>
      </div>
      <img src={infoIcon} alt="info icon" />
    </div>
  )
};

export default NumberSummaryCard;
