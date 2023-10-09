import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import * as Components from "./Components";

// import SubtractImage from 'src/assets/images/Account_Subtract.png';

// import Facebook1Image from 'src/assets/images/Account_facebook_1.png';

// import GoogleGLogo1Image from 'src/assets/images/Account_Google__G__Logo_1.png';

// import LogoPsiImage from 'src/assets/images/Account_logoPSI.png';

import {
    styled
} from '@mui/material/styles';

// import Psi1Image from 'src/assets/images/Account_Psi_1.png';

const Account1 = styled("div")({
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

const Frame2 = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
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

const CréerUnCompte = styled("div")({
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
    left: `82px`,
    top: `158px`,
});

const Frame99 = styled("div")({
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
    left: `181px`,
    top: `761px`,
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

const SeConnecter = styled("div")({
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

const Frame73 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `531px`,
    height: `103px`,
    left: `81px`,
    top: `217px`,
});

const Rectangle1359 = styled("div")({
    backgroundColor: `rgba(241, 242, 244, 1)`,
    borderRadius: `5px`,
    width: `530px`,
    height: `103px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

const CreerUnCompteEnTantQ = styled("div")({
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
    left: `133px`,
    top: `10px`,
});

const Frame96 = styled("div")({
    borderRadius: `5px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `464px`,
    height: `36px`,
    left: `33px`,
    top: `51px`,
});

const FirstCheckBox = styled("div")({
    backgroundColor: `rgba(4, 40, 82, 1)`,
    borderRadius: `5px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `6px 10px`,
    boxSizing: `border-box`,
    width: `221px`,
    left: `243px`,
    top: `0px`,
    height: `36px`,
});

const BxBuildingHouse1 = styled("div")({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `24px`,
    height: `24px`,
    margin: `0px`,
    overflow: `hidden`,
});

const Employeur = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    margin: `0px 0px 0px 10px`,
});

const FirstCheckBox1 = styled("div")({
    borderRadius: `5px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `6px 10px`,
    boxSizing: `border-box`,
    width: `221px`,
    left: `0px`,
    top: `0px`,
    height: `36px`,
});

const BxUserCircle1 = styled("div")({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `24px`,
    height: `24px`,
    margin: `0px`,
    overflow: `hidden`,
});


const Freelance = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 0.8)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    margin: `0px 0px 0px 10px`,
});

const Frame74 = styled("div")({
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
    left: `83px`,
    top: `335px`,
});

const Nom = styled("div")({
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
    left: `25px`,
    top: `5px`,
});

const Rectangle2 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `5px`,
    width: `529px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
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
    top: `395px`,
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

const Rectangle13591 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `1px`,
    width: `530px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
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
    width: `530px`,
    height: `45px`,
    left: `82px`,
    top: `455px`,
});

const BxShowAlt1 = styled("div")({
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
    left: `497px`,
    top: `10px`,
    overflow: `hidden`,
});


const MotDePasse = styled("div")({
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

const Rectangle1360 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.25)`,
    boxSizing: `border-box`,
    borderRadius: `1px`,
    width: `530px`,
    height: `45px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});

// const Frame77 = styled("div")({
//     display: `flex`,
//     position: `absolute`,
//     isolation: `isolate`,
//     flexDirection: `row`,
//     justifyContent: `flex-start`,
//     alignItems: `flex-start`,
//     padding: `0px`,
//     boxSizing: `border-box`,
//     width: `530px`,
//     height: `45px`,
//     left: `82px`,
//     top: `515px`,
// });



// const ConfirmerLeMotDePass = styled("div")({
//     textAlign: `left`,
//     whiteSpace: `pre-wrap`,
//     fontSynthesis: `none`,
//     color: `rgba(135, 143, 154, 1)`,
//     fontStyle: `normal`,
//     fontFamily: `Roboto`,
//     fontWeight: `400`,
//     fontSize: `16px`,
//     letterSpacing: `1.28px`,
//     textDecoration: `none`,
//     lineHeight: `35px`,
//     textTransform: `none`,
//     width: `226.2px`,
//     position: `absolute`,
//     left: `31px`,
//     top: `6px`,
// });

