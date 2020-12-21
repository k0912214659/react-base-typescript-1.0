import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@CSS/index.css';

async function renderMainApp(): Promise<void> {
  const mainAppProvider = (await import('@Providers/MainAppProvider')).default;
  const Provider = mainAppProvider({
    Router: BrowserRouter,
    appKey: 520,
    routerProps: {
      basename: '',
    },
  });
  ReactDOM.render(<Provider />, document.getElementById('root'));
}

renderMainApp();
