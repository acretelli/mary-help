
import styled from 'styled-components';


export const BlogContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    @media(max-width: 800px) {
        display: block;
    }
`

export const PostContainer = styled.div`
    height: 100%;
    width: 70%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width: 800px) {
        width: 100%;
    }
`

export const Sidebar = styled.div`
    height: 100%;
    width: 30%;
    margin: 0;
    background-color: #fff;
    
    @media(max-width: 800px) {
        width: 100%;
    }

`
export const BlogPostsContainer = styled.div`
    margin: 0 auto;

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
    margin: 16px auto;
    font-weight: 700;
    color: #8130a2;
`

export const BlogParagraph = styled.p`
    color: #4e4e4e;
`

export const PostParagraph = styled.p`
    padding: 16px 0;
    color: #4e4e4e;
    line-height: 150%;
`

export const BlogImg = styled.img`
    height: 160px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`

export const PostImg = styled.img`
    height: 300px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`
export const PostTitle = styled.h1`
    margin: 16px auto;
    font-weight: 700;
    color: #8130a2;
`
