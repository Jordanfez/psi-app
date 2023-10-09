import React from 'react';

import * as Components from "./Components";

import {
    styled
} from '@mui/material/styles';

const EmailVerification1 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1501px`,
    height: `861px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

// const LogoPsi = styled("img")({
//     height: `112px`,
//     width: `211px`,
//     objectFit: `cover`,
//     position: `absolute`,
//     left: `638px`,
//     top: `0px`,
// });

const VerificationVotreEma = styled("div")({
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
    left: `576px`,
    top: `264px`,
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
    width: `559px`,
    position: `absolute`,
    left: `470px`,
    top: `328px`,
});

const RenvoyerLeCode = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(10, 101, 204, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `underline`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `669px`,
    top: `561px`,
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
    left: `470px`,
    top: `427px`,
});

const Code = styled("div")({
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
    left: `470px`,
    top: `494px`,
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

const Vérifier = styled("div")({
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

function EmailVerification() {
    return (
    <>
        <Components.Container>  
            <EmailVerification1>
                {/* <LogoPsi src={LogoPsiImage} loading='lazy' alt={"logoPSI"}/> */}
                <VerificationVotreEma>
                    {`Verification votre email`}
                </VerificationVotreEma>
                <LoremIpsumDolorSitAm>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus `}
                </LoremIpsumDolorSitAm>
                <RenvoyerLeCode>
                    {`Renvoyer le code`}
                </RenvoyerLeCode>
                <Frame76>
                    <Code>
                        {`Code`}
                    </Code>
                    <Rectangle1359>
                    </Rectangle1359>
                </Frame76>
                <Frame72>
                    <Frame2>
                        <Vérifier>
                            {`Vérifier`}
                        </Vérifier>
                    </Frame2>
                </Frame72>
            </EmailVerification1>
        </Components.Container>
    </>);
    }

export default EmailVerification;
    