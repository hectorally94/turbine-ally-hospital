import React, { useState, useEffect, useCallback } from 'react';
import App from './App';
import LoadingComponent from './LoadingComponent';
import ThemeProvider from './MyCustomTheme/ThemeContext';
import Background from './MyCustomTheme/Background';
import ErrorComponent from './Components/ErrorComponent';

import { keycloak, ReactKeycloakProvider } from './keycloak';

const InitKeycloakProviderComponent: React.FC = () => {
  const [keycloakError, setKeycloakError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const initializeKeycloak = useCallback(async () => {
    try {
      await keycloak.init({ onLoad: 'login-required' });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Keycloak initialization error:', error);
      setKeycloakError('Failed to initialize Keycloak.');
    }
  }, []);

  useEffect(() => {
    initializeKeycloak();
  }, [initializeKeycloak]);

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      {keycloak.authenticated ? (
        <LoadingComponent />
      ) : isAuthenticated ? (
        <ThemeProvider>
          <Background>
            <App />
          </Background>
        </ThemeProvider>
      ) : (
        <ErrorComponent message={keycloakError || 'Initializing...'} />
      )}
    </ReactKeycloakProvider>
  );
};

export default InitKeycloakProviderComponent;
