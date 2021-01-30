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
            <div class="summary-card">
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
                <a>
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
            <div class="summary-card">
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
          <main>

          </main>
        </div>
      </div>
    </>
  );
};

export default Division;
