import styled from "styled-components";

export const BoxButton = styled.div`
    min-width: calc(100%/2 - 8px);
    margin: 0 8px 8px 8px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(to left bottom, #8030a1, #8030a2, #8030a3, #8030a4, #8030a5);
    color: #fffdfd;
    font-weight: 700;
    font-size: 1.15rem;
    text-align: center;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;

    &:hover {
        opacity: 0.6;
    }
    &:active {
        opacity: 0.6;
    }
`

export const BoxSingleButton = styled.div`
    width: 100%;
    height: 64px;
    margin: 16px auto;
    padding: 24px;
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

export const BoxCategoriesContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const BoxText = styled.p`
    height: 40px;
`

export const BoxImg = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 16px;
`

export const UserImg = styled.img`
    margin: 16px;
    width: 160px;
    height: 160px;
    object-fit: cover;
`
