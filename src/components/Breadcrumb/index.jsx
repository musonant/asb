import React from 'react';
import './styles.scss';
import caretRightIcon from '../../assets/icons/caret-right.svg';

/**
 * expected sample for `tree` prop
 * (TypeScript would solve for this, if it was used)
  tree = [
    {
      label: 'Divisions',
      path: '/',
    },
    {
      label: 'Module',
      path: '/module',
    },
  ];
 */
const BreadCrumb = ({ tree = [] }) => {
  return (
    <div className="bread-crumb">
      {tree.map((item, index) => (
        <span className="crumb-unit">
          {index !== 0 && (
            <img src={caretRightIcon} alt="" />
          )}
          <a className="label" href={item.path}>
            {item.label}
          </a>
        </span>
      ))}
    </div>
  )
}

export default BreadCrumb;
