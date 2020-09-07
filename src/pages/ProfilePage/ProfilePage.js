import React, { useState, useContext } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { UserContext } from '../../components/UserContext';
import { FormUser } from '../../components/FormUser/FormUser';
import { FormAddress } from '../../components/FormAddress/FormAddress';

import { MainContainer, Container, FlexContainer } from '../../styles/mainStyles';

import { UserImg, Score, Box, BoxTitle, BoxContent, BoxTopic, IconBtn } from './styles';

import profilePic from '../../images/profile_pic.png';
import editIcon from '../../images/edit.svg';

const ProfilePage = () => {
    // const { user, setUser } = useContext(UserContext);
    const [ isEditingUser, setIsEditingUser] = useState(false);
    const [ isEditingAddress, setIsEditingAddress] = useState(false);

    const handleEditUser = () => {
        setIsEditingAddress(false)
        setIsEditingUser(!isEditingUser)
    }

    const handleEditAddress = () => {
        setIsEditingUser(false)
        setIsEditingAddress(!isEditingAddress)
    }

    const user = {
        name: "Ana",
        lastName: "Santana",
        email: "annasantana@gmail.com",
        username: "anasantana",
        password: "123456",
        dateOfBirth: "04/02/1985",
        bio: "Oi, eu sou a Ana! Tenho dois filhos e sinto dificuldades em dar conta de tudo. Preciso de ajuda!",
        photo: profilePic,
        phone: "01199999-9999",
        children: true,
        addressType: "residencial",
        state: "sp",
        city: "São Paulo",
        postalCode: "04100-000",
        address: "rua das Margaridas",
        number: "11/201",
        services: [
            {
                "title": "Babá e transporte",
                "date": "02/09/2020",
                "description": "Babá e transporte",
                "price": 50
            },
        ],
        needing: [
            {
                "title": "Cuidados domésticos e psicológicos",
                "date": "02/09/2020",
                "description": "Cuidados domésticos e psicológicos",
                "category": "Aconselhamento financeiro",
            },
        ],
        messages: [
            {
                "author": "Joana",
                "message": "Oi, Ana!"
            },
            {
                "author": "Maria",
                "message": "Oi, Ana!"
            },
        ],
        avaliations: [
            {
                "author": "Flávia Silva",
                "stars": 5,
                "comment": "A  Ana é uma mulher muito dedicada e  me ajudou muito, somos até amigas! "
            },
            {
                "author": "Paula Maria",
                "stars": 5,
                "comment": "Aprendi muito com a ana e ela dirige muito bem."
            },
        ],
        blocks: [
            {
                "name": "Paula Torres"
            }
        ],
        score: 0
    }

    return (
        <MainContainer>
            <Header/>
            {user && <Container width="600px" key={user.name}>
                <Box>
                    <IconBtn src={editIcon} alt="Ícone para indicar a edição das informações" onClick={handleEditUser} />
                    <BoxTitle>User</BoxTitle>
                    <UserImg src={profilePic} alt={user.name} />
                    {!isEditingUser ? <BoxContent>
                        <BoxTopic>{user.name} {user.lastName}</BoxTopic>
                        <BoxTopic>{user.email}</BoxTopic>
                        <BoxTopic>{user.username}</BoxTopic>
                        <BoxTopic>{user.dateOfBirth}</BoxTopic>
                        <BoxTopic>{user.bio}</BoxTopic>
                    </BoxContent> : <FormUser />}
                </Box>
                <Box>
                    <IconBtn src={editIcon} alt="Ícone para indicar a edição das informações"  onClick={handleEditAddress} />
                    <BoxTitle>Informações Complementares</BoxTitle>
                    {!isEditingAddress ? <BoxContent>
                        <BoxTopic>{user.phone}</BoxTopic>
                        <BoxTopic>{user.children}</BoxTopic>
                        <BoxTopic>{user.addressType}</BoxTopic>
                        <BoxTopic>{user.state}</BoxTopic>
                        <BoxTopic>{user.city}</BoxTopic>
                        <BoxTopic>{user.postalCode}</BoxTopic>
                        <BoxTopic>{user.address}</BoxTopic>
                        <BoxTopic>{user.number}</BoxTopic>
                    </BoxContent> : <FormAddress />}
                </Box>
                <Box>
                    <BoxTitle>Avaliações</BoxTitle>
                    
                    {user.avaliations.map( avaliation => {
                        return <BoxContent>
                            <BoxTopic>{avaliation.author}</BoxTopic>
                            <BoxTopic>{avaliation.stars}</BoxTopic>
                            <BoxTopic>{avaliation.comment}</BoxTopic>
                        </BoxContent>
                    })}
                </Box>
                <Box>
                    <BoxTitle>Serviços</BoxTitle>
                    <BoxContent>
                        <h4>Ofertas</h4>
                        {user.services.map( service => {
                            return <BoxTopic>{service.title}</BoxTopic>
                        })}
                    </BoxContent>
                    <BoxContent>
                        <h4>Beneficiado</h4>
                        {user.needing.map( need => {
                            return <BoxTopic>{need.title}</BoxTopic>
                        })}
                    </BoxContent>
                </Box>
                <Box>
                    <BoxTitle>Blocks</BoxTitle>
                    {user.blocks.map( person => {
                        return <BoxContent>
                            <BoxTopic>{person.name}</BoxTopic>
                        </BoxContent>
                    })}
                </Box>
            </Container>}
            <Footer/>
        </MainContainer>
    )
}

export default ProfilePage;