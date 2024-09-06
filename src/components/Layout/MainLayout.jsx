import React, { useState, useEffect } from "react";
import { Box, Container, Snackbar, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../../utils/contexts/userContext/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import CloseIcon from "../../assets/icons/CloseIcon";

const MainLayout = ({ children, title, showFullBar, setShowFullBar }) => {
  const location = useLocation();
  const { isAuthenticated, success, error, setSuccess, setError, loading } =
    useAuth();
  if (!isAuthenticated && location.pathname !== "/")
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
      />
    );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (error || success) {
      setOpen(true);
    } else setOpen(false);
  }, [loading]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError("");
    setSuccess("");
  };
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
          sx={{ transition: "all .5s ease" }}
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
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={success || error}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
    </Box>
    // </Container>
  );
};

export default MainLayout;
