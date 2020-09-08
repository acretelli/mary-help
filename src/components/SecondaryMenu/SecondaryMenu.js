import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';

import { SecondaryMenuContainer, SecondaryMenuWrapper, BoxSingleButton, MenuIcon } from './styles';

import addIcon from '../../images/add.svg';
import notificationIcon from '../../images/notification.svg';
import messageIcon from '../../images/messages.svg';
import profileIcon from '../../images/profile.svg';
import helpIcon from '../../images/help.svg';

export const SecondaryMenu = () => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [clickedCategory, setClickedCategory] = useState([]);

    const goToServices = () => {
        history.push('/help')
    }

    const goToPost = () => {
        history.push('/post')
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const goToNotifications = () => {
        history.push('/notifications')
    }

    const goToMessages = () => {
        history.push('/messages')
    }

    return (
        <SecondaryMenuContainer>
            <SecondaryMenuWrapper>
                <MenuIcon src={helpIcon} alt="Ícone para indicar o a abertura do menu" onClick={goToServices} />
                
                <MenuIcon src={addIcon} alt="Ícone para indicar o a abertura do menu" onClick={goToPost} />
                
                <MenuIcon src={notificationIcon} alt="Ícone para indicar o a abertura do menu" onClick={goToNotifications} />
                
                <MenuIcon src={messageIcon} alt="Ícone para indicar o a abertura do menu" onClick={goToMessages} />
                
                <MenuIcon src={profileIcon} alt="Ícone para indicar o a abertura do menu" onClick={goToProfile} />

            </SecondaryMenuWrapper>
        </SecondaryMenuContainer>
    )
}
