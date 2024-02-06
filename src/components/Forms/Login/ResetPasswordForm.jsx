import React, { useState } from 'react'
import { Box, Button, Grid, Snackbar, Stack, TextField, Typography } from "@mui/material";
import Logo from "../../../assets/icons/logo";
import Tick from '../../../assets/icons/Tick';
import CloseIcon from '../../../assets/icons/CloseIcon';

const ResetPasswordForm = () => {
    const [step, setStep] = useState(1)
    const [open, setOpen] = useState(false)
  return (
    <Stack
      px="20px"
      bgcolor="#060C2C"
      height="100dvh"
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      gap={{ xs: "20px", sm: "30px" }}
    >
      <Box mb={{ xs: "40px", sm: "70px" }}>
        <Logo />
      </Box>
      <Box
        p={{ xs: "20px", sm: "30px" }}
        gap={{ xs: "20px", sm: "30px" }}
        // mb={{ xs: "20px", sm: "30px" }}
        width="100%"
        maxWidth="600px"
        height={{ xs: "fit-content", sm: "fit-content" }}
        // maxHeight="360px"
        borderRadius="20px"
        bgcolor="#fff"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "space-between",
        }}
      >
        {step === 1 ? (
          <>
            <Box width="100%">
              <Typography
                fontSize="22px"
                color="#79747E"
                textAlign="center"
                mb="10px"
              >
                Reset your password
              </Typography>
              <Typography
                fontSize="16px"
                color="#79747E"
                sx={{ width: { xs: "100%", md: "480px" }, textAlign: "center" }}
              >
                We will send you a password reset link if we find the email you
                provide associated to an existing account.
              </Typography>
            </Box>
            <Box
              sx={{
                gap: { xs: "20px", sm: "30px" },
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                  },
                }}
                placeholder="Enter your email"
              />
            </Box>
          </>
        ) : (
          <Box>
            <Typography
              fontSize="22px"
              color="#79747E"
              textAlign="center"
              mb="10px"
            >
              Reset your password
            </Typography>
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                },
              }}
              type="password"
              fullWidth
              id="password"
              label="Password"
              placeholder="Password"
            />
            <Grid
              container
              p="10px"
              display="flex"
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick />
                <Typography fontSize="12px" color="#49454F">
                  At least one lowercase letter
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick />
                <Typography fontSize="12px" color="#49454F">
                  Minimum of 8 characters
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick color="#79747E" />
                <Typography fontSize="12px" color="#49454F">
                  At least one uppercase character
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick />
                <Typography fontSize="12px" color="#49454F">
                  Must contain a number or special character
                </Typography>
              </Grid>
            </Grid>
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                },
              }}
              type="password"
              fullWidth
              id="password"
              label="Re-Enter your password"
              placeholder="Re-Enter your password"
            />
            <Box p="10px" display="flex" alignItems="center" gap="10px">
              <Tick />
              <Typography fontSize="12px" color="#49454F">
                Passwords match each other
              </Typography>
            </Box>
          </Box>
        )}
        {step === 1 ? (
          <Button
            variant="contained"
            height="40px"
            sx={{
              width: { xs: "100%", sm: "fit-content" },
              fontSize: "14px",
              color: "#fff",
              bgcolor: "#6750A4",
              textTransform: "capitalize",
              borderRadius: "20px",
              p: "10px 24px",
              "&:hover": {
                bgcolor: "#6750A4",
              },
            }}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Send reset email
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "200px" },
              mb: "20px",
              height: "40px",
              fontSize: "14px",
              color: "#fff",
              bgcolor: "#6750A4",
              textTransform: "capitalize",
              borderRadius: "20px",
              p: "10px 24px",
              "&:hover": {
                bgcolor: "#6750A4",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Confirm
          </Button>
        )}
        {step === 1 && (
          <Box
            //   mb="12px"
            display="flex"
            alignItems={"center"}
            gap="10px"
          >
            <Typography fontSize="14px" color="#000" fontFamily={"Roboto"}>
              Change your mind?
            </Typography>
            <Typography
              fontSize="14px"
              color="#6750A4"
              sx={{ cursor: "pointer" }}
            >
              Back to login page
            </Typography>
          </Box>
        )}
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { borderRadius: "30px" } }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Password reset successful"
        action={<CloseIcon />}
      />
    </Stack>
  );
}

export default ResetPasswordForm
