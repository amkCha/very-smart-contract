import { createClient, WagmiConfig } from "wagmi";
import { goerli, lineaTestnet, localhost, sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicTabs from "./TabPanel";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

const infuraId = import.meta.env.VITE_INFURA_KEY;
const chains = [sepolia, goerli, lineaTestnet, localhost];

// Wagmi client
const client = createClient(
  getDefaultClient({
    appName: "Very Smart Contract",
    infuraId,
    chains
  })
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <CssBaseline />
          <BasicTabs />
        </ConnectKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default App;
