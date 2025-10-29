import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LoadingBarContainer } from "react-top-loading-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LoadingBarContainer
        props={{
          color: "#ffffff",
          height: 2,
          shadow: false,
          waitingTime: 500,
          transitionTime: 200,
        }}
      >
        <App />
      </LoadingBarContainer>
    </AuthProvider>
  </QueryClientProvider>,
);
