import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import { MainContainer, FlexContainer } from '../../styles/mainStyles';

const UsePolicyPage = () => {
    return (
        <MainContainer>
            <Header />
            <h1>Aqui vai a política de uso</h1>
            <Footer />
        </MainContainer>
    )
}

export default UsePolicyPage;