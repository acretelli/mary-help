import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Services } from '../../components/Services/Services';

import { MainContainer, FlexContainer, Container } from '../../styles/mainStyles';

import { BoxButton, BoxSingleButton, BoxImg, BoxText, CategoriesContainer, Categories } from './styles';
import { SecondaryMenu } from '../../components/SecondaryMenu/SecondaryMenu';

const ServicesListPage = () => {
    const [categories, setCategories] = useState([]);
    const [clickedCategory, setClickedCategory] = useState([]);

    const [openService, setOpenService] = useState(false);

    const getCategories = async() => {
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/servico")
            setCategories(response.data.result)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect( () => {
        getCategories();

    }, [])

    const onClickCategory = category => {
        if ( clickedCategory === category ) {
            setClickedCategory('')
        } else {
            setClickedCategory(category)
            setOpenService(true)
        }
    }

    const goToFeed = () => {
        setOpenService(false)
    }

    return (
        <MainContainer>
            <Header />
            {!openService ? <Container width="800px">
                <h1>Bora dar um help?!</h1>
                <p>Escolha uma categoria em que você consiga dar uma ajudinha.</p>
                    <CategoriesContainer>
                        {categories.map( category => {
                            return <Categories key={category.id} onClick={() => onClickCategory(category.nome)} isActive={clickedCategory} active={category.ativo}>{category.nome}</Categories>
                        })}
                    </CategoriesContainer>
            </Container> : <Services feed={goToFeed}/>}
            <SecondaryMenu />
            <Footer />
        </MainContainer>
    )
}

export default ServicesListPage;