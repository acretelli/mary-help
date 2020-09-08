import styled from "styled-components";

export const SecondaryMenuContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 56px;
    left: 0;
    right: 0;
`

export const SecondaryMenuWrapper = styled.div`
    max-width: 300px;
    padding: 16px;
    border-radius: 40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to left bottom, #8030a1, #8030a2, #8030a3, #8030a4, #8030a5);
`

export const BoxSingleButton = styled.div`
    margin: 0 8px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
    background-color: #f9ebff;
    color: #434343;
    font-weight: 700;
    font-size: 1.15rem;
    text-align: center;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.6;
    }
    &:active {
        opacity: 0.6;
    }
`

export const MenuIcon = styled.img`
    width: 32px;
    height: 32px;
    margin: 0 8px;
    cursor: pointer;
`
