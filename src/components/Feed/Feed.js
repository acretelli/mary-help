import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { users } from '../../data/data';

import { FlexContainer, Container } from '../../styles/mainStyles';

import { UserImg } from './styles';

export const Feed = () => {
    const params = useParams();


    const categories = [
        "Aconselhamento psicológico",
        "Aconselhamento jurídico",
        "Adminitração da casa",
        "Pet",
        "Limpeza",
        "Reforma",
        "Estética",
        "Outros",
    ]

    return (
        <Container width="600px">
                {params.id === "help" ? users.map( user => {
                    if(user.needing.length !== 0) {
                    return user.needing.map( (need, i) => {
                            return <FlexContainer key={user.id+i}>
                                <UserImg src={user.photo} alt={user.name} />
                                <div>
                                    <p>{need.date}</p>
                                    <p>{need.category}</p>
                                    <h4>{need.title}</h4>
                                    <p>{user.name}</p>
                                    <p>{need.description}</p>
                                    <button>Miga, pode me dar um help?</button>
                                </div>
                            </FlexContainer>
                        })
                    }
                }) : users.map( user => {
                    if(user.services.length !== 0) {
                    return user.services.map( (service, i) => {
                            return <FlexContainer key={user.id+i}>
                                <UserImg src={user.photo} alt={user.name} />
                                <div>
                                    <p>{service.category}</p>
                                    <h4>{service.title}</h4>
                                    <p>{user.name}</p>
                                    <p>{service.description}</p>
                                    <p>{service.price}</p>
                                    <button>Miga, quer um help?</button>
                                </div>
                            </FlexContainer>
                        })
                    }
                }) }

        </Container>
    )
}
