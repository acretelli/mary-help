import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';
import { UserImg, Message } from './styles';

const solicitations = [
    {
        "id": "12345",
        "user": "Joana Silveira",
        "photo": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "title": "Babá e transporte",
        "date": "02/09/2020",
        "description": "Babá e transporte",
        "category": "Cuidados com a família",
        "type": "get-help"
    },
    {
        "id": "12346",
        "user": "Kellen Moraes",
        "photo": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
        "title": "Atendimento psicológico",
        "date": "02/09/2020",
        "description": "Preciso conversar com alguém",
        "category": "Atendimento psicológico",
        "state": "accepted",
        "type": "help"
    }
]

const SolicitationsPage = id => {
    const [ accepted, setAccepted ] = useState(false);
    const history = useHistory();
    const goToMessage = () => {
      history.push('/messages/message')
    }

    const handleAccept = id => {
        setAccepted(id)
    }
    
    const goToMessages = () => {
        history.push('/messages')
    }

    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>Solicitações pendentes</h1>
                <h2>Pedidos de ajuda</h2>
                {solicitations.map( solicitation => {
                    if(solicitation.type === "get-help") {
                        return <FlexContainer>
                            <UserImg src={solicitation.photo} />
                            <p>{solicitation.user} pode te ajudar!</p>
                            <button onClick={()=>handleAccept(solicitation.id)}>aceitar</button>
                    {accepted === solicitation.id && <Message onClick={goToMessages}>Você aceitou o pedido de {solicitation.user}/ Agora você pode conversar com ela pelo chat para combinarem o serviço. </Message> }
                        </FlexContainer>
                    }
                })}
                <h2>Serviços ofertados</h2>
                {solicitations.map( solicitation => {
                    if(solicitation.type === "help") {
                        return <FlexContainer>
                            <UserImg src={solicitation.photo} />
                            <p>{solicitation.user} pediu a sua ajuda!</p>
                            <button>aceitar</button>
                        </FlexContainer>
                    }
                })}
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default SolicitationsPage;