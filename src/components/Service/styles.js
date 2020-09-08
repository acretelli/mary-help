
import styled from 'styled-components';

export const ServiceContainer = styled.div `
    width: 100%;
    max-width: 400px;
    margin-bottom: 24px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px rgba(50, 50, 50, 0.5);
`

export const UserContainer = styled.div `
    padding: 8px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`

export const UserPhoto = styled.img `
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const UserName = styled.h4 `
`

export const ServiceContent = styled.div `
    width: 100%;
    padding: 24px;
    position: relative;
`

export const ServiceTitle = styled.h3 `
    max-width: 100%;
    margin: 8px 0 16px 0;
    text-align: center;
`

export const ServicePrice = styled.p `
    position: absolute;
    top: 24px;
    right: 16px;

    text-align: right;
    font-weight: 700;
    color: #828282;
`

export const IconBtns = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const IconBtn = styled.img `
    text-align: center;
    margin: 8px;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
