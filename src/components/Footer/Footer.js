import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { FooterContainer, FooterImg, FooterNavigation, FooterNavigationLink } from './styles';


export const Footer = () => {
    const history = useHistory();
    
    const goToHome = () => {
        history.push(`/`)
    }
    
    const goToBlog = () => {
        history.push(`/blog`)
    }
    
    const goToUsePolicy = () => {
        history.push(`/use-policy`)
    }

    return (
        <FooterContainer>
                <FooterImg src={logo} alt="Logo da MaryHelper, com MaryHelp escrito por extenso"  onClick={goToHome}/>
                <FooterNavigation>
                    <FooterNavigationLink onClick={goToBlog}>Blog</FooterNavigationLink>
                    <FooterNavigationLink onClick={goToUsePolicy}>Políticas de uso</FooterNavigationLink>
                </FooterNavigation>
        </FooterContainer>
    )
}
