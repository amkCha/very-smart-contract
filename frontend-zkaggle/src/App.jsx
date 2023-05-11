import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicTabs from "./TabPanel";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

const { chains, provider } = configureChains(
  [sepolia],
  [infuraProvider({ apiKey: import.meta.env.VITE_INFURA_KEY }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Very Smart Contract",
  chains
});
const wagmiClient = createClient({
  connectors,
  provider
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <CssBaseline />
          <BasicTabs />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default App;
