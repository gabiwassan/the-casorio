import React from "react";

export const QueLeDoyError = () => {
  return (
    <div className="row">
      <img className="col s6 error-image" src="https://c.tenor.com/SBAYO8dpFa8AAAAC/fidel-queledoy.gif" alt="que le doy?"/>
      <div className="col s6"> Parece que tu <b>teléfono</b> no figura en la lista de <b>invitados</b>, porfa comunicate conmigo
        <a href="https://wa.me/+543513079896"><b> aca</b></a></div>
    </div>
  )
}

export const NoPhoneError = () => {
  return (
    <div>
      <img className="col s6 error-image" src="https://c.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif" alt="really?"/>
    </div>
  )
}
