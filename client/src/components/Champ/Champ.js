import React from 'react';
import { Banquina, Chimuelo, Dany, Jose, Mefi } from '../custom-champs';

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
    default:
      return <></>;
  }
};

export const Champ = (props) => {
  const { user } = props;

  return switchChamps(user);
};
