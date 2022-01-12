import React from 'react';
import { Chimuelo } from '../custom-champs';

const switchChamps = (user) => {
  switch (user.name) {
    case 'Chimuelo':
      return <Chimuelo />;
    default:
      return (
        <>
          <p className="title-dashboard">{user.group}</p>
        </>
      );
  }
};

export const Champ = (props) => {
  const { user } = props;

  return switchChamps(user);
};
