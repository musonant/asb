import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import BreadCrumb from '../../components/Breadcrumb';

const Division = () => {
  const breadCrumbTree = [
    {
      label: 'Divisions',
      path: '/',
    },
    {
      label: 'Module',
      path: '/module',
    },
  ];

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <BreadCrumb tree={breadCrumbTree} />
      </div>
    </>
  );
};

export default Division;
