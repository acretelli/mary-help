import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../images/MaryHelp.png';
import iconBack from '../../images/arrow_back.svg';

import { Form, MainButton } from '../../styles/mainStyles';

import { ButtonsContainer, Input, RadioContainer, TextArea } from './styles';

export const FormAddress = () => { 
    const [ basicInfo, setBasicInfo ] = useState(true);
    const history = useHistory();
    
    const handleInfo = (e) => {
        e.preventDefault();
        setBasicInfo(!basicInfo);
    }
    
    const goToFeedPage = () => {
        history.push(`/feed`)
    }

    return (
        <Form onSubmit={goToFeedPage}>
                    
            <Input type="text" name="state" id="state" placeholder="Estado" />
                     
            <Input type="text" name="city" id="city" placeholder="Cidade" />
    
            <Input type="text" name="CEP" id="CEP" placeholder="CEP" />
                        
            <Input type="text" name="address" id="address" placeholder="Endereço" />
                    
            <Input type="text" name="addressType" id="addressType" placeholder="Tipo de endereço (comercial/residencial)" />
    
            <RadioContainer>
                <p>Pessoa física ou jurídica</p>
                <input type="radio" id="legal" name="legal" value="person" />
                <label htmlFor="person">Física</label>

                <input type="radio" id="legal" name="legal" value="company" />
                <label htmlFor="company">Jurídica</label>
            </RadioContainer>

            <Input type="text" name="profileImg"  id="profileImg" placeholder="Adicionar imagem para perfil" />

            <TextArea name="textarea"  id="textarea" placeholder="Descrição do perfil" />
    
            <ButtonsContainer>
                <MainButton backgroundColor="#c85cff" type="submit" >Salvar</MainButton>
            </ButtonsContainer>
        </Form>
    )
}
