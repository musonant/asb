import React from 'react';
import './styles.scss';
import userIcon from '../../assets/icons/user.svg';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={userIcon} alt="" />
    </div>
  )
};

export default Avatar;
