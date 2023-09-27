import React, { useState } from "react";
import "./Login.css";
import * as Components from "./Components";

const Login = () => {
  const [signIn, toggle] = React.useState(true);

  return (
    <>
      <Components.Container>
        {/** partie compte emplayer */}
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Créer Un Compte</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Input type="password" placeholder="confirmer votre Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/** partie compte freelance */}
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Créer Un Compte</Components.Title><br />
            <Components.Label>Vous en avez déjà un?<a href="#" style={{color:"dodgerblue"}}> se connecter</a> </Components.Label><br />
            <Components.Group className="top-row">
                <Components.Group className="field-wrap">
                    <Components.Textbox type="text" placeholder="NOM" />
                </Components.Group>
                <Components.Group className="field-wrap">
                    <Components.Textbox type="text" placeholder="Nom d'utilisateur" />
                </Components.Group>
            </Components.Group>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Input type="password" placeholder="Confirmer le Password" />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Se connecter</Components.Button> <br/>
           {/**<Components.Group className="top-row">
                <Components.Group className="field-wrap">
                    <button type="submit" class="button button-block">fecabook</button>
                </Components.Group>
                <Components.Group className="field-wrap">
                    <button type="submit" class="button button-block">Google</button>
                </Components.Group>
            </Components.Group>
           */} 
          </Components.Form>
        </Components.SignInContainer>

        {/** debut slider employer*/}
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Créer Un Compte en tant que</Components.Title>
              <Components.Paragraph>
                 Entrer ici vos information personnel
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Employeur
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
        
            {/** debut slider freelance*/}
            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Créer Un Compte en tant que</Components.Title>
              <Components.Paragraph>
                Entrer ici vos information personnel
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Freelance
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
};

export default Login;
