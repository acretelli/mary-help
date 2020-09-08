import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useForm } from '../../hooks/useForm';

import deleteIcon from '../../images/delete.svg';

import { MainContainer, Container } from '../../styles/mainStyles';
import { MessagesListContainer, AddMessageContainer, MessagesContainer, MessageContainer, DeleteBtn, InputName, InputText, UserName, AddBtn, Icon, MessageText } from './styles';

export const Message = (props) => {
  const [ messages, setMessages ] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const { form, onChange, resetForm } = useForm({
    text: "",
  });
  
  useEffect(() => {
    const userMessages = [
          {
              id: "1234",
              author: "Joana",
              text:  "Oi, Ana!"
          },
          {
              id: "1234",
              author: "Joana",
              text:  "Tudo bem?"
          },
          {
              id: "1235",
              author: "Kellen",
              text: "Muito obrigada, Ana!",
          },
          {
              id: "1235",
              author: "Kellen",
              text: "Você me ajudou muito!",
          },
    ]

    setMessages(userMessages)

  }, [props.authorId])


  const handleInputChange = event => {
      const { name, value } = event.target;
      onChange(name, value)
  }
  
  const addMessage = e => {
    e.preventDefault();
    const newMessage = {
      id: "1233",
      author: "Ana",
      text: form.text
    };
    const newMessages = [...messages, newMessage];    
    setMessages(newMessages)    
  }
    
  const removeMessage = deletedMessage => {
    console.log(deletedMessage)
    if (window.confirm("Você tem certeza que quer deletar esta mensagem?") === true) {
      const newMessages = messages.filter(message => {
            return message.message !== deletedMessage
      });
    
      setMessages(newMessages)
    } else {
      return false;
    }
  }


  const messagesList = messages.map( message => {
    if(message.id === props.authorId || message.id === "1233") {
      return (
          <MessagesContainer color={message.author} align={message.author}>
            <MessageContainer onDoubleClick={removeMessage}>
                <MessageText><UserName display={message.author} >{message.author}: </UserName>{message.text}</MessageText>
            </MessageContainer>
          </MessagesContainer>
      )
    }
  });

  return (
      <Container width="400px">
        {messagesList[0] ? <MessagesListContainer>
                {messagesList}
            <AddMessageContainer onSubmit={addMessage}>
            <InputText
                name="text"
                value={form.text}
                placeholder="Mensagem"
                onChange={handleInputChange}
            />
            <AddBtn>Enviar</AddBtn>
            </AddMessageContainer> 
        </MessagesListContainer> : <MessagesListContainer>
            <h3>Suas mensagens</h3>
            <p>Envie fotos e mensagens privadas para uma amiga.</p>
        </MessagesListContainer>}
      </Container>
  )
}