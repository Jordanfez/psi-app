import React from 'react';
import * as Components from "./Components";

// import SubtractImage from 'src/assets/images/ForgetPassword_Subtract.png';

// import Facebook1Image from 'src/assets/images/ForgetPassword_facebook_1.png';

// import GoogleGLogo1Image from 'src/assets/images/ForgetPassword_Google__G__Logo_1.png';

// import LogoPsiImage from 'src/assets/images/ForgetPassword_logoPSI.png';

import {
    styled
} from '@mui/material/styles';

// import Psi1Image from 'src/assets/images/ForgetPassword_Psi_1.png';

const ForgetPassword1 = styled("div")({
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

const Frame2 = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `776px`,
    height: `861px`,
    left: `646px`,
    top: `-1px`,
    overflow: `hidden`,
});

// const Psi1 = styled("div")({
//     backgroundImage: `url(${Psi1Image})`,
//     backgroundPosition: `center`,
//     backgroundSize: `cover`,
//     backgroundRepeat: `no-repeat`,
//     boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
//     width: `996px`,
//     height: `1080px`,
//     position: `absolute`,
//     left: `0px`,
//     top: `0px`,
// });

const Rectangle1 = styled("div")({
    backgroundColor: `rgba(5, 24, 49, 0.5)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    width: `992px`,
    height: `1080px`,
    position: `absolute`,
    left: `4px`,
    top: `0px`,
});

// const Subtract = styled("img")({
//     height: `861.85px`,
//     width: `820.9px`,
//     position: `absolute`,
//     left: `0px`,
//     top: `0px`,
// });

const MotDePasseOublié = styled("div")({
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
    left: `81px`,
    top: `247px`,
});

const Frame98 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `435px`,
    height: `35px`,
    left: `129px`,
    top: `536px`,
});

const VousNAvezPasDeCompte = styled("div")({
    textAlign: `left`,
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
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const CreerUnCompte = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(62, 195, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `underline`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `275px`,
    top: `0px`,
});

const Frame75 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `530px`,
    height: `45px`,
    left: `82px`,
    top: `306px`,
});

const Email = styled("div")({
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
    width: `226.2px`,
    position: `absolute`,
    left: `31px`,
    top: `6px`,
});

const Rectangle1359 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `1px`,
    width: `530px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const Frame78 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `529px`,
    height: `45px`,
    left: `82px`,
    top: `468px`,
});

const Frame80 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `5px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `5px 27px`,
    width: `231px`,
    left: `0px`,
    top: `0px`,
    overflow: `hidden`,
    height: `45px`,
});

const Frame81 = styled("div")({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
    height: `35px`,
    width: `141px`,
});

// const Facebook1 = styled("img")({
//     height: `32px`,
//     width: `32px`,
//     objectFit: `cover`,
//     margin: `0px`,
// });

const Facebook = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(135, 143, 154, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `1.6px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    margin: `0px 0px 0px 10px`,
});

const Frame79 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `5px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `5px 26px`,
    width: `231px`,
    left: `299px`,
    top: `0px`,
    overflow: `hidden`,
    height: `45px`,
});

// const GoogleGLogo1 = styled("img")({
//     height: `30px`,
//     width: `33px`,
//     objectFit: `cover`,
//     margin: `0px`,
// });

const Google = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(135, 143, 154, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `1.6px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    margin: `0px 0px 0px 7px`,
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
    width: `530px`,
    height: `45px`,
    left: `81px`,
    top: `366px`,
});

const Frame21 = styled("div")({
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
    width: `531px`,
    left: `-1px`,
    top: `0px`,
    height: `45px`,
});

const SeConnecter = styled("div")({
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

const Or = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `334px`,
    top: `424px`,
});

// const LogoPsi = styled("img")({
//     height: `78px`,
//     width: `211px`,
//     objectFit: `cover`,
//     position: `absolute`,
//     left: `81px`,
//     top: `0px`,
// });

const Frame100 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `344px`,
    height: `35px`,
    left: `188px`,
    top: `580px`,
});

const VousEnAvezDéjàUn = styled("div")({
    textAlign: `left`,
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
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const SeConnecter1 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(62, 195, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `221px`,
    top: `0px`,
});

function ForgetPassword() {
    return (
    <>
        <Components.Container>
            <ForgetPassword1>
                <Frame2>
                    {/* <Psi1>
                    </Psi1> */}
                    <Rectangle1>
                    </Rectangle1>
                </Frame2>
                {/* <Subtract src={SubtractImage} loading='lazy' alt={"Subtract"}/> */}
                <MotDePasseOublié>
                    {`Mot de passe oublié`}
                </MotDePasseOublié>
                <Frame98>
                    <VousNAvezPasDeCompte>
                        {`Vous n’avez pas de compte?`}
                    </VousNAvezPasDeCompte>
                    <CreerUnCompte>
                        {`Creer un Compte`}
                    </CreerUnCompte>
                </Frame98>
                <Frame75>
                    <Email>
                        {`Email`}
                    </Email>
                    <Rectangle1359>
                    </Rectangle1359>
                </Frame75>
                <Frame78>
                    <Frame80>
                        <Frame81>
                            {/* <Facebook1 src={Facebook1Image} loading='lazy' alt={"facebook 1"}/> */}
                            <Facebook>
                                {`Facebook`}
                            </Facebook>
                        </Frame81>
                    </Frame80>
                    <Frame79>
                        {/* <GoogleGLogo1 src={GoogleGLogo1Image} loading='lazy' alt={"Google__G__Logo 1"}/> */}
                        <Google>
                            {`Google`}
                        </Google>
                    </Frame79>
                </Frame78>
                <Frame72>
                    <Frame21>
                        <SeConnecter>
                            {`Se connecter`}
                        </SeConnecter>
                    </Frame21>
                </Frame72>
                <Or>
                    {`OR`}
                </Or>
                {/* <LogoPsi src={LogoPsiImage} loading='lazy' alt={"logoPSI"}/> */}
                <Frame100>
                    <VousEnAvezDéjàUn>
                        {`Vous en avez déjà un?`}
                    </VousEnAvezDéjàUn>
                    <SeConnecter1>
                        {`Se Connecter`}
                    </SeConnecter1>
                </Frame100>
            </ForgetPassword1>
        </Components.Container>
    </>);
    }

export default ForgetPassword;
    