import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginAdminMutation } from "../../../services/routes/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/svg/rac-logo.svg";
import { setUser } from "../../../services/redux/authSlice";
import TextInput from "../Inputs/TextInput";
import PasswordInput from "../Inputs/PasswordInput";
import toast from "react-hot-toast";
import { useGetProducts } from "../../../utils/hooks/api/useGetProducts";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import Logo from "../../../assets/icons/Logo";
import { useAuth } from "../../../utils/contexts/userContext/UserContext";
import CloseIcon from "../../../assets/icons/CloseIcon";
import { useEffect } from "react";

function LoginForm() {
  const { login, loading, success, error, setSuccess, setError } = useAuth();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { data: products } = useGetProducts();
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

  const data = {
    email: email.toLowerCase(),
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
    localStorage.setItem("email", JSON.stringify(email));
  };

  return (
    <Stack
      px="20px"
      bgcolor="#060C2C"
      height="100dvh"
      display={"flex"}
      alignItems="center"
      justifyContent="center"
    >
      <Box mb={{ xs: "70px", sm: "100px" }}>
        <Logo />
      </Box>
      <Box
        p={{ xs: "20px", sm: "30px" }}
        mb={{ xs: "30px", sm: "40px" }}
        width="100%"
        maxWidth="600px"
        height={"fit-content"}
        // maxHeight="370px"
        borderRadius="20px"
        bgcolor="#fff"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Typography
            fontSize="22px"
            color="#79747E"
            mb={{ xs: "30px", sm: "60px" }}
            textAlign="center"
          >
            LOGIN
          </Typography>
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
              required
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                },
              }}
              placeholder="Enter your email"
            />
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                },
              }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              fullWidth
              id="password"
              label="Password"
              placeholder="Enter your password"
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              height="40px"
              sx={{
                mt: { xs: "32px", sm: "48px" },
                width: { xs: "100%", sm: "fit-content" },
                fontSize: "14px",
                color: "#fff",
                bgcolor: "#6750A4",
                textTransform: "capitalize",
                borderRadius: "20px",
                p: "10px 24px",
                // "&:hover": {
                //   bgcolor: "#6750A4",
                // },
              }}
              // onClick={() => }
            >
              {loading ? <CircularProgress /> : "Login to your account"}
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <Box mb="12px" display="flex" alignItems={"center"} gap="10px">
          <Typography fontSize="14px" color="#fff" fontFamily={"Roboto"}>
            New to RAC Logistics?
          </Typography>
          <Typography
            fontSize="14px"
            color="#6750A4"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </Typography>
        </Box>
        <Typography
          textAlign={"center"}
          fontSize="14px"
          color="#6750A4"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/reset-password")}
        >
          Forgot your password?
        </Typography>
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
      {/* <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { borderRadius: "30px" , maxWidth: '300px'} }}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        message={error}
        action={<CloseIcon />}
      /> */}
    </Stack>
    // <div className="h-screen bg-brand/100 flex flex-col items-center p-[20px] justify-center font-roboto">
    //   <div className="text-white">
    //     <img src={logo} alt="" className="h-[30px] lg:h-fit" />
    //   </div>
    //   <Typography sx={{fontSize:'34px', color: 'red'}}>Text</Typography>
    //   <div className="bg-white mt-[20px] lg:mt-[50px] w-full lg:w-[40%] p-[50px_20px] rounded-[20px] flex flex-col items-center justify-center">
    //     <p className="text-[22px]">LOGIN</p>
    //     <div className="w-full mt-[20px] lg:mt-[50px] flex flex-col items-center justify-center">
    //       <div className="w-full lg:w-[70%] flex flex-col items-center">
    //         <TextInput
    //           type="email"
    //           id="email"
    //           label="Email"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="w-full lg:w-[70%] flex flex-col items-center mt-[30px] relative">
    //         <PasswordInput
    //           id="password"
    //           label="Password"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       {/* {products?.map((product) => (<p className="text-[22px]">{product.price}</p>))} */}
    //       <div className="mt-[50px]">
    //         <button
    //           disabled={isLoading && true}
    //           onClick={() => navigate('/admin')}
    //           className="bg-brand/200 disabled:bg-gray-400 text-white font-roboto p-[8px_25px] rounded-full"
    //         >
    //           {isLoading ? "Loading..." : "Login to your account"}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LoginForm;
