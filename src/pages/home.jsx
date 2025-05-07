import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Link,
  Block,
  List,
  ListItem,
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Exemplo prático Framework7</NavTitle>
      <NavTitleLarge>Exemplo prático Framework7</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block>
  <div className="logo-container">
    <img
      src="https://www.univali.br/Style%20Library/img/logo.png"
      className="logo"
      alt="Mic logo"
    />
  </div>
</Block>

    <List strong inset dividersIos>


      <ListItem
        title="Tela exemplo Login"
        badgeColor='red'
         link="#my-login-screent"
        loginScreenOpen="#my-login-screen"
      />

      <ListItem
        title="Rota dinamica"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />

      <ListItem
        title="Rota não existente"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Requisição Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
);
export default HomePage;