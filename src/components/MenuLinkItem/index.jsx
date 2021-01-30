import React from 'react';
import './styles.scss';

const MenuLinkItem = ({ icon, label, active, to, }) => {
  const Icon = icon;
  return (
    <a className={`menu-link-item${active ? ' active' : ''}`} href="/">
      <span className="icon">
        <Icon color={active ? "#006FD6" : '#72809D'} />
      </span>
      <span>{label}</span>
    </a>
  );
};

export default MenuLinkItem;
