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
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Logo from "../../../assets/icons/Logo";

function LoginForm() {
  const dispatch = useDispatch();
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: products } = useGetProducts();

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill all the fields");
    } else {
      try {
        const data = {
          email,
          password,
        };
        const res = await loginAdmin(data).unwrap();
        console.log(res);
        dispatch(setUser(res));
        navigate("/admin");
      } catch (error) {
        toast.error(error.data.message);
        console.log(error);
      }
    }
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
        <Typography
          fontSize="22px"
          color="#79747E"
          mb={{ xs: "30px", sm: "60px" }}
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
            placeholder="Enter your password"
          />
        </Box>
        <Button
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
            "&:hover": {
              bgcolor: "#6750A4",
            },
          }}
          onClick={() => navigate("/")}
        >
          Login to your account
        </Button>
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
