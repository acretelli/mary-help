import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import { MainContainer, FlexContainer } from '../../styles/mainStyles';

const HowToUsePage = () => {
    return (
        <MainContainer>
            <Header />
            <h1>Aqui vai como usar</h1>
            <Footer />
        </MainContainer>
    )
}

export default HowToUsePage;