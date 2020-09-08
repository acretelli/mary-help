import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Service } from '../../components/Service/Service';
import { useForm } from '../../hooks/useForm';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, Container, MainButton, LinkTextSmall } from '../../styles/mainStyles';

import { NewPostInput, NewPostTextArea, RadioContainer, InputRadio, Message } from './styles';
import { SecondaryMenu } from '../../components/SecondaryMenu/SecondaryMenu';

const PostServicePage = () => {
    const history = useHistory();

    const [message, setMessage] = useState(null);
    const { form, onChange, resetForm } = useForm({
      title: "", 
      date: moment().format("DD/MM/YYYY"), 
      description: "",
      price: 0,
    });
    
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const goToFeed = () => {
        history.push('/help')
    }

    const addService = async(e) => {
        e.preventDefault();
        const body = {
            "codSolicitado": "5f567f01fa47fd0017ac6316",
            "codServico": "5f568020fa47fd0017ac631b"
        }

        try {
            axios.post("https://maryhelp.herokuapp.com/usuario/5f567f01fa47fd0017ac6316/solicitacoes", body);
            goToProfile();
        }
        catch(err) {
            console.log(err.message)
        }
    };

    return (
        <MainContainer>
            <Header />
            <Container width="400px">
                <h1>O que você está precisando?</h1>
                <p>Escreve aqui algumas informações sobre como outras mulheres podem te ajudar</p>
                
                <NewPostTextArea 
                    required
                    type="text"
                    name="description"
                    onChange={handleInputChange}
                    value={form.description}
                    placeholder={"O que você está precisando?"}
                />
                <MainButton backgroundColor="#8130a2" onClick={addService}>Publicar</MainButton>

                {message === "success" && <Message>Post publicado com sucesso</Message>}
                {message === "error" && <Message>Ops, algo deu errado... verifique se você preencheu todas as informações corretamente.</Message>}
                <LinkTextSmall color="#8130a2" onClick={goToFeed}>Pedidos</LinkTextSmall>
                <SecondaryMenu />
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default PostServicePage;