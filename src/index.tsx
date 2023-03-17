import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchFilterProvider from "context/filtersContext";
import AuthProvider from "context/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      retry: false,
    },
  },
});
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <SearchFilterProvider>
              <App />
            </SearchFilterProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
