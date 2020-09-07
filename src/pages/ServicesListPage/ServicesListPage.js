import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Service } from '../../components/Service/Service';

import profilePic from '../../images/profile_pic.png';

import { MainContainer, Container, LinkTextSmall } from '../../styles/mainStyles';

import { SearchContainer, SearchBtn, Input, Categories, CategoriesContainer, TextSmall } from './styles';

const ServicesListPage = () => {
    const params = useParams();
    const history = useHistory();
    const page = params.id;

    const [errorMessage, setErrorMessage] = useState(false);
    const [categories, setCategories] = useState([]);
    const [ services, setServices ] = useState([]);
    const [ requests, setRequests ] = useState([]);
    const [ inputSearch, setInputSearch ] = useState('');
    const [ clickedCategory, setClickedCategory ] = useState('');
    
    useEffect(() => {
        const mockServices = [{
            "user": "Joana Silveira",
            "photo": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "title": "Babá e transporte",
            "date": "02/09/2020",
            "description": "Babá e transporte",
            "category": "Cuidados com a família",
            "price": 30
        }]
        setServices(mockServices);

        const mockRequest = [{
            "user": "Kellen Moraes",
            "photo": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
            "title": "Atendimento psicológico",
            "date": "02/09/2020",
            "description": "Preciso conversar com alguém",
            "category": "Atendimento psicológico",
            "price": 0
        }]
        setRequests(mockRequest);
    }, [])
    
    const goToFeed = () => {
        history.push('/feed')

    }

    const getCategories = async() => {

        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/servico")
            setCategories(response.data.result)
        }
        catch(err) {
            console.log(err)
        }

    }

    const getServices = async() => {
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/usuario/5f567f01fa47fd0017ac6316")
            let servicos;
            response.data.result.forEach( item => {
                servicos = item.servicosOferecidos
            })

            console.log(servicos)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect( () => {
        getCategories();
        getServices();

    }, [])

    const onClickCategory = category => {
        if ( clickedCategory === category ) {
            setClickedCategory('')
        } else {
            setClickedCategory(category)
        }
    }

    let filteredList;
    
    if(page === "services") { 
        filteredList = services;
    } else {
        filteredList = requests;
    }

    if ( clickedCategory !== '' ) {
        filteredList = filteredList.filter( post => {
            if (post.category === clickedCategory) {
                return post
            }
        })
    }

    const onChangeInput = event => {
        setInputSearch(event.target.value);
    }

    if ( inputSearch !== '' ) {
        filteredList = filteredList.filter( post => {
            if (post.title.toLowerCase().includes(inputSearch.toLowerCase()) || post.description.toLowerCase().includes(inputSearch.toLowerCase()) ) {
                return post
            }
        })
    }
    
    let feedList;

    if(page === "services") {
        if(services) {
            feedList = filteredList.map( service => {
              return (
                <Service page="services" key={service.title} user={service.user} photoUser={service.photo} title={service.title} date={service.date} description={service.description} price={service.price} />
              )
            });
        }
    } else {
        if(requests) {
            feedList = filteredList.map( request => {
              return (
                <Service page="requests" key={request.title} user={request.user} photoUser={request.photo} title={request.title} date={request.date} description={request.description} price={request.price} />
              )
            });
        }
    }

    return (
        <MainContainer>
            <Header />
            <Container width="400px">
                {page === "requests" ? <h1>Mulheres que precisam de um help</h1> : <h1>Mulheres que podem dar um help</h1>}

                <Container width="600px">
                    <SearchContainer>
                        <Input placeholder="Busca" onChange={onChangeInput}/>
                        <SearchBtn>Buscar</SearchBtn>
                    </SearchContainer>
                    <CategoriesContainer>
                        {categories.map( category => {
                            return <Categories key={category.id} onClick={() => onClickCategory(category.nome)} isActive={clickedCategory} active={category.ativo}>{category.nome}</Categories>
                        })}
                    </CategoriesContainer>
                </Container>
                <h2>Anúncios:</h2>
                <TextSmall>Clique no nome da usuária para saber um pouco mais sobre ela.</TextSmall>
                {feedList}
                {filteredList.length === 0 && <TextSmall>Não foram encontrados anúncios com esse recorte.</TextSmall>}

                <LinkTextSmall color="#8130a2" onClick={goToFeed}>Voltar para a Home</LinkTextSmall>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default ServicesListPage;