import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element');
}
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>
);
