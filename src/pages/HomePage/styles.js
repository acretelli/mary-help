import styled, { keyframes } from "styled-components";


const fadeInAndOut = keyframes`
    0% {
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: linear-gradient(to bottom, #d996f2, #dcb3fb, #e3ceff, #efe7ff, #ffffff);
    animation: ${fadeInAndOut} 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`

export const LogosContainer = styled.div`
    width: 75%;
    margin: auto;
    margin-top: -40px;
    position: relative;
`

export const FlexContainerResponsive = styled.div`
    margin: 24px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media(max-width: 800px) {
        flex-direction: column;
    }
    
`

export const IntroImg = styled.img`
    width: 50%;
    height: 400px;
    margin-left: 24px;
    object-fit: cover;
    order: 2;

    @media(max-width: 800px) {
        height: 200px;
        width: 100%;
        margin-top: 16px;
        order: 0;
    }
`

export const IntroImg2 = styled.img`
    width: 50%;
    height: 400px;
    margin-right: 24px;
    object-fit: cover;
    order: 0;

    @media(max-width: 800px) {
        height: 200px;
        width: 100%;
        margin-top: 16px;
    }
`

export const Retangle = styled.div`
    width: 50%;
    height: 400px;
    border: 4px solid #8130a2;
    position: absolute;
    top: 16px;
    right: 16px;

    @media(max-width: 800px) {
        width: 100%;
        height: 200px;
        top: -8px;
    }
`

export const Retangle2 = styled.div`
    width: 50%;
    height: 400px;
    border: 4px solid #8130a2;
    position: absolute;
    top: 16px;
    left: -16px;

    @media(max-width: 800px) {
        width: 100%;
        height: 200px;
        top: -8px;
        left: 16px;
    }
`

export const LogoLarger = styled.img`
    margin: 16px;
    width: 240px;
`

export const LogoSmaller = styled.img`
    width: 50%;
    position: absolute;
    bottom: -16px;
    right: 0;
`

export const SectionTitle = styled.h1`
    width: 100%;
    font-size: 2.25rem;
    color: ${props => props.color};
`

export const BlogPostsContainer = styled.div`
    margin: 0 auto;

    @media(min-width: 800px) {
        display: flex;
        align-items: stretch;
        justify-content: center;
    }
`

export const BlogPost = styled.div`
    margin: 24px auto 40px auto;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);

    @media(min-width: 800px) {
        margin: 16px;
    }
`

export const BlogTextContent = styled.div`
    padding: 24px 24px 16px 24px;
`

export const BlogTitle = styled.h3`
    margin: 0 auto 16px auto;
    font-weight: 700;
    color: #8130a2;
`

export const BlogParagraph = styled.p`
    color: #8130a2;
`

export const BlogImg = styled.img`
    height: 160px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`

export const CreditsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Credits = styled.div`
    width: 100%;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media(min-width: 800px) {
        max-width: 50%;
    }
`

export const CreditPhoto = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 16px;
    object-fit: cover;
    border-radius: 50%;
`


export const LinkTextSmall = styled.p`
    display: block;
    width: 100%;
    font-size: 0.9rem;
    text-align: right;
    align-self: flex-end;
`

