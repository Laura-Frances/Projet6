import React, { useState } from 'react';
import MenuItem from '../AnimationCollapse/AnimationCollapse';
import '../Collapse/Collapse.scss';

const Collapse = () => {
  const [openMenus, setOpenMenus] = useState([]); // on définie l'état de openMenus comme un tableau vide

  const handleItemClick = (index) => { // gère les clics sur les éléments de menus
    if (openMenus.includes(index)) { // vérifie si index est présent dans le tableau openMenus
      setOpenMenus(openMenus.filter((item) => item !== index)); //met à jour l'état openMenus, filtre le tableau openMenus, exclue l'élément avec l'indice index
    } else {
      setOpenMenus([...openMenus, index]); // met à jour l'état openMenus en créant un nouveau tableau
    }
  };

  const menuItems = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
      index: 0
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      index: 1
    },
    {
      title: 'Service',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      index: 2
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécureité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
      index: 3
    },
  ];

  return (
    <div className="collapse">
      {menuItems.map((menuItem) => ( // itère sur le tableau menuItems, et pour chaque élément rend MenuItem avec ses props :
        <MenuItem
          key={menuItem.index}
          className="collapse-menu-item"
          title={menuItem.title}
          content={menuItem.content}
          index={menuItem.index}
          openMenus={openMenus}
          handleItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};
export default Collapse;
