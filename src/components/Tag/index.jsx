import React from 'react';
import './styles.scss';

const Tag = ({ label, type = 'primary' }) => {
  const typeToProperty = {
    primary: {
      color: '#8C70FF',
      backgroundColor: '#F6F3FF',
    },
    warning: {
      color: '#F4B400',
      backgroundColor: '#FFF6DE',
    },
  };
  const { backgroundColor, color } = typeToProperty[type];

  return (
    <p className="tag" style={{ backgroundColor, color }}>{label}</p>
  )
}

export default Tag;