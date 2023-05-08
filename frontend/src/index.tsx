import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient, WagmiConfig } from 'wagmi';
import { sepolia, goerli, lineaTestnet } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const chains = [sepolia, goerli, lineaTestnet];
const infuraId = process.env.REACT_APP_INFURA_API_KEY;

const client = createClient(
  getDefaultClient({
    appName: 'Very Smart Contract',
    infuraId,
    chains,
  }),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
