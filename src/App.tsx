// src/App.tsx
import {
    Box,
    CssBaseline,
    Paper,
    Stack,
    ThemeProvider,
    Typography,
} from "@mui/material";
import "./App.css";
import { DarkTheme } from "./theme";
import { Header, Sidebar } from "./components/layout";
import { GlassSurface } from "./components/surfaces/GlassSurface";
import { MDXProvider } from "@mdx-js/react";
import Introduction from "./articles/Introduction.mdx";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "./config";

const App = () => (
    <MDXProvider>
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline />
            <Box height="100vh">
                <Stack direction={"column"} width={"100vw"} height={"100vh"}>
                    <Header />
                    <Stack
                        direction={"row"}
                        alignItems={"flex-start"}
                        justifyContent={"flex-start"}
                        height={`calc(100vh - ${HEADER_HEIGHT}px)`}
                        sx={{ width: "100vw" }}
                    >
                        <Sidebar />
                        <Box
                            component={"main"}
                            flexGrow={1}
                            py={2}
                            px={"20vw"}
                            sx={{
                                height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                                width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
                                overflow: "scroll",
                            }}
                        >
                            <GlassSurface sx={{ px: 2 }}>
                                <Introduction />
                            </GlassSurface>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </ThemeProvider>
    </MDXProvider>
);

export default App;
