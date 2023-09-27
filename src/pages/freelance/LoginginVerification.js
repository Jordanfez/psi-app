import React from 'react'
import * as Components from "./Components";

const LoginginVerification = () => {
  return (
    <div>
      <Components.Form style={{marginTop:"18%"}}>
        <Components.Title>Créer Un Compte</Components.Title><br />
        <Components.Label>Entrer le code recu envoter sur votre adresse mail ici</Components.Label><br />
        <Components.Input type="text" placeholder="Code de verification" />
        <Components.Button style={{width :"54%"}}>Verifier</Components.Button> <br/>
        <Components.Label><a href="#" style={{color:"dodgerblue"}}> renvoyer le code</a> </Components.Label>
      </Components.Form>

    </div>
  )
}

export default LoginginVerification