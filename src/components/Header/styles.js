import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 8px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-image: linear-gradient(to left bottom, #8030a1, #8030a2, #8030a3, #8030a4, #8030a5);
`

export const HeaderWrapper = styled.div`
    max-width: 1024px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderLogo = styled.div`
    padding: 8px;
    cursor: pointer;
`

export const MainNavigation = styled.nav`
    width: 100%;
    min-height: 100vh;
    padding: 16px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-image: linear-gradient(to left bottom, #8030a1, #8030a2, #8030a3, #8030a4, #8030a5);
`

export const MainNavigationLink = styled.li`
    padding: 16px;
    text-align: center;
    color: #fffdfd;
    border-bottom: 0.2px solid #fffdfd;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        opacity: 0.6;
    }
`

export const UserNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const UserName = styled.h4`
    font-size: 1.5;
    color: #fffdfd;
    cursor: pointer;
`

export const UserImg = styled.img`
    width: 56px;
    height: 56px;
    margin: 0 8px 0 0;
    border-radius: 50%;
    cursor: pointer;
`

export const MenuIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 4px;
    cursor: pointer;
`

export const CloseIcon = styled.img`
    width: 16px;
    height: 16px;
    position: fixed;
    top: 16px;
    right: 16px;
    cursor: pointer;
`

export const LogoImg = styled.img`
    width: 104px;
    margin: 0 8px;
    cursor: pointer;
`

export const HeaderButton = styled.button`
    margin: 8px 0;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    color: #FFF;
    font-weight: 700;
    text-align: center;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
`