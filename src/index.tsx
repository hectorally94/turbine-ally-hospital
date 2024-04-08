import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { keycloak, ReactKeycloakProvider } from './keycloak';

import ThemeProvider from './MyCustomTheme/ThemeContext';
import Background from './MyCustomTheme/Background';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<ReactKeycloakProvider
  authClient={keycloak}
  initOptions={{ onLoad: 'login-required' }}
>
<ThemeProvider>
        <Background>
          <App />
        </Background>
      </ThemeProvider>
</ReactKeycloakProvider>,);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
