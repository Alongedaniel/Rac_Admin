import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../../utils/contexts/userContext/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const MainLayout = ({ children, title, showFullBar, setShowFullBar }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated && location.pathname !== "/")
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
      />
    );
  return (
    // <Container maxWidth="xl" disableGutters>
    <Box display="flex" minWidth="1200px">
      <Box
        minWidth={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
        width={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
        position={"relative"}
      >
        <Box
          width={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
          bottom={0}
          top={0}
          position="fixed"
          zIndex={9999}
        >
          <Sidebar showFullBar={showFullBar} setShowFullBar={setShowFullBar} />
        </Box>
      </Box>

      <Box width="100%" overflow="hidden" position="relative">
        {!location.pathname.includes("/create-new-order") && (
          <Box
            display={location.pathname !== "/notifications" ? "block" : "none"}
            width="100%"
            position="relative"
            height="96px"
          >
            <Box
              zIndex={999}
              width="100%"
              // maxWidth={ "1400px"}
              pr={{ xs: "40px", lg: showFullBar ? "250px" : "56px" }}
              position="fixed"
            >
              <Navbar navbarTitle={title} />
            </Box>
          </Box>
        )}
        <Box width="100%">{children}</Box>
      </Box>
    </Box>
    // </Container>
  );
};

export default MainLayout;
