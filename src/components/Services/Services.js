import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Service } from '../Service/Service';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, Container, LinkTextSmall } from '../../styles/mainStyles';

import { SearchContainer, SearchBtn, Input, Categories, CategoriesContainer, TextSmall } from './styles';

export const Services = (props) => {
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState(false);
    const [ services, setServices ] = useState([]);
    const [ servicesCode, setServicesCode ] = useState([]);
    
    const goToFeed = () => {
        props.feed()
    }

    const getServices = async() => {
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/solicitacao")
            setServices(response.data.result)
            console.log(response.data.result)
        }
        catch(err) {
            console.log(err)
        }
    }
 
    const getServicesByCode = async() => {
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/servico")
            setServicesCode(response.data.result)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect( () => {
        getServices();
        getServicesByCode();

    }, [])

    let servicesList;

    if(services) {
        servicesList = services.map( service => {
              const servicesCode = () =>{
                switch(service.codServico) {
                    case "5f568020fa47fd0017ac631b":
                        return "Atendimento Psicológico";
                    case "5f56a60b72e7030017fd7fc4":
                        return "Aconselhamento Jurídico";
                    case "5f56a62772e7030017fd7fc5":
                        return "Consultoria financeira";
                    case "5f56a62e72e7030017fd7fc6":
                        return "Serviços de casa";
                    case "5f56a63872e7030017fd7fc7":
                        return "Cuidados com a família";
                    case "5f56a65872e7030017fd7fc8":
                        return "Trabalhos administrativos";
                    case "5f56a66272e7030017fd7fc9":
                        return "Serviços tecnológicos";
                    default:
                        return "Ajuda";

                }
              }

              return (
                <Service page="services" key={service.id} user={service.nomeCompleto} photoUser="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" title="Preciso de ajuda psicológica" date={moment(service.dataSolicitacao).format("DD/MM/YYY")} />
              )
            });
    }

    // if(servicesCode) {
    //     servicesList = servicesCode.map( servico => {
    //         return <>
    //             <h3>{servico.nome}</h3>
    //             {services.map( solicitacao => {
    //                 console.log(solicitacao.codServico[0])
    //                 console.log(servico._id)
    //                 if(solicitacao.codServico[0] === servico._id) {
    //                     return (
    //                         <Service page="services" key={solicitacao.id} user={solicitacao.nomeCompleto} photoUser={solicitacao.foto} title={servico.nome} date={moment(solicitacao.dataSolicitacao).format("DD/MM/YYY")} />
    //                     )
    //                 }
    //             })}
    //         </>
    //     }

    //     )
    // }

    return (
        <Container>
            <Container width="400px">
                <h1>Mulheres que precisam de um help</h1>
                <TextSmall>Clique no nome da usuária para saber um pouco mais sobre ela.</TextSmall>
                {servicesList}

                <LinkTextSmall color="#8130a2" onClick={goToFeed}>Voltar</LinkTextSmall>
            </Container>
        </Container>
    )
}
