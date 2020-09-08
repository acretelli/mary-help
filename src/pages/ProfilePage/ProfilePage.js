import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { UserContext } from '../../components/UserContext';
import { FormUser } from '../../components/FormUser/FormUser';
import { FormAddress } from '../../components/FormAddress/FormAddress';

import { MainContainer, Container, FlexContainer } from '../../styles/mainStyles';

import { UserImg, Score, Box, BoxTitle, BoxContent, BoxTopic, IconBtn } from './styles';

import profilePic from '../../images/profile_pic.png';
import editIcon from '../../images/edit.svg';
import { SecondaryMenu } from '../../components/SecondaryMenu/SecondaryMenu';

const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext);
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
            <Header/>
            {user.cadastro && <Container width="600px" key={user.cadastro._id}>
                <Box>
                    <IconBtn src={editIcon} alt="Ícone para indicar a edição das informações" onClick={handleEditUser} />
                    <BoxTitle>User</BoxTitle>
                    <UserImg src={profilePic} alt={user.name} />
                    {!isEditingUser ? <BoxContent>
                        <BoxTopic><strong>Nome: </strong>{user.cadastro.nome} {user.cadastro.sobrenome}</BoxTopic>
                        <BoxTopic><strong>Usuario: </strong>{user.cadastro.usuario}</BoxTopic>
                        <BoxTopic><strong>Email: </strong>{user.cadastro.email}</BoxTopic>
                        <BoxTopic><strong>Data de nascimento: </strong>{moment(user.cadastro.dataNascimento).format("DD/MM/YYYY")}</BoxTopic>
                        <BoxTopic><strong>Telefone:</strong>{user.cadastro.telefone}</BoxTopic>
                        <BoxTopic><strong>Filhos:</strong> {user.cadastro.__v}</BoxTopic>

                    </BoxContent> : <FormUser />}
                </Box>
                <Box>
                    <BoxTitle>Avaliações</BoxTitle>
                    
                    {user.avaliacoesFeitas && user.avaliacoesFeitas.length > 0 ? user.avaliacoesFeitas.map( avaliation => {
                        return <BoxContent>
                            <BoxTopic>{avaliation.author}</BoxTopic>
                            <BoxTopic>{avaliation.stars}</BoxTopic>
                            <BoxTopic>{avaliation.comment}</BoxTopic>
                        </BoxContent>
                    }) : <BoxContent><BoxTopic>Você não realizou nenhuma avaliação ainda.</BoxTopic></BoxContent>}
                    {user.avaliacoesRecebidas && user.avaliacoesRecebidas.length > 0 ? user.avaliacoesRecebidas.map( avaliation => {
                        return <BoxContent key={avaliation._id}>
                            <BoxTopic>{avaliation.author}</BoxTopic>
                            <BoxTopic>{avaliation.stars}</BoxTopic>
                            <BoxTopic>{avaliation.comment}</BoxTopic>
                        </BoxContent>
                    }) : <BoxContent><BoxTopic>Você não recebeu nenhuma avaliação ainda.</BoxTopic></BoxContent>}
                </Box>
                <Box>
                    <BoxTitle>Serviços oferecidos</BoxTitle>
                    <BoxContent>
                        {user.servicosOferecidos && user.servicosOferecidos.length > 0 ? user.servicosOferecidos.map( service => {
                            return <>
                                <BoxTopic key={service._id}>{service._id}</BoxTopic>
                                <BoxTopic>{service.tipoAtendimento}</BoxTopic>
                                <BoxTopic>{service.aceitaPermuta}</BoxTopic>
                            </>
                        }) : <p>Você não tem serviços oferecidos.</p>}
                    </BoxContent>
                </Box>
                <Box>
                    <BoxTitle>Blocks</BoxTitle>
                    {user.usuariosBloqueados && user.usuariosBloqueados.length > 0 ?user.usuariosBloqueados.map( person => {
                        return <BoxContent key={person._id}>
                            <BoxTopic>{person.nome}</BoxTopic>
                        </BoxContent>
                    }) : <BoxContent><BoxTopic>Você não tem usuário bloqueados.</BoxTopic></BoxContent>}
                </Box>
            </Container>}
            <SecondaryMenu />
            <Footer/>
        </MainContainer>
    )
}

export default ProfilePage;