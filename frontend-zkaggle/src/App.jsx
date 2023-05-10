import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { localhost, sepolia } from "wagmi/chains";
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
  [sepolia, localhost],
  [
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
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
