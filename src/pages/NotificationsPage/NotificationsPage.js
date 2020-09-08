import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SecondaryMenu } from '../../components/SecondaryMenu/SecondaryMenu';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';
import { UserImg } from './styles';

const notifications = [
    {
        "message": "Gabriela aceitou a sua ajuda!",
        "type": "message"
    },
    {
        "message": "Joana quer te ajudar!",
        "type": "message"
    },
    {
        "message": "Carla quer te ajudar!",
        "type": "message"
    },
    {
        "message": "Kellen aceitou a sua ajuda!",
        "type": "message"
    },
]

const NotificationsPage = () => {

    const history = useHistory();
    const goToMessage = () => {
      history.push('/messages')
    }

    const goToSolicitations = () => {
      history.push('/messages/message')
    }

    const goToServices = () => {
      history.push('/feed/services')
    }

    const goToRequests = () => {
      history.push('/feed/requests')
    }

    const goToFeed = () => {
      history.push('/feed')
    }

    const notificationLink = link => {
        switch(link) {
            case "message":
                return goToMessage();
            case "solicitations":
                return goToSolicitations();
            case "service":
                return goToServices();
            case "request":
                return goToRequests();
            default:
                return goToFeed();
        }
    }

    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>Notificações</h1>
                {notifications.map( notification => {
                    return <FlexContainer key={notification.message}>
                        <p>{notification.message}</p>
                        <button onClick={()=>notificationLink(notification.type)}>mandar mensagem</button>
                    </FlexContainer>
                })}
            </Container>
            <SecondaryMenu />
            <Footer />
        </MainContainer>
    )
}

export default NotificationsPage;