import React, { useState } from 'react';
import './Admin.styles.scss';
import UsersDisplay from '../../components/UsersDisplay/UsersDisplay';
import Homes from '../../components/Homes/Homes';
import NewHome from '../../components/NewHome/NewHome';

function Admin() {
  // const [tab, setTab] = useState('HOMES');
  const [tab, setTab] = useState('NEW_HOME');

  const handleTabClick = (selectedTab:string) => {
    setTab(selectedTab);
  };

  return (
    <section className="admin">
      <h2 className="admin__title">ADMIN</h2>
      <section className="admin__tabs">
        <button
          className={`admin__tab ${tab === 'HOMES' ? 'active' : ''}`}
          onClick={() => handleTabClick('HOMES')}
        >
          Casas Publicadas
        </button>
        <button
          className={`admin__tab ${tab === 'USERS' ? 'active' : ''}`}
          onClick={() => handleTabClick('USERS')}
        >
          Usuarios
        </button>
        <button
          className={`admin__tab ${tab === 'NEW_HOME' ? 'active' : ''}`}
          onClick={() => handleTabClick('NEW_HOME')}
        >
          Ingresar nueva casa
        </button>
      </section>
      {tab === 'HOMES' && <Homes />}
      {tab === 'USERS' && <UsersDisplay />}
      {tab === 'NEW_HOME' && <NewHome />}
    </section>
  );
}

export default Admin;
