import React from 'react'
import * as Components from "./Components";

const Resetpassword = () => {
  return (
    <div>
     <Components.Form style={{marginTop:"18%"}}>
        <Components.Title>Réinitialiser le mot de passe</Components.Title><br />
        <Components.Label>Entrer ic le nouveau que vous voullez pour votre compte</Components.Label><br />
        <Components.Input type="password" placeholder="Nouveau mot de passe" />
        <Components.Input type="password" placeholder="Confirmer le mot de passe" />
        <Components.Button style={{width :"54%"}}>Reinitialiser</Components.Button> <br/>
      </Components.Form>

    </div>
  )
}

export default Resetpassword