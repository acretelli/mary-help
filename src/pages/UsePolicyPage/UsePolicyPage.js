import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import { MainContainer, Container } from '../../styles/mainStyles';

const UsePolicyPage = () => {
    const [ usePolicy, setUsePolicy ] = useState()
    
    const getPolicy = async() => {
        try {
            const response = await axios.get("https://maryhelp.herokuapp.com/privacidade")
            setUsePolicy(response.data.result)
        }
        catch(err) {
            console.log(err.message)
        }
    }
    
    useEffect(() => {
        getPolicy();
    }, [])

    return (
        <MainContainer>
            <Header />
            <Container width="600px">
                <h1>Política de uso</h1>
                {usePolicy && usePolicy.map( policy => {
                    return <div>
                        <h3>{policy.titulo}</h3>
                        <p>{policy.descricao}</p>
                    </div>
                })}
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default UsePolicyPage;