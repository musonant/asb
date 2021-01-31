import React from 'react';
import './styles.scss';
import Header from '../../components/Header';
import BreadCrumb from '../../components/Breadcrumb';
import NumberSummaryCard from '../../components/NumberSummaryCard';
import castleIcon from '../../assets/icons/castle.svg';
import megaphoneIcon from '../../assets/icons/megaphone.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import locationMarkerIcon from '../../assets/icons/location-marker.svg';
import noteBookIcon from '../../assets/icons/note-book.svg';
import fingerPrintIcon from '../../assets/icons/finger-print.svg';
import caretDownOIcon from '../../assets/icons/caret-down-o.svg';
import Tag from '../../components/Tag';
import lowRiskIcon from '../../assets/icons/arrow-bottom-right.svg';
import midRiskIcon from '../../assets/icons/arrow-right.svg';
import highRiskIcon from '../../assets/icons/arrow-up.svg';
import menuVerticalIcon from '../../assets/icons/menu-vertical.svg';

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
      <div className="division-page">
        <BreadCrumb tree={breadCrumbTree} />
        <div className="number-card-list">
          <div className="number-card-item">
            <NumberSummaryCard title="31452" subTitle="Ongoing metric" />
          </div>
          <div className="number-card-item">
            <NumberSummaryCard title="2344" subTitle="Past metric" />
          </div>
          <div className="number-card-item">
            <NumberSummaryCard title="14224" subTitle="Mixed metric" />
          </div>
          <div className="number-card-item">
            <NumberSummaryCard title="635" subTitle="Failed metric" />
          </div>
          <div className="number-card-item">
            <NumberSummaryCard title="11334" subTitle="Pending metric" />
          </div>
        </div>
        <div className="page-content">
          <aside className="side-bar">
            <div className="summary-card">
              <div className="summary-header">
                <div className="card-icon">
                  <img src={castleIcon} alt="" />
                </div>
                <h3 className="summary-title">
                  Division Summary
                </h3>
              </div>
              <div className="summary-info-row">
                <div className="icon-container">
                  <img src={phoneIcon} alt="" />
                </div>
                <p>0801 234 5678</p>
              </div>
              <div className="summary-info-row">
                <div className="icon-container">
                  <img src={envelopeIcon} alt="" />
                </div>
                <p>asbfefr@gmail.com</p>
              </div>
              <div className="summary-info-row">
                <div className="icon-container">
                  <img src={locationMarkerIcon} alt="" />
                </div>
                <p>Mojidi, Lagos</p>
              </div>
              <div className="summary-info-row">
                <div className="icon-container">
                  <img src={noteBookIcon} alt="" />
                </div>
                <a href="/">
                  <p>2 Journal entries</p>
                </a>
              </div>
              <div className="summary-info-row">
                <div className="icon-container">
                  <img src={fingerPrintIcon} alt="" />
                </div>
                <p>24 fingerprints enrolled</p>
              </div>
            </div>
            <div className="summary-card no-shadow">
              <div className="summary-header">
                <div className="card-icon">
                  <img src={megaphoneIcon} alt="" />
                </div>
                <h3 className="summary-title">
                  Module History
                </h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <p>Searched “Journal Entries” on Division module</p>
                  <p className="meta-text">
                    <span>22:10 15/09/2020</span>
                    <span className="bullet-text">Web</span>
                  </p>
                </div>
                <div className="timeline-item">
                  <p>Searched “Journal Entries” on Division module</p>
                  <p className="meta-text">
                    <span>22:10 15/09/2020</span>
                    <span className="bullet-text">Web</span>
                  </p>
                </div>
                <div className="timeline-item">
                  <p>Searched “Journal Entries” on Division module</p>
                  <p className="meta-text">
                    <span>22:10 15/09/2020</span>
                    <span className="bullet-text">Web</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <main className="main-content">
            <table>
              <thead>
                <tr className="header-row">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>
                  </th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Entries</th>
                  <th>Risk Profile</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img src={caretDownOIcon} alt="verified" />
                  </td>
                  <td>
                    Courtney Henry
                  </td>
                  <td className="location">
                    <p className="state">Lagos State</p>
                    <p className="address-line">775 Rolling Green Rd.</p>
                  </td>
                  <td>
                    <Tag label="No issues" />
                  </td>
                  <td className="entries">
                    <p className="count">19 Unique Entries</p>
                    <p className="type">Homogenous</p>
                  </td>
                  <td>
                    <img src={lowRiskIcon} className="risk-arrow" alt="" />
                    <span className="risk-text low">Low Risk</span>
                  </td>
                  <td>
                    <a href="/">
                      <img src={menuVerticalIcon} className="risk-arrow" alt="" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img src={caretDownOIcon} alt="verified" />
                  </td>
                  <td>
                    Courtney Henry
                  </td>
                  <td className="location">
                    <p className="state">Lagos State</p>
                    <p className="address-line">775 Rolling Green Rd.</p>
                  </td>
                  <td>
                    <Tag label="2 issues" type="warning" />
                  </td>
                  <td className="entries">
                    <p className="count">10 Unique Entries</p>
                    <p className="type">Homogenous</p>
                  </td>
                  <td>
                    <img src={midRiskIcon} className="risk-arrow" alt="" />
                    <span className="risk-text mid">Mid Risk</span>
                  </td>
                  <td>
                    <a href="/">
                      <img src={menuVerticalIcon} className="risk-arrow" alt="" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
};

export default Division;
