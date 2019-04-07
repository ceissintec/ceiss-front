import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { init } from '@sentry/browser';
import './styles/app.scss';
import SentryWrapper from './components/SentryWrapper';

init({
  dsn: 'https://77b52c0a06d24b2f820dc3ab1679d189@sentry.io/1427915',
});

ReactDOM.render(
  <SentryWrapper>
    <App />
  </SentryWrapper>,
  document.querySelector('#root'),
);
