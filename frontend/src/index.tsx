import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient, WagmiConfig } from 'wagmi';
import { goerli, lineaTestnet, sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import NFTS from './components/NFT/NFTS';
import Creator from './components/Creator/Creator';
import Selector from './components/Selector';

const chains = [sepolia, goerli, lineaTestnet];

const client = createClient(
  getDefaultClient({
    appName: 'Very Smart Contract',
    chains,
  }),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Selector />} />
            <Route path="/nfts" element={<NFTS />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/coin" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
