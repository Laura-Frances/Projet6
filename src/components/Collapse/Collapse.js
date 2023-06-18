import React, { useState } from 'react';
import MenuItem from '../Hooks/MenuItem';
import '../Collapse/Collapse.scss';

const Collapse = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const handleItemClick = (index) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((item) => item !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <div className="collapse">
      <MenuItem className="collapse-menu-item"
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
        index={0}
        openMenus={openMenus}
        handleItemClick={handleItemClick}
      />
      <MenuItem className="collapse-menu-item"
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        index={1}
        openMenus={openMenus}
        handleItemClick={handleItemClick}
      />
      <MenuItem className="collapse-menu-item"
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        index={2}
        openMenus={openMenus}
        handleItemClick={handleItemClick}
      />
      <MenuItem className="collapse-menu-item"
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécureité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standads sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        index={3}
        openMenus={openMenus}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default Collapse;
