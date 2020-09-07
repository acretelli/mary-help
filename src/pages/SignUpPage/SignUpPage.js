import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormUser } from '../../components/FormUser/FormUser';
import { FormAddress } from '../../components/FormAddress/FormAddress';

import logo from '../../images/MaryHelp.png';
import iconBack from '../../images/arrow_back.svg';

import { Container, Form, TextSmall, LinkTextSmall, MainButton } from '../../styles/mainStyles';

import { SignUpContainer, LoginFooter, LogoFooter, ButtonsContainer,Title, Icon, Input, RadioContainer, TextArea } from './styles';

const SignUpPage = () => { 
    const [ basicInfo, setBasicInfo ] = useState(true);
    const history = useHistory();
    
    const handleInfo = (e) => {
        e.preventDefault();
        setBasicInfo(!basicInfo);
    }
    
    const goToHome = () => {
        history.push(`/`)
    }

    const goToLoginPage = () => {
        history.push(`/login`)
    }
    
    const goToFeedPage = () => {
        history.push(`/feed`)
    }

    return (
        <SignUpContainer backgroundColor="#8130a2">
            {basicInfo ? <Container width="600px">
                <div>
                    <Icon onClick={goToLoginPage} src={iconBack} alt="Ícone de seta para indicar a volta para o login"/>
                    <Title>Cadastro</Title>
                </div>
                
                <FormUser handleInfo={handleInfo} />
            </Container> : <Container width="600px">
                <div>
                    <Icon onClick={handleInfo} src={iconBack} alt="Ícone de seta para indicar a volta para o login"/>
                    <Title>Endereço</Title>
                </div>
                <FormAddress />
            </Container>}
            <LoginFooter>
                <LinkTextSmall color="#fffdfd" onClick={goToHome}>Voltar para a Home</LinkTextSmall>
            </LoginFooter>
        </SignUpContainer>
    )
}

export default SignUpPage;