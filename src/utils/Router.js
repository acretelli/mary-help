import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ScrollTop from './ScrollTop';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import FeedPage from '../pages/FeedPage/FeedPage';
import MessagesPage from '../pages/MessagesPage/MessagesPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import HowToUsePage from '../pages/HowToUsePage/HowToUsePage';
import UsePolicyPage from '../pages/UsePolicyPage/UsePolicyPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ServicesListPage from '../pages/ServicesListPage/ServicesListPage';
import PostServicePage from '../pages/PostServicePage/PostServicePage';
import SolicitationsPage from '../pages/SolicitationsPage/SolicitationsPage';
import NotificationsPage from '../pages/NotificationsPage/NotificationsPage';

const Router = () => {
  
  return (
    <BrowserRouter>
      <ScrollTop />
        <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route exact path="/login">
              <LoginPage />
          </Route>
          <Route exact path="/signup">
              <SignUpPage />
          </Route>
          <Route exact path="/profile">
              <ProfilePage />
          </Route>
          <Route exact path="/feed">
              <FeedPage />
          </Route>
          <Route exact path="/feed/:id">
              <ServicesListPage />
          </Route>
          <Route exact path="/post">
              <PostServicePage />
          </Route>
          <Route exact path="/solicitations">
              <SolicitationsPage />
          </Route>
          <Route exact path="/notifications">
              <NotificationsPage />
          </Route>
          <Route exact path="/messages">
              <MessagesPage />
          </Route>
          <Route exact path="/blog">
              <BlogPage />
          </Route>
          <Route exact path="/how-to-use">
              <HowToUsePage />
          </Route>
          <Route exact path="/use-policy">
              <UsePolicyPage />
          </Route>
          <Route path="/">
            <p>Ai que loucura! Deu TUDO errado!</p>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;