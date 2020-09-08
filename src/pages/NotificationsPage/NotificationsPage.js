import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SecondaryMenu } from '../../components/SecondaryMenu/SecondaryMenu';
import { UserContext } from '../../components/UserContext';

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
    const { user, setUser } = useContext(UserContext);

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

    const getProfile = async() => {
        
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/usuario/5f56e37784a7b7001770e480");

            localStorage.setItem("user", JSON.stringify(response.data.result[0].cadastro._id))
            setUser(response.data.result[0])
        }
        catch(err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        getProfile()
    }, [])


    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>Notificações</h1>
                {user.notificacoes && user.notificacoes.map( notificacao => {
                    return <div key={notificacao._id}>
                        <p>{notificacao.codUsuario[0]}</p>
                        <p>{notificacao.descricao}</p>
                    </div>
                })}
            </Container>
            <SecondaryMenu />
            <Footer />
        </MainContainer>
    )
}

export default NotificationsPage;