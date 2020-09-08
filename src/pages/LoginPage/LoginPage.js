import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';

import { MainContainer, Container, Form, TextSmall, LinkTextSmall, MainButton } from '../../styles/mainStyles';

import { LoginContainer, LogoContainer, FormContainer, LoginFooter, LogoFooter, ButtonsContainer, ForgotPasswordContainer, Icon } from './styles';

import logoSimp from '../../images/logo_simp.png';
import logo from '../../images/logo.svg';
import iconBack from '../../images/arrow_back.svg';
import profilePic from '../../images/profile_pic.png';

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    const [ forgotPassword, setForgotPassword ] = useState(false);

    const history = useHistory();
    
    const handleForgotPassword = () => {
        setForgotPassword(!forgotPassword);
    }
    
    const goToHome = () => {
        history.push(`/`)
    }
    
    const goToSignUpPage = () => {
        history.push(`/signup`)
    }
    
    const handleInputUser = e => {
        console.log(user)
    }


    const goToFeedPage = async(e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/usuario/5f56e37784a7b7001770e480");

            localStorage.setItem("user", JSON.stringify(response.data.result[0].cadastro._id))
            setUser(response.data.result[0])
            history.push(`/help`)
        }
        catch(err) {
            console.log(err.message)
        }

    }

    return (
        <LoginContainer backgroundColor="#8130a2">
            <Container width="600px">
                <LogoContainer>
                    <img src={logo} alt="Logo da MaryHelper" />
                </LogoContainer>
                <FormContainer width="600px">
                    <h1>Login</h1>
                    <Form onSubmit={goToFeedPage}>
                        <input type="email" name="email" id="email" placeholder="Email ou telefone" onChange={handleInputUser} />
                        <input type="password" name="password"  id="password"placeholder="Senha" />
                        <LinkTextSmall color="#828282" onClick={handleForgotPassword}>Esqueci a senha</LinkTextSmall>
                        <ButtonsContainer>
                            <MainButton backgroundColor="#8130a2">Entrar</MainButton>
                            <LinkTextSmall color="#8130a2" onClick={goToSignUpPage}>Cadastre-se</LinkTextSmall>
                        </ButtonsContainer>
                    </Form>

                    { forgotPassword && <ForgotPasswordContainer>
                        <Icon onClick={handleForgotPassword} src={iconBack} alt="Ícone de seta para indicar a volta para o login"/>
                        <p>Esqueceu a senha</p>
                    </ForgotPasswordContainer> }
                </FormContainer>
                <LoginFooter> 
                    <LinkTextSmall color="#fffdfd" onClick={goToHome}>Voltar para a Home</LinkTextSmall>
                </LoginFooter>

            </Container>
        </LoginContainer>
    )
}

export default LoginPage;