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
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import "@fontsource/roboto";
import TwoFactorAuth from "./components/Forms/Login/TwoFactorAuth";
import SignupForm from "./components/Forms/Signup/SignupForm";
import MainLayout from "./components/Layout/MainLayout";
import Shipment from "./pages/Shipment/Shipment";
import ShipmentHistory from "./pages/Shipment/ShipmentHistory";
import { useEffect, useState } from "react";
import CreateShipment from "./pages/Shipment/CreateShipment";
import ShipmentDetails from "./pages/Shipment/ShipmentDetails";
import ShopForMe from "./pages/ShopForMe/ShopForMe";
import Customer from "./pages/Users/Customer";
import Staff from "./pages/Users/Staff";
import Users from "./pages/Users/Users";
import CreateCustomer from "./pages/Users/CreateCustomer";
import CreateStaff from "./pages/Users/CreateStaff";
import UserDetailsPage from "./pages/Users/UserDetailsPage";
import TrackShipment from "./pages/Shipment/TrackShipment/TrackShipment";
import TrackShipmentDetails from "./pages/Shipment/TrackShipment/TrackShipmentDetails";
import PaymentHistory from "./pages/Payments/PaymentHistory";
import PaymentInvoice from "./pages/Payments/PaymentInvoice";
import GetAQuote from "./pages/GetAQuote/GetAQuote";
import CreateOrder from "./components/order/CreateOrder";
import NotificationsPage from "./pages/Notification/NotificationsPage";
import Settings from "./pages/Settings/Settings";
import CommunicationPreferences from "./pages/Settings/CommunicationPreferences";
import Security from "./pages/Settings/Security";
import ExchangeRates from "./pages/Settings/ExchangeRates";
import AllShipmentFees from "./pages/Settings/AllShipmentFees";
import ProcurementFees from "./pages/Settings/ProcurementFees";
import PaymentMethods from "./pages/Settings/PaymentMethods";
import CustomerSupport from "./pages/Settings/CustomerSupport";
import WarehouseLocations from "./pages/Settings/WarehouseLocations";
import ShippingMethods from "./pages/Settings/ShippingMethods";
import Home from "./pages/Home/Home";
import { useAuth } from "./utils/contexts/userContext/UserContext";
import RequireAuth from "./components/Layout/RequireAuth";
import { resetLogoutTimer } from "./utils/hooks/api/auth/AutoLogout";
import OrderHome from "./components/order";
import OrderRequestComp from "./components/order/order-request";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  });
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
  resetLogoutTimer();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const { isAuthenticated } = useAuth();
  const [showFullBar, setShowFullBar] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Home"
                >
                  <Home />
                </MainLayout>
              }
              // element={admin !== null ? <Layout /> : <Navigate to="/" />}
            />

            <Route
              path="/shipments"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Shipments"
                >
                  <ShipmentHistory all />
                </MainLayout>
              }
            />
            <Route
              path="/shipments/users"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={`${location?.state?.name}'s Shipments`}
                >
                  <ShipmentHistory />
                </MainLayout>
              }
            />
            <Route
              path="/notifications"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                >
                  <NotificationsPage />
                </MainLayout>
              }
            />
            {/* <Route
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
            /> */}
            <Route
              path="/shipments/:shippingid"
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
              path="/payment-history"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payment History"
                >
                  <PaymentHistory all />
                </MainLayout>
              }
            />
            <Route
              path="/payment-history/users"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={`${location?.state?.name}'s Payment History`}
                >
                  <PaymentHistory />
                </MainLayout>
              }
            />
            <Route
              path="/payment-history/:id"
              element={
                <PaymentInvoice
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                />
              }
            />
            <Route
              path="/get-a-quote"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Get A Quote"
                >
                  <GetAQuote />
                </MainLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Settings"
                >
                  <Settings />
                </MainLayout>
              }
            />
            <Route
              path="/settings/my_account_profile_information"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Profile Information"
                >
                  <UserDetailsPage userType="Staff" currentUser />
                </MainLayout>
              }
            />
            <Route
              path="/settings/my_account_communication_preferences"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Communication Preferences"
                >
                  <CommunicationPreferences />
                </MainLayout>
              }
            />
            <Route
              path="/settings/my_account_security"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Security"
                >
                  <Security />
                </MainLayout>
              }
            />
            <Route
              path="/settings/rac_exchange_rates"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payments"
                >
                  <ExchangeRates />
                </MainLayout>
              }
            />
            <Route
              path="/settings/all_shipment_fees"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payments"
                >
                  <AllShipmentFees />
                </MainLayout>
              }
            />
            <Route
              path="/settings/procurement_fees"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payments"
                >
                  <ProcurementFees />
                </MainLayout>
              }
            />
            <Route
              path="/settings/payment_methods"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Payments"
                >
                  <PaymentMethods />
                </MainLayout>
              }
            />
            <Route
              path="/settings/warehouse_locations"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="General"
                >
                  <WarehouseLocations />
                </MainLayout>
              }
            />
            <Route
              path="/settings/shipping_methods"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="General"
                >
                  <ShippingMethods />
                </MainLayout>
              }
            />
            <Route
              path="/settings/customer_support_details"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="General"
                >
                  <CustomerSupport />
                </MainLayout>
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
                  title="Staff Details"
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
              path="/create-new-order"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                >
                  <CreateOrder />
                </MainLayout>
              }
            />
            <Route
              path="/orders/users"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={`${location?.state?.name}'s Orders`}
                >
                  <Box
                    sx={{ px: "50px", pt: "30px", mb: "16px", height: "100%" }}
                  >
                    <OrderHome />
                  </Box>
                </MainLayout>
              }
            />
            <Route
              path="orders/:orderid/add_shipment_details_shop_for_me"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={
                    <Box>
                      <Typography fontSize="24px">
                        Add Shipment Details{" "}
                        <Typography
                          display="inline"
                          fontSize="24px"
                          color="#6750A4"
                        >
                          • Shop For Me Service
                        </Typography>
                      </Typography>
                    </Box>
                  }
                >
                  <CreateOrder shopForMe />
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
              path="shipment/track-shipment"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Tracking"
                >
                  <TrackShipment />
                </MainLayout>
              }
            />
            <Route
              path="shipment/track-shipment/:id"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title="Tracking"
                >
                  <TrackShipmentDetails />
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
              path="/order-requests/users/:userid"
              element={
                <MainLayout
                  showFullBar={showFullBar}
                  setShowFullBar={setShowFullBar}
                  title={`${location?.state?.name}'s Requested Orders`}
                >
                  <Box
                    sx={{ px: "50px", pt: "30px", mb: "16px", height: "100%" }}
                  >
                    <OrderRequestComp />
                  </Box>
                </MainLayout>
              }
            />
            <Route
              path="orders/:id"
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
              path="order-requests/:id"
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
              element={
                <RequireAuth>
                  <Login />
                </RequireAuth>
              }
            />
            <Route
              path="/sign-up"
              element={
                <RequireAuth>
                  <SignupForm />
                </RequireAuth>
              }
            />
            <Route
              path="/reset-password"
              element={
                <RequireAuth>
                  <Login />
                </RequireAuth>
              }
            />
            <Route
              path="/two-factor-auth"
              element={
                <RequireAuth>
                  <TwoFactorAuth />
                </RequireAuth>
              }
            />
          </Routes>
        </QueryClientProvider>
        <Toaster containerClassName="font-roboto" />
      </>
    </ThemeProvider>
  );
}

export default App;
