import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import "@fontsource/roboto";
import TwoFactorAuth from "./components/Forms/Login/TwoFactorAuth";
import SignupForm from "./components/Forms/Signup/SignupForm";
import MainLayout from "./components/Layout/MainLayout";
import Shipment from "./pages/Shipment/Shipment";
import ShipmentHistory from "./pages/Shipment/ShipmentHistory";
import { useEffect, useState } from "react";
import CreateShipment from "./pages/Shipment/CreateShipment";
import ShipmentDetails from "./pages/Shipment/ShipmentDetails";
import ShopForMe from "./pages/Shop for me/ShopForMe";
import Customer from "./pages/Users/Customer";
import Staff from "./pages/Users/Staff";
import Users from "./pages/Users/Users";
import CreateCustomer from "./pages/Users/CreateCustomer";
import CreateStaff from "./pages/Users/CreateStaff";
import UserDetailsPage from "./pages/Users/UserDetailsPage";

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scroll(0, 0)
  })
  const themeOptions = {
    palette: {
      primary: {
        main: "#6750A4",
      },
    },
    Typography: {
      fontFamily: "roboto",
    },
  };
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
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Dashboard"
                >
                  <Dashome />
                </MainLayout>
              }
              // element={admin !== null ? <Layout /> : <Navigate to="/" />}
            />

            <Route
              path="/shipment"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Shipments"
                >
                  <Shipment />
                </MainLayout>
              }
            />
            <Route
              path="/shipment/history"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Shipments History"
                >
                  <ShipmentHistory />
                </MainLayout>
              }
            />
            <Route
              path="/shipment/history/:shippingid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Shipment Details"
                >
                  <ShipmentDetails />
                </MainLayout>
              }
            />
            <Route
              path="/blog"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Blog"
                ></MainLayout>
              }
            />
            <Route
              path="/shop-for-me"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Shop For Me"
                >
                  <ShopForMe />
                </MainLayout>
              }
            />
            <Route
              path="/payments"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payments"
                ></MainLayout>
              }
            />
            <Route
              path="/get-a-quote"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Get A Quote"
                ></MainLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Settings"
                ></MainLayout>
              }
            />
            <Route
              path="/users-customers"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Customers"
                >
                  <Users showFullBar={showFullBar} />
                </MainLayout>
              }
            >
              <Route path="" element={<Customer />} />
            </Route>
            <Route
              path="users-staffs"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Staffs"
                >
                  <Users>
                    <Staff />
                  </Users>
                </MainLayout>
              }
            />
            <Route
              path="/users-customers/:userid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Customer Details"
                >
                    <UserDetailsPage />
                </MainLayout>
              }
            />
            <Route
              path="/users-staffs/:userid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Customer Details"
                >
                    <UserDetailsPage userType="Staff" />
                </MainLayout>
              }
            />
            <Route
              path="/orders"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Confirmed Orders"
                >
                  <Orders showFullBar={showFullBar} />
                </MainLayout>
              }
            >
              <Route path="" element={<Confirmed />} />
              <Route path="draft-detail" element={<DraftDetails />} />
            </Route>
            <Route
              path="orders/create-new-order"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                >
                  <CreateOrders />
                </MainLayout>
              }
            />
            <Route
              path="users-customers/adding-new-customer"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Adding New Customer"
                >
                  <CreateCustomer />
                </MainLayout>
              }
            />
            <Route
              path="users-staffs/adding-new-staff"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Adding New Staff"
                >
                  <CreateStaff />
                </MainLayout>
              }
            />
            <Route
              path="shipment/add-new-shipment"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Create New Shipment"
                >
                  <CreateShipment />
                </MainLayout>
              }
            />
            <Route
              path="order-drafts"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Draft Orders"
                >
                  <Orders>
                    <Drafts />
                  </Orders>
                </MainLayout>
              }
            />

            <Route
              path="order-requests"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Requested Orders"
                >
                  <Orders>
                    <OrderRequests />
                  </Orders>
                </MainLayout>
              }
            />
            <Route
              path="orders/:orderid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={
                    location?.state?.type === "shop for me"
                      ? "Shop For Me Order Details"
                      : "Order Details"
                  }
                >
                  <OrderDetails />
                </MainLayout>
              }
            />
            <Route
              path="order-drafts/:draftid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Draft Order Details"
                >
                  <OrderDetails />
                </MainLayout>
              }
            />
            <Route
              path="order-requests/:requestid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Request Details"
                >
                  <OrderDetails />
                </MainLayout>
              }
            />
            <Route
              path="/login"
              element={admin !== null ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/reset-password" element={<Login />} />
            <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
          </Routes>
        </QueryClientProvider>
        <Toaster containerClassName="font-roboto" />
      </>
    </ThemeProvider>
  );
}

export default App;
