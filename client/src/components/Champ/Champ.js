import React from 'react';
import { Banquina, Chimuelo, Dany, Jose } from '../custom-champs';

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
    default:
      return <></>;
  }
};

export const Champ = (props) => {
  const { user } = props;

  return switchChamps(user);
};
