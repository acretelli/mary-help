import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { MainButton, TextSmall } from '../../styles/mainStyles';

import { ServiceContainer, UserContainer, UserPhoto, UserName, ServiceContent, ServiceTitle, ServicePrice, IconBtn, IconBtns } from './styles';

import rejectIcon from '../../images/reject.svg';
import acceptIcon from '../../images/accept.svg';

export const Service = (props) => {
    const history = useHistory();
    const [ accept, setAccept ] = useState(false)
    
    const handleAccept = async() => {
        try {
            await axios.post("https://maryhelp.herokuapp.com/solicitacao/registraInteresse",  {
                "codSolicitacao" : "5f56e37784a7b7001770e480",
                "codSolicitante" : "5f567f01fa47fd0017ac6316"
            })
            setAccept(!accept)
        }
        catch(err) {
            console.log(err.message)
        }
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
                {!accept ? <IconBtns>
                    <MainButton backgroundColor="#8130a2" onClick={handleAccept}>Ajudar</MainButton>
                    {/* <IconBtn src={acceptIcon} />
                    <IconBtn src={rejectIcon} /> */}
                </IconBtns> : <IconBtns>
                    <MainButton backgroundColor="#bababa" onClick={handleAccept}>Solicitação enviada!</MainButton>
                </IconBtns> }
            </ServiceContent>

        </ServiceContainer>
    )
}