import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Message } from '../../components/Message/Message';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';
import { UserImg, MessagesContainer, ContactsContainer, ContactContainer } from './styles';

const user = {
    name: "Ana",
    lastName: "Santana",
    email: "annasantana@gmail.com",
    username: "anasantana",
    messages: [
        {
            "id": "1234",
            "author": "Joana",
            "photo": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "messages": [
                "Oi, Ana!",
                "Tudo bem?",
            ]
        },
        {
            "id": "1235",
            "author": "Kellen",
            "photo": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
            "messages": [
                "Muito obrigada, Ana!",
            ]
        },
    ],
    score: 0
}

const MessagesPage = () => {

    const history = useHistory();

    const [ authorClicked, setAuthorClicked ] = useState(null)

    const showMessages = authorId => {
        setAuthorClicked(authorId)
    }

    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>Mensagens</h1>
                <MessagesContainer>
                    <ContactsContainer>
                        {user.messages.map(message => {
                            return <ContactContainer onClick={()=>showMessages(message.id)}>
                                <UserImg src={message.photo} />
                                <p>{message.author}</p>
                            </ContactContainer>
                        })}
                    </ContactsContainer>
                    <Message authorId={authorClicked} />
                </MessagesContainer>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default MessagesPage;