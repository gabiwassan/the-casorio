import React from 'react';
import {
  Banquina,
  Chimuelo,
  Dany,
  Jose,
  Mefi,
  Piano,
  Mauro,
  Gordo,
  AleMoe,
  Fede,
  Vakita,
  Viejo,
  Pelado,
  Ivan,
  Gaston,
} from '../custom-champs';

const switchChamps = (user) => {
  switch (user.name) {
    case 'Chimuelo':
      return <Chimuelo />;
    case 'Banquina':
      return <Banquina />;
    case 'Dany':
      return <Dany />;
    case 'Jose':
      return <Jose />;
    case 'Mezi':
      return <Mefi />;
    case 'Piano':
      return <Piano />;
    case 'Mauro':
      return <Mauro />;
    case 'Maty':
      return <Gordo />;
    case 'AleMoe':
      return <AleMoe />;
    case 'Fede':
      return <Fede />;
    case 'Vakita':
      return <Vakita />;
    case 'Viejo':
      return <Viejo />;
    case 'Pelado':
      return <Pelado />;
    case 'Ivan':
      return <Ivan />;
    case 'Gaston':
      return <Gaston />;
    default:
      return <></>;
  }
};

export const Champ = (props) => {
  const { user } = props;

  return switchChamps(user);
};
