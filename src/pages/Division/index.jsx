import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { fetchUsers } from '../../store/user';
import Loader from '../../components/Loader';

const Division = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const result = await dispatch(fetchUsers());
      setIsLoading(false);
    };
    fetchAllUsers();
  }, []);

  const toggleUserSelect = (userId) => {
    const userExists = selectedUsers.find(id => id === userId);
    if (!userExists) {
      return setSelectedUsers([...selectedUsers, userId]);
    }
    setSelectedUsers(selectedUsers.filter(id => id !== userId));
  };

  const toggleAllUserSelect = () => {
    if (selectedUsers.length > 0) {
      return setSelectedUsers([]);
    }
    const newSelection = users.map(user => user.id);
    setSelectedUsers(newSelection);
  }

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
                    <input type="checkbox" checked={selectedUsers.length === users.length} onClick={toggleAllUserSelect} />
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
              {isLoading ? (
                <tbody>
                  <tr>
                    <td colSpan="8" className="loading-area">
                      <Loader />
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {users.map(({ id, name, state, address, issuesCount, uniqueEntriesCount, entriesType, riskLevel }) => {
                    const riskOptions = {
                      0: {
                        icon: lowRiskIcon,
                        text: 'Low Risk',
                        className: 'low',
                      },
                      1: {
                        icon: midRiskIcon,
                        text: 'Mid Risk',
                        className: 'mid',
                      },
                      2: {
                        icon: highRiskIcon,
                        text: 'High Risk',
                        className: 'high',
                      },
                    };
                    const riskEvaluation = riskOptions[riskLevel];
                    const isSelected = selectedUsers.find(userId => userId === id);

                    return (
                      <tr className={isSelected ? 'selected' : ''} key={id}>
                        <td>
                          <input type="checkbox" checked={isSelected} onClick={() => toggleUserSelect(id)} />
                        </td>
                        <td>
                          <img src={caretDownOIcon} alt="verified" />
                        </td>
                        <td>
                          {name}
                        </td>
                        <td className="location">
                          <p className="state">{state}</p>
                          <p className="address-line">{address}</p>
                        </td>
                        <td>
                          <Tag label={`${issuesCount} ${issuesCount === 1 ? 'issue' : 'issues'}`} type={issuesCount > 0 ? 'warning' : 'primary'} />
                        </td>
                        <td className="entries">
                          <p className="count">{uniqueEntriesCount > 1 ? `${uniqueEntriesCount} unique entries` : `${uniqueEntriesCount === 1 ? '1' : 'No'} unique entry`}</p>
                          <p className="type">{entriesType}</p>
                        </td>
                        <td>
                          <img src={riskEvaluation.icon} className="risk-arrow" alt="" />
                          <span className={`risk-text ${riskEvaluation.className}`}>
                            {riskEvaluation.text}
                          </span>
                        </td>
                        <td>
                          <a href="/">
                            <img src={menuVerticalIcon} className="risk-arrow" alt="" />
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              )}
            </table>
          </main>
        </div>
      </div>
    </>
  );
};

export default Division;
