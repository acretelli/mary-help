import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useHistory } from 'react-router-dom';

import profilePic from '../../images/profile_pic.png';
import menuIcon from '../../images/menu.svg';
import logoSimp from '../../images/logo_simp.png';
import logo from '../../images/logo.svg';
import closeBtn from '../../images/close.svg';

import { HeaderContainer, HeaderWrapper, MainNavigation, MainNavigationLink, UserNameContainer, UserImg, MenuIcon, UserName, LogoImg, HeaderButton, CloseIcon } from './styles';

export const Header = () => {
    const { user, setUser } = useContext(UserContext);
    
    const [ openMenu, setOpenMenu ] = useState(false)
    
    const history = useHistory();

    // useEffect(() => {
    //     const userLocalStorage = 
    //     localStorage.getItem('user');
    //     setUser(userLocalStorage)
    // }, [])

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const goToLogin = () => {
        history.push(`/login`)
        setOpenMenu(false)
    }

    const goToHome = () => {
        history.push(`/`)
        setOpenMenu(false)
    }
    
    const goToProfile = () => {
        history.push(`/profile`)
        setOpenMenu(false)
    }
    
    const goToBlog = () => {
        history.push(`/blog`)
        setOpenMenu(false)
    }

    const goToMessages = () => {
        history.push(`/messages`)
        setOpenMenu(false)
    }

    const goToUsePolicy = () => {
        history.push(`/use-policy`)
        setOpenMenu(false)
    }

    const goToHowToUse = () => {
        history.push(`/how-to-use`)
        setOpenMenu(false)
    }
    
    const goToFeed = () => {
        history.push(`/help`)
        setOpenMenu(false)
    }
    
    const goToNotifications = () => {
        history.push(`/notifications`)
        setOpenMenu(false)
    }
    
    const goToPost = () => {
        history.push(`/post`)
        setOpenMenu(false)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        history.push('/');
        setOpenMenu(false)
    }

    return (
        <HeaderContainer>
            { user ? <HeaderWrapper>
                <UserNameContainer>
                    <UserImg src={profilePic} alt="Foto da usuária" onClick={goToProfile}/>
                    <UserName onClick={goToProfile}>Samantha Jonas</UserName>
                </UserNameContainer>
                <div>
                    <MenuIcon src={menuIcon} alt="Ícone para indicar o a abertura do menu" onClick={handleOpenMenu} />
                </div>

                {openMenu && <MainNavigation>
                    <CloseIcon src={closeBtn} alt="Botão de fechar o menu" onClick={handleOpenMenu} />

                    <MainNavigationLink onClick={goToFeed}>Ajudar</MainNavigationLink>

                    <MainNavigationLink onClick={goToPost}>Pedir ajuda</MainNavigationLink>

                    <MainNavigationLink onClick={goToProfile}>Meu Perfil</MainNavigationLink>

                    <MainNavigationLink onClick={goToNotifications}>Notificações</MainNavigationLink>

                    <MainNavigationLink onClick={goToMessages}>Mensagens</MainNavigationLink>

                    <MainNavigationLink onClick={goToHowToUse}>Como usar</MainNavigationLink>
                    
                    <MainNavigationLink onClick={goToUsePolicy}>Políticas de uso</MainNavigationLink>
                    
                    <MainNavigationLink onClick={goToBlog}>Blog</MainNavigationLink>

                    <MainNavigationLink onClick={handleLogout}>Logout</MainNavigationLink>
                </MainNavigation>}
            </HeaderWrapper> : 
            <HeaderWrapper>
                <LogoImg src={logo} alt="Logo da MaryHelper, com MaryHelp escrito por extenso" onClick={goToHome} />
                <HeaderButton backgroundColor="#c85cff" onClick={goToLogin}>Login</HeaderButton>
            </HeaderWrapper>
            }
        </HeaderContainer>
    )
}
