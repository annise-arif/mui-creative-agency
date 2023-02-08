import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { theme } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
