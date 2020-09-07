import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Feed } from '../../components/Feed/Feed';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';

import { BoxButton, BoxSingleButton, BoxImg, BoxText } from './styles';

import iconHelp from '../../images/help.svg';
import iconGetHelp from '../../images/get_help.svg';

const FeedPage = () => {
    const history = useHistory();

    const goToServices = () => {
        history.push('/feed/services')
    }

    const goToRequests = () => {
        history.push('/feed/requests')
    }

    const goToPost = () => {
        history.push('/post')
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const goToSolicitations = () => {
        history.push('/solicitations')
    }

    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>O que você quer fazer hoje?</h1>
                <div>
                    <FlexContainer>
                        <BoxButton onClick={goToRequests}>
                            <BoxImg src={iconHelp} />
                            <BoxText>Procurar ajuda</BoxText>
                        </BoxButton>
                        <BoxButton onClick={goToServices}>
                            <BoxImg src={iconGetHelp} />
                            <BoxText>Ajudar</BoxText>
                        </BoxButton>
                    </FlexContainer>
                    <BoxSingleButton onClick={goToPost}>
                        <p>Criar anúncio</p>
                    </BoxSingleButton>
                    <BoxSingleButton onClick={goToSolicitations}>
                        <p>Solicitações</p>
                    </BoxSingleButton>
                    <BoxSingleButton onClick={goToProfile}>
                        <p>Ver seu perfil</p>
                    </BoxSingleButton>
                </div>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default FeedPage;