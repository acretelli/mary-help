import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background-color: ${props => props.backgroundColor};
    animation: ${fadeIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const LogoContainer = styled.div `
    max-width: 40%;
    margin: 24px auto;
`

export const LoginFooter = styled.div `
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  center;
`

export const LogoFooter = styled.img `
    max-width: 30%;
    margin: 8px auto;
`

export const ButtonsContainer = styled.div `
    margin-top: 40px;
`

export const FormContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: 8px 16px 48px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 48px;
    position: relative;
    text-align: center;
`

export const ForgotPasswordContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px 16px 64px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D996F2;
    border-radius: 48px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`

export const Icon = styled.img `
    float: left;
    width: 24px;
    height: 24px;
    cursor: pointer;
`