import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { setupClient } from './test';

jest.mock('connectkit', () => ({
  ConnectKitButton: () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const React = require('react');
    return React.createElement('MockButton');
  },
}));

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          refresh_token: 'refreshToken',
          access_token: 'accessToken',
        }),
    }),
  ) as jest.Mock;
});

test('renders connect button', () => {
  render(
    <WagmiConfig client={setupClient()}>
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <App />
      </MemoryRouter>
    </WagmiConfig>,
  );
  const titleElement = screen.getByText('Very Smart Contract');
  expect(titleElement).toBeInTheDocument();
});
