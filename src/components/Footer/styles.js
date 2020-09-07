import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 4px;
    background-image: linear-gradient(to left bottom, #8030a1, #8030a2, #8030a3, #8030a4, #8030a5);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

export const FooterNavigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const FooterNavigationLink = styled.li`
    padding: 8px 16px;
    font-size: 0.9rem;
    color: #FFFDFD;
    cursor: pointer;
`

export const FooterImg = styled.img`
    width: 88px;
    padding: 8px;
    cursor: pointer;
`