import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useForm } from '../../hooks/useForm';

import deleteIcon from '../../images/delete.svg';

import { MainContainer, Container } from '../../styles/mainStyles';
import { MessagesListContainer, AddMessageContainer, MessagesContainer, MessageContainer, DeleteBtn, InputName, InputText, UserName, AddBtn, Icon } from './styles';

export const Message = (props) => {
  const [ messages, setMessages ] = useState([]);
  const [ author, setAuthor ] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const { form, onChange, resetForm } = useForm({
    text: "",
  });
  
  useEffect(() => {
    const userMessages = [
          {
              id: "1234",
              author: "Joana",
              messages: [
                  {
                    text: "Oi, Ana!",
                },
                  {
                    text: "Tudo bem?",
                }
              ]
          },
          {
              id: "1235",
              author: "Maria",
              messages: [
                {
                  text: "Muito obrigada, Ana!",
              },
                {
                  text:  "Você me ajudou muito!",
              }
              ]
          },
    ]

    const messagesByAuthor = userMessages.filter( author => {
        if(author.id === props.authorId) {
            return author
        }
    })


    if(messagesByAuthor[0]) {
        setMessages(messagesByAuthor[0].messages)
        setAuthor(messagesByAuthor[0].author)
    }

  }, [props.authorId])


  const handleInputChange = event => {
      const { name, value } = event.target;
      onChange(name, value)
  }
  
  const addMessage = e => {
    e.preventDefault();
    const newMessage = {
      user: "Ana Santana",
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
    
  const onKeyPressed = event => {
    if (event.keyCode === 13 && form.text !== "") {
      addMessage();
    }
  }


  const messagesList = messages.map( message => {
      return (
          <MessagesContainer color={author} align={author}>
            <MessageContainer onDoubleClick={removeMessage}>
                {/* <DeleteBtn onClick={() => { removeMessage(message.text); }}>
                  <Icon src={deleteIcon} />
                </DeleteBtn> */}
                <p><UserName display={author} >{author}: </UserName>{message.text}</p>
            </MessageContainer>
          </MessagesContainer>
      )
  });
  

  return (
      <Container width="400px">
        {author ? <MessagesListContainer>
                {messagesList}
            <AddMessageContainer onSubmit={addMessage}>
            <InputText
                name="text"
                value={form.text}
                placeholder="Mensagem"
                onChange={handleInputChange}
                onKeyDown={onKeyPressed}
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