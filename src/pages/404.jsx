import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const NotFoundPage = () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <Block strong inset>
      <p>Desculpa</p>
      <p>Essa rota não existe.</p>
    </Block>
  </Page>
);

export default NotFoundPage;
