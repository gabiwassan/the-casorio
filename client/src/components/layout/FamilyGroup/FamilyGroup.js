import React from 'react';
import PropTypes from "prop-types";

export const FamilyGroup = (props) => {
  return <>
    {props.user.family ? (
      <h5>
        <b>Ustedes</b> de alguna forma, fueron parte de esta <b>hermosa historia de amor</b>, y nos
        encantaría que nos acompañen en este día tan especial.
      </h5>) : (
      <h5>
        <b>Vos</b> de alguna forma, fuiste parte de esta <b>hermosa historia de amor</b>, y nos
        encantaría que nos acompañes en este día tan especial.
      </h5>
    )
    }
  </>;
}

FamilyGroup.propTypes = {user: PropTypes.any};
