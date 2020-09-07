import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import logo from '../../images/MaryHelp.png';
import iconBack from '../../images/arrow_back.svg';

import { Form, MainButton } from '../../styles/mainStyles';

import { ButtonsContainer, Input, RadioContainer, TextArea } from './styles';

export const FormUser = (props) => { 
    const [ basicInfo, setBasicInfo ] = useState(true);
    const history = useHistory();
    const { form, onChange, resetForm } = useForm({
        "nome": "",
        "sobrenome": "",
        "dataNascimento": "",
        "usuario": "",
        "senha": "",
        "telefone": "",
        "email": "",
        "temfilhos": "",
        "foto" : "",
        "tipoEndereco": "",
        "cep": "",
        "uf": "",
        "cidade": "",
        "bairro": "",
        "endereco": "",
        "numero": ""
      });

    const handleInfo = async(e) => {
        e.preventDefault();
        console.log("oi")
        const body = {
            "cadastro": {
                "nome": form.nome,
                "sobrenome": form.sobrenome,
                "dataNascimento": form.dataNascimento,
                "usuario": form.usuario,
                "senha": form.senha,
                "telefone": form.telefone,
                "email": form.email,
                "temfilhos": form.temFilhos,
                "foto" : form.foto
            },
            "endereco": {
                "0": {
                    "tipoEndereco": form.tipoEndereco,
                    "cep": form.cep,
                    "uf": form.uf,
                    "cidade": form.cidade,
                    "bairro": form.bairro,
                    "endereco": form.endereco,
                    "numero": form.numero
                }
            },
            "servicosOferecidos": {
                "0": {
                    "codServico": "5f556a38363c4a936c0fd74c",
                    "tipoAtendimento": "Presencial",
                    "aceitaPermuta": "0",
                    "valor": "60.00"
                },
                "1": {
                    "codServico": "5f556a40363c4a936c0fd74d",
                    "tipoAtendimento": "Online",
                    "aceitaPermuta": "1",
                    "valor": "00.00"
                }
            }
        }

        try {
            const response = await axios.post("https://maryhelp.herokuapp.com/novo-cadastro", body)
            console.log("sucesso")
            console.log(response.data)
        }
        catch(err) {
            console.log(err.message)
        }


        // setBasicInfo(!basicInfo);
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value)
    }

    return (
        <Form onSubmit={handleInfo}>
                    
            <Input 
                type="text" 
                name="nome" 
                id="nome" 
                placeholder="Nome*"
                value={form.nome}
                onChange={handleInputChange}
            />
                    
            <Input 
                type="text" 
                name="sobrenome"
                id="sobrenome" 
                placeholder="Sobrenome*" 
                value={form.sobrenome}
                onChange={handleInputChange}
            />

            <Input 
                type="text" 
                name="dataNascimento"
                id="dataNascimento" 
                placeholder="Data de nascimento*" 
                value={form.dataNascimento}
                onChange={handleInputChange}
            />

            <Input 
                type="password" 
                name="senha" 
                id="senha" 
                placeholder="Senha*" 
                value={form.senha}
                onChange={handleInputChange}
            />

            <Input 
                type="tel" 
                name="telefone" 
                id="telefone" 
                placeholder="Telefone" 
                value={form.telefone}
                onChange={handleInputChange}
            />   

            <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email*" 
                value={form.email}
                onChange={handleInputChange}
            />

            <RadioContainer>
                <p>Tem filho(s)?</p>
                <input 
                    type="radio" 
                    id="temFilhos" 
                    name="temFilhos" 
                    value={form.temFilhos}
                    onChange={handleInputChange}
                    />
                <label htmlFor="1">Sim</label>

                <input 
                    type="radio" 
                    id="temFilhos" 
                    name="temFilhos"
                    value={form.temFilhos}
                    onChange={handleInputChange}/>
                <label htmlFor="0">Não</label>
            </RadioContainer>
                
            <Input 
                type="text" 
                name="foto"  
                id="foto" 
                placeholder="Adicionar imagem para perfil"
                value={form.foto}
                onChange={handleInputChange} />
                    
            <Input 
                type="text" 
                name="tipoEndereco" 
                id="tipoEndereco" 
                placeholder="Tipo de endereço (comercial/residencial)"
                value={form.tipoEndereco}
                onChange={handleInputChange} />
            
            <Input 
                type="text" 
                name="cep" 
                id="cep" 
                placeholder="cep"
                value={form.cep}
                onChange={handleInputChange} />

            <Input 
                type="text" 
                name="uf" 
                id="uf" 
                placeholder="Estado" 
                value={form.uf}
                onChange={handleInputChange}/>
                             
            <Input 
                type="text" 
                name="cidade" 
                id="cidade" 
                placeholder="Cidade" 
                value={form.cidade}
                onChange={handleInputChange}/>
                                
                             
            <Input 
                type="text" 
                name="bairro" 
                id="bairro" 
                placeholder="Bairro" 
                value={form.bairro}
                onChange={handleInputChange}/>
                                
            <Input 
                type="text" 
                name="endereco" 
                id="endereco" 
                placeholder="Endereço"
                value={form.endereco}
                onChange={handleInputChange} />
                                
            <Input 
                type="numero" 
                name="numero" 
                id="numero" 
                placeholder="Número"
                value={form.numero}
                onChange={handleInputChange} />
{/*         
            <TextArea 
                name="textarea"  
                id="textarea" 
                placeholder="Descrição do perfil"
                value={form.nome}
                onChange={handleInputChange} /> */}

            <ButtonsContainer>
                <MainButton backgroundColor="#c85cff">Criar conta</MainButton>
            </ButtonsContainer>
        </Form>
           
    )
}