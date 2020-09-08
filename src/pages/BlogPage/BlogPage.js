import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { posts } from '../../data/posts';

import { MainContainer, FlexContainer, MainButton, Container } from '../../styles/mainStyles';

import { BlogContainer, BlogPostsContainer, BlogPost, BlogTitle, BlogImg, BlogParagraph, BlogTextContent, Sidebar, PostContainer, PostImg, PostTitle, PostParagraph } from './styles';

import adExampleSmall from '../../images/exemplo-publicidade-pequena.jpg';
import adExampleLarge from '../../images/exemplo-publicidade-grande.jpg';

const BlogPage = () => {
    const [ postId, setPostId] = useState('1234');

    const onClickShowPosts = id => {
        setPostId(id)
    }

    return (
        <MainContainer>
            <Header />
            <Container width="1024px">
                <a herf="https://www.sebrae.com.br/sites/PortalSebrae" target="_blank"><img src={adExampleLarge} alt="Imagem de publicidade do Sebrae" /></a>
                <h1>Blog</h1>
                <BlogContainer>
                {posts.map( post => {
                    if( post.id === postId ) {
                        return <PostContainer>
                            <PostImg src={post.image} alt={post.title} />
                            <PostTitle>{post.title}</PostTitle>
                            {post.text.map( paragraph => {
                                return <PostParagraph>{paragraph}</PostParagraph>
                            })}
                        </PostContainer>
                    }
                })}
                <Sidebar>
                    <a herf="https://www.sebrae.com.br/sites/PortalSebrae" target="_blank"><img src={adExampleSmall} alt="Imagem de publicidade do Sebrae" /></a>
                    <BlogPostsContainer>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1573496267478-37727ee5b694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Como fazer de uma necessidade um negócio</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2" onClick={()=> onClickShowPosts("12345")}>Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Quando mulheres se ajudam</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2" onClick={()=> onClickShowPosts("12346")}>Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                        <BlogPost>
                            <BlogImg src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <BlogTextContent>
                                <BlogTitle>Construindo uma rede solidária de mulheres</BlogTitle>
                                <BlogParagraph>Fat baby cat best buddy little guy weigh eight pounds but take up a full-size bed carefully drink from water glass and then spill it everywhere.</BlogParagraph>
                                <MainButton backgroundColor="#8130a2" onClick={()=> onClickShowPosts("12347")}>Continuar lendo</MainButton>
                            </BlogTextContent>
                        </BlogPost>
                </BlogPostsContainer>

                </Sidebar>

                </BlogContainer>
            </Container>
            
            <Footer />
        </MainContainer>
    )
}

export default BlogPage;