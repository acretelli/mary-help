import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MainButton, TextSmall } from '../../styles/mainStyles';

import { ServiceContainer, UserContainer, UserPhoto, UserName, ServiceContent, ServiceTitle, ServicePrice } from './styles';

export const Service = (props) => {
    const history = useHistory();
    const [ accept, setAccept ] = useState(false)
    
    const handleAccept = () => {
        setAccept(!accept)
    }
    
    const goToProfile = () => {
        history.push('/profile')
    }
    
    return (
        <ServiceContainer>
            <UserContainer onClick={goToProfile}>
                <UserPhoto src={props.photoUser} alt={props.user} />
                <div>
                    <UserName>{props.user}</UserName>
                    <TextSmall>{props.date}</TextSmall>
                </div>
            </UserContainer>
            <ServiceContent>
                <ServiceTitle>{props.title}</ServiceTitle>
                <p>{props.description}</p>
                <ServicePrice>R$ {props.price}</ServicePrice>
                {!accept && props.page === "requests" && <MainButton backgroundColor="#8130a2" onClick={handleAccept}>Ajudar</MainButton>}
                {!accept && props.page === "services" && <MainButton backgroundColor="#8130a2" onClick={handleAccept}>Aceitar ajuda</MainButton>}
                {accept && <MainButton backgroundColor="#bababa"  onClick={handleAccept}>Solicitação enviada!</MainButton>}
            </ServiceContent>

        </ServiceContainer>
    )
}