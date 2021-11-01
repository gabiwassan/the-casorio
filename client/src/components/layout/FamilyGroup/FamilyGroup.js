import React from 'react';
import PropTypes from "prop-types";

export const FamilyGroup = (props) => {
  return <>
    {props.user.family ? (
      <div >
        <div className='col s12'>
          <h4>
            <b>Ustedes</b> de alguna forma, fueron parte de esta <b>hermosa historia de amor</b>, y nos
            encantaría que nos acompañen en este día tan especial.
          </h4>
        </div>
        <div className='col s12'>
          <h4>
            Por eso, el viernes <b>14 de enero del 2022</b> queremos verlos bailar,
            brindar, reir y disfrutar con nosotros.
          </h4>
        </div>
      </div>) : (<>
        <div className='col s12'>
          <h4>
            <b>Vos</b> de alguna forma, fuiste parte de esta <b>hermosa historia de amor</b>, y nos
            encantaría que nos acompañes en este día tan especial.
          </h4>
        </div>
        <div className='col s12'>
          <h4>
            Por eso, el viernes <b>14 de enero del 2022</b> queremos verte bailar,
            brindar, reir y disfrutar con nosotros.
          </h4>
        </div>
      </>
    )
    }
  </>;
}

FamilyGroup.propTypes = {user: PropTypes.any};
