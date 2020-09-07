import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Service } from '../../components/Service/Service';
import { useForm } from '../../hooks/useForm';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, Container, MainButton, LinkTextSmall } from '../../styles/mainStyles';

import { NewPostInput, NewPostTextArea, RadioContainer, InputRadio, Message } from './styles';

const PostServicePage = () => {
    const history = useHistory();

    const [message, setMessage] = useState(null);
    const { form, onChange, resetForm } = useForm({
      title: "", 
      date: moment().format("DD/MM/YYYY"), 
      description: "",
      price: 0,
    });
    
    const [ services, setServices ] = useState([])
   
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    const goToFeed = () => {
        history.push('/feed')
    }

    const addService = async (e) => {
        e.preventDefault();
        if ( form.title !== "" && form.description !== "" ) {
            const body = {
                "user": "Ana Santana",
                "photo": profilePic,
                "title": form.title,
                "date": moment().format("DD/MM/YYYY"),
                "description": form.description,
                "price": Number(form.price),
            }

            const newServices = [...services, body];

            setServices(newServices);
            setMessage("success")
        } else {
            setMessage("error")
        }

    };

    let servicesList;

    if(services) {
        console.log(services)
        servicesList = services.map( service => {
          return (
            <Service key={service.title} user={service.user} photoUser={service.photo} title={service.title} date={service.date} description={service.description} price={service.price} />
          )
        });
    }

    return (
        <MainContainer>
            <Header />
            <Container width="400px">
                <h1>Criar anúncio</h1>
                <h3>Qual é o tipo de anúncio?</h3>
                <RadioContainer>
                    <InputRadio type="radio" id="legal" name="legal" value="person" />
                    <label htmlFor="person">Pedir ajuda</label>

                    <InputRadio type="radio" id="legal" name="legal" value="company" />
                    <label htmlFor="company">Ajudar</label>
                </RadioContainer>
                <h3>Algumas informações sobre o anúncio</h3>
                <NewPostInput 
                    required
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    value={form.title}
                    placeholder={"Serviço oferecido"}
                />
                <NewPostTextArea 
                    required
                    type="text"
                    name="description"
                    onChange={handleInputChange}
                    value={form.description}
                    placeholder={"Descrição do serviço."}
                />
                <NewPostInput 
                    required
                    type="number"
                    name="price"
                    onChange={handleInputChange}
                    value={form.price}
                    placeholder={"Preço do serviço"}
                />
                <MainButton backgroundColor="#8130a2" onClick={addService}>Publicar</MainButton>

                {message === "success" && <Message>Post publicado com sucesso</Message>}
                {message === "error" && <Message>Ops, algo deu errado... verifique se você preencheu todas as informações corretamente.</Message>}
                <LinkTextSmall color="#8130a2" onClick={goToFeed}>Voltar para o Feed</LinkTextSmall>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default PostServicePage;