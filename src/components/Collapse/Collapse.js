import React, { useState } from 'react';
import '../Collapse/Collapse.scss';

function Collapse() {
  const [menuStates, setMenuStates] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const toggleMenu = (menu) => {
    setMenuStates((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="collapse">
      <div className={`menu ${menuStates.fiabilite ? 'open' : ''}`}>
        <div className="menu-header">
          <span>Fiabilité</span>
          <i
            className={`arrow fas ${menuStates.fiabilite ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu('fiabilite');
            }}
          />
        </div>
        {menuStates.fiabilite && (
          <div className="menu-content">
            <p className="txt-menu">Les annonces postées sur Kasa garantissent une fiabilité totale. 
              Les photos sont conformes aux logements, et toutes les informations sont réglulièrement vérifiées par nos équipes.</p>
          </div>
        )}
      </div>

      <div className={`menu ${menuStates.respect ? 'open' : ''}`}>
        <div className="menu-header">
          <span>Respect</span>
          <i
            className={`arrow fas ${menuStates.respect ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu('respect');
            }}
          />
        </div>
        {menuStates.respect && (
          <div className="menu-content">
            <p className="txt-menu">Contenu du menu Respect</p>
          </div>
        )}
      </div>

      <div className={`menu ${menuStates.service ? 'open' : ''}`}>
        <div className="menu-header">
          <span>Service</span>
          <i
            className={`arrow fas ${menuStates.service ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu('service');
            }}
          />
        </div>
        {menuStates.service && (
          <div className="menu-content">
            <p className="txt-menu">Contenu du menu Service</p>
          </div>
        )}
      </div>

      <div className={`menu ${menuStates.securite ? 'open' : ''}`}>
        <div className="menu-header">
          <span>Sécurité</span>
          <i
            className={`arrow fas ${menuStates.securite ? 'fa-chevron-up' : 'fa-chevron-down'}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu('securite');
            }}
          />
        </div>
        {menuStates.securite && (
          <div className="menu-content">
            <p className="txt-menu">Contenu du menu Sécurité</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapse;
