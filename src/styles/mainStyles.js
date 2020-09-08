import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    padding: 80px 24px 104px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${props => props.backgroundColor};
    overflow-x: hidden;
`

export const Container = styled.div`
    width: 100%;
    max-width: ${props => props.width};
    min-height: ${props => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const FlexContainer = styled.div`
    margin: 24px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const TextSmall = styled.p`
    width: 100%;
    font-size: 0.9rem;
    color: #828282;
`

export const TextLarge = styled.p`
    width: 100%;
    margin: 16px auto;
    font-size: 1.15rem;
    line-height: 150%;
    color: #828282;
`

export const LinkTextSmall = styled.p`
    width: 100%;
    font-size: 0.9rem;
    text-decoration: underline;
    color: ${props => props.color};
    cursor: pointer;
`

export const LinkTextLarge = styled.p`
    width: 100%;
    margin: 8px auto;
    font-size: 1.15rem;
    line-height: 150%;
    text-decoration: underline;
    color: ${props => props.color};
    cursor: pointer;
`

export const MainButton = styled.button`
    min-width: 160px;
    margin: 24px auto;
    padding: 12px;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    color: #FFF;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
`

export const Form = styled.form`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
