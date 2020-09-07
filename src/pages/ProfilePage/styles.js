import styled from "styled-components";

export const UserImg = styled.img`
    display: block;
    margin: 16px auto 8px auto;
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
`

export const Score = styled.div`
    font-size: 1.5rem;
`

export const IconBtn = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

export const Box = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 8px 0;
    margin: 16px;
    border-radius: 8px;
    background-color: #fffdfd;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
    position: relative;
`

export const BoxTitle = styled.p`
    width: 100%;
    padding: 8px 16px;
    border-bottom: 1px solid #BDBDBD;
`

export const BoxContent = styled.div`
    width: 100%;
    padding: 16px;
`

export const BoxTopic = styled.p`
    padding: 4px 0;
`