// const Rectangle1361 = styled("div")({
//     border: `1px solid rgba(0, 0, 0, 0.25)`,
//     boxSizing: `border-box`,
//     borderRadius: `1px`,
//     width: `530px`,
//     height: `45px`,
//     position: `absolute`,
//     left: `0px`,
//     top: `0px`,
// });

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
    left: `84px`,
    top: `641px`,
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
    left: `83px`,
    top: `550px`,
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

const SeConnecter1 = styled("div")({
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
    left: `336px`,
    top: `601px`,
});

const MaintenirLaConnexion = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `18px`,
    letterSpacing: `1.44px`,
    textDecoration: `none`,
    lineHeight: `35px`,
    textTransform: `none`,
    position: `absolute`,
    left: `113px`,
    top: `500px`,
});

const Rectangle1358 = styled("div")({
    border: `1px solid rgba(0, 0, 0, 0.5)`,
    boxSizing: `border-box`,
    width: `15px`,
    height: `15px`,
    position: `absolute`,
    left: `82px`,
    top: `509px`,
});

// const LogoPsi = styled("img")({
//     height: `78px`,
//     width: `211px`,
//     objectFit: `cover`,
//     position: `absolute`,
//     left: `81px`,
//     top: `0px`,
// });

function Account() {
    return (
    <>
        <Components.Container>  
            <Account1>
                <Frame2>
                    {/* <Psi1>
                    </Psi1> */}
                    <Rectangle1>
                    </Rectangle1>
                </Frame2>
                {/* <Subtract src={SubtractImage} loading='lazy' alt={"Subtract"}/> */}
                <CréerUnCompte>
                    {`Créer Un Compte`}
                </CréerUnCompte>
                <Frame99>
                    <VousEnAvezDéjàUn>
                        {`Vous en avez déjà un?`}
                    </VousEnAvezDéjàUn>
                    <SeConnecter>
                        {`Se Connecter`}
                    </SeConnecter>
                </Frame99>
                <Frame73>
                    <Rectangle1359>
                    </Rectangle1359>
                    <CreerUnCompteEnTantQ>
                        {`Creer un compte en tant que`}
                    </CreerUnCompteEnTantQ>
                    <Frame96>
                        <FirstCheckBox>
                            <BxBuildingHouse1>
                            <MapsHomeWorkOutlinedIcon style={{color:'white'}}/>
                            </BxBuildingHouse1>
                            <Employeur>
                                {`Employeur`}
                            </Employeur>
                        </FirstCheckBox>
                        <FirstCheckBox1>
                            <BxUserCircle1>
                            <AccountCircleOutlinedIcon/>
                            </BxUserCircle1>
                            <Freelance>
                                {`Freelance`}
                            </Freelance>
                        </FirstCheckBox1>
                    </Frame96>
                </Frame73>
                <Frame74>
                    <Nom>
                        {`Nom`}
                    </Nom>
                    <Rectangle2>
                    </Rectangle2>
                </Frame74>
                <Frame75>
                    <Email>
                        {`Email`}
                    </Email>
                    <Rectangle13591>
                    </Rectangle13591>
                </Frame75>
                <Frame76>
                    <BxShowAlt1>
                        <VisibilityIcon/>
                    </BxShowAlt1>
                    <MotDePasse>
                        {`Mot de passe`}
                    </MotDePasse>
                    <Rectangle1360>
                    </Rectangle1360>
                </Frame76>
                {/* <Frame77>
                    <BxShowAlt1>
                        <VisibilityIcon/>
                    </BxShowAlt1>
                    <ConfirmerLeMotDePass>
                        {`Confirmer le mot de passe`}
                    </ConfirmerLeMotDePass>
                    <Rectangle1361>
                    </Rectangle1361>
                </Frame77> */}
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
                        <SeConnecter1>
                            {`Se connecter`}
                        </SeConnecter1>
                    </Frame21>
                </Frame72>
                <Or>
                    {`OR`}
                </Or>
                <MaintenirLaConnexion>
                    {`Maintenir la connexion?`}
                </MaintenirLaConnexion>
                <Rectangle1358>
                </Rectangle1358>
                {/* <LogoPsi src={LogoPsiImage} loading='lazy' alt={"logoPSI"}/> */}
            </Account1>
        </Components.Container>
    </>);
    }

export default Account;
    