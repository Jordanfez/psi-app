
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as Components from "./Components";

// import LogoPsiImage from 'src/assets/images/Resetpassword_logoPSI.png';

import {
    styled
} from '@mui/material/styles';

const Resetpassword1 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1501px`,
    height: `861px`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

const RéinitialiserLeMotDe = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `600`,
    fontSize: `30px`,
    letterSpacing: `2.4px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `527px`,
    top: `238px`,
});

const LoremIpsumDolorSitAm = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 0.5)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    width: `405.28px`,
    position: `absolute`,
    left: `541px`,
    top: `293px`,
});

const Frame75 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `560px`,
    height: `45px`,
    left: `472px`,
    top: `489px`,
});

const Confirmer = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(135, 143, 154, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `1.28px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `33px`,
    top: `6px`,
});

const Rectangle1359 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `1px`,
    width: `560px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const BxShowAlt = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `24px`,
    height: `24px`,
    left: `521px`,
    top: `10px`,
    overflow: `hidden`,
});



const Frame76 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `560px`,
    height: `45px`,
    left: `472px`,
    top: `429px`,
});

const Nouveau = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(135, 143, 154, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `1.28px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `33px`,
    top: `6px`,
});

const Rectangle13591 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `1px`,
    width: `560px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});



const Frame72 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `561px`,
    height: `45px`,
    left: `469px`,
    top: `578px`,
});

const Frame2 = styled("div")({
    backgroundColor: `rgba(10, 101, 204, 1)`,
    border: `1px solid rgba(229, 229, 229, 1)`,
    boxSizing: `border-box`,
    borderRadius: `8px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `5px 180px`,
    width: `561px`,
    left: `-1px`,
    top: `0px`,
    height: `45px`,
});

const Réinitialiser = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `700`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    margin: `0px`,
});

// const LogoPsi = styled("img")({
//     height: `112px`,
//     width: `211px`,
//     objectFit: `cover`,
//     position: `absolute`,
//     left: `638px`,
//     top: `0px`,
// });

function Resetpassword() {
    return (
    <>
      <Components.Container>
        <Resetpassword1>
            <RéinitialiserLeMotDe>
                {`Réinitialiser le mot de passe`}
            </RéinitialiserLeMotDe>
            <LoremIpsumDolorSitAm>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus `}
            </LoremIpsumDolorSitAm>
            <Frame75>
                <Confirmer>
                    {`Confirmer`}
                </Confirmer>
                <Rectangle1359>
                </Rectangle1359>
                <BxShowAlt>
                   <VisibilityIcon/>
                </BxShowAlt>
            </Frame75>
            <Frame76>
                <Nouveau>
                    {`Nouveau`}
                </Nouveau>
                <Rectangle13591>
                </Rectangle13591>
                <BxShowAlt>
                    <VisibilityIcon/>
                </BxShowAlt>
            </Frame76>
            <Frame72>
                <Frame2>
                    <Réinitialiser>
                        {`Réinitialiser`}
                    </Réinitialiser>
                </Frame2>
            </Frame72>
            {/* <LogoPsi src={LogoPsiImage} loading='lazy' alt={"logoPSI"}/> */}
        </Resetpassword1>
      </Components.Container>
    </>);
    }

export default Resetpassword;
    