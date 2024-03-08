/* REACT */
import React from "react";
import ReactDOM from "react-dom/client";

/* REACT QUERY */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

/* CHAKRA */
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* COMPONENTS */
import theme from "./theme.ts";

/* STYLE */
import "./index.css";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
            <ChakraProvider theme={ theme }>
                <ColorModeScript initialColorMode={ theme.config.initialColorMode } />
                <QueryClientProvider client={ queryClient }>
                    <RouterProvider router={ router } />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </ChakraProvider>
    </React.StrictMode>,
)
