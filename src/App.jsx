import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashome from "./pages";
import Orders from "./pages/orders";
import OrderDetails from "./pages/orders/order-details";
import Confirmed from "./pages/orders/confirmed";
import OrderRequests from "./pages/orders/requests";
import Drafts from "./pages/orders/drafts";
import DraftDetails from "./pages/orders/draft-details";
import Login from "./pages/login";
import CreateOrders from "./pages/orders/create-orders";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import '@fontsource/roboto'
import TwoFactorAuth from "./components/Forms/Login/TwoFactorAuth";

function App() {
  const themeOptions = {
    Typography: {
      fontFamily: "roboto"
    }
  }
  const theme = createTheme(themeOptions);
  const admin =
    localStorage.getItem("auth") &&
    JSON.parse(localStorage.getItem("auth")).isAdmin;
  console.log(admin);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
              // element={admin !== null ? <Layout /> : <Navigate to="/" />}
            >
              <Route path="" element={<Dashome />} />
              <Route path="orders" element={<Orders />}>
                <Route path="" element={<Confirmed />} />
                <Route path="create" element={<CreateOrders />} />
                <Route path="requests" element={<OrderRequests />} />
                <Route path="drafts" element={<Drafts />} />
                <Route path="order-detail" element={<OrderDetails />} />
                <Route path="draft-detail" element={<DraftDetails />} />
              </Route>
            </Route>

            <Route
              path="/login"
              element={admin !== null ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/reset-password"
              element={ <Login />}
            />
            <Route
              path="/two-factor-auth"
              element={ <TwoFactorAuth />}
            />
          </Routes>
        </QueryClientProvider>
        <Toaster containerClassName="font-roboto" />
      </>
    </ThemeProvider>
  );
}

export default App;
