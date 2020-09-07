import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import logoSimp from '../../images/logo_simp.png';
import logo from '../../images/MaryHelp.png';
import logoSebrae from '../../images/sebrae-logo.svg';
import logoShawee from '../../images/shawee.jpg';

import integranteCarine from '../../images/sebrae-logo.svg';
import integranteDaniele from '../../images/ewadlyn.jpg';
import integranteAnna from '../../images/anna.JPG';
import integranteFernandaF from '../../images/fernanda-fernandes.jpg';
import integranteFernandaC from '../../images/fernanda-castro.jpg';

import { MainContainer, Container, LinkTextLarge, TextLarge, MainButton, FlexContainer } from '../../styles/mainStyles';
import { HomeContainer, LogosContainer, LogoLarger, LogoSmaller, SectionTitle, BlogPostsContainer, BlogPost, BlogTitle, BlogImg, BlogParagraph, BlogTextContent, CreditsContainer, Credits, CreditPhoto, IntroImg, IntroImg2, Retangle, Retangle2, FlexContainerResponsive, LinkTextSmall } from './styles';

const HomePage = () => {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    
    // useEffect(() => {
    //     const userLocalStorage = 
    //     localStorage.getItem('user');
    //     setUser(userLocalStorage)
    // }, [])
    
    // if(user) {
    //     history.push(`/feed`)
    // }

    const goToLogin = () => {
        history.push('/login')
    }

    const goToSignUp= () => {
        history.push('/signup')
    }

    return (
        <MainContainer>
            <Header />
            <Container width="1024px" >
                <Container width="1024px" height="calc(100vh - 140px)" >
                    <FlexContainerResponsive>
                        <Retangle></Retangle>
                        <IntroImg src="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1041&q=80" alt="" />
                        <div>
                            <SectionTitle color="#8130a2">Olá, seja<br /> bem-vinda!</SectionTitle>
                            <TextLarge>Queremos que se sinta acolhida, pois esse portal foi feito para você! Sabemos que ser uma mulher, mãe, esposa, cuidar do trabalho e da casa não é nada fácil e às vezes precisamos muito da ajuda de pessoas de confiança e não sabemos onde encontrar. E  é por isso que a Mary Help está aqui.</TextLarge>
                            <TextLarge>Através do portal, você criará conexões poderosas com outras mulheres que poderão dar aquele help que você tanto necessita!</TextLarge>
                            <LinkTextLarge color="#8130a2" onClick={goToLogin}>Já nos conhece? Faça o login aqui.</LinkTextLarge>
                            <LinkTextLarge color="#8130a2" onClick={goToSignUp}>Quer participar? Cadastre-se aqui.</LinkTextLarge>
                        </div>
                    </FlexContainerResponsive>
                </Container>
                <Container width="1024px" height="100vh"><FlexContainerResponsive>
                        <Retangle2></Retangle2>
                        <IntroImg2 order="0" src="https://images.unsplash.com/photo-1498661367879-c2085689eed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <div>
                            <SectionTitle color="#8130a2">Por que ajudar?</SectionTitle>
                            <TextLarge>Mulheres sabem as necessidades de outras mulheres, e sabem também que para certas ocasiões precisamos de suporte sem julgamentos. Vivemos em um mundo de cobranças e nos sentimos muitas vezes sobrecarregadas, por isso, acreditamos que uma rede de apoio de mulheres alivia a tensão diária, proporcionando bem-estar e qualidade de vida. Ajude uma mulher e você automaticamente estará ajudando a si mesma!</TextLarge>
                        </div>
                    </FlexContainerResponsive>
                </Container>
                <Container width="1024px" height="100vh">
                    <SectionTitle color="#8130a2">Nossas parceiras</SectionTitle>
                    <TextLarge>Confira quem faz parte desse movimento...</TextLarge>
                    <FlexContainer>
                        <LogoLarger src={logoSebrae} alt="Logo do Sebrae"/>
                        <LogoLarger src={logoShawee} alt="Logo do Sebrae"/>
                    </FlexContainer>
                    <LinkTextLarge color="#8130a2">Tem uma empresa e quer participar? Entre em contato conosco.</LinkTextLarge>
                </Container>
                <Container width="1024px" height="100vh">
                    <SectionTitle color="#8130a2">Quer mais dicas?</SectionTitle>
                    <BlogPostsContainer>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1573496267478-37727ee5b694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Como fazer de uma necessidade um negócio</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2">Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Quando mulheres se ajudam</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2">Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Construindo uma rede solidária de mulheres</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2">Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                    </BlogPostsContainer>
                </Container>
            </Container>
            <Container width="1024px" height="100vh">
                <SectionTitle color="#8130a2">Idealizadoras</SectionTitle>
                <CreditsContainer>
                    <Credits>
                        <CreditPhoto src="https://images.unsplash.com/photo-1573496005828-adb22e525798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Foto de Carine" />
                        <div>
                            <TextLarge>Carine Zanotto Vieira</TextLarge>
                            <p>Business</p>
                        </div>
                    </Credits>
                    <Credits>
                        <CreditPhoto src={integranteFernandaC} />
                        <div>
                            <TextLarge>Fernanda Maria Rodrigues Castro</TextLarge>
                            <p>Marketing</p>
                        </div>
                    </Credits>
                    <Credits>
                        <CreditPhoto src={integranteFernandaF} alt="Foto de Carine" />
                        <div>
                            <TextLarge>Fernanda Fernandes</TextLarge>
                            <p>Ux</p>
                        </div>
                    </Credits>
                    <Credits>
                        <CreditPhoto  src={integranteAnna} alt="Foto de Carine" />
                        <div>
                            <TextLarge>Anna Fernandes</TextLarge>
                            <p>Desenvolvedora Front-end</p>
                        </div>
                    </Credits>
                    <Credits>
                        <CreditPhoto  src={integranteDaniele} alt="Foto de Carine" />
                        <div>
                            <TextLarge>Daniele Minatto</TextLarge>
                            <p>Desenvolvedora Back-end</p>
                        </div>
                    </Credits>
                </CreditsContainer>
            </Container>
            <Container width="1024px">
                <a href="https://unsplash.com/"><LinkTextSmall>Imagens: https://unsplash.com/</LinkTextSmall></a>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default HomePage;