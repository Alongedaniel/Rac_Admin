import { Box, Button, CircularProgress, Grid, IconButton, MenuItem, Modal, Radio, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CardWrapper from "../../components/order/components/CardWrapper";
import CallIcon from "../../assets/icons/CallIcon";
import GmailIcon from "../../assets/icons/GmailIcon";
import Edit from "../../assets/icons/Edit";
import Location from "../../assets/icons/Location";
import ResetIcon from "../../assets/icons/ResetIcon";
import LockIcon from "../../assets/icons/LockIcon";
import UserProfile from "../../assets/icons/UserProfile";
import PinnedIcon from "../../assets/icons/PinnedIcon";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import EditIcon from "../../assets/icons/EditIcon";
import ChangeIcon from "../../assets/icons/ChangeIcon";
import KeyIcon from "../../assets/icons/KeyIcon";
import UserOrders from "./components/UserOrders";
import UserActivities from "./components/UserActivities";
import UserModals from "./components/UserModals";
import { cities, countries, countryCodes, states } from "./constants";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import AdditionInfoForm from "./components/AdditionInfoForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBack from "../../assets/icons/ArrowBack";
import EyeIconOpen from "../../assets/icons/EyeIconOpen";
import Tick from "../../assets/icons/Tick";
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import { useAuth } from "../../utils/contexts/userContext/UserContext";
import moment from "moment";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";

const UserDetailsPage = ({ userType = "Customer", currentUser = false }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const id = location?.state?.id
  const { data, loading } = useCustomGetRequest(`/admin/users/${id}`);
  console.log(data?.user)
  const [currentTab, setCurrentTab] = useState("Account Information");
  const [openEditProfile, setOpenEditProfile] = useState(false)
  const handleOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);
  const [openResetPassword, setOpenResetPassword] = useState(false)
  const handleOpenResetPassword = () => setOpenResetPassword(true);
  const handleCloseResetPassword = () => setOpenResetPassword(false);
  const [accountStatus, setAccountStatus] = useState('Unverified')
  const [currentStatus, setCurrentStatus] = useState(accountStatus)
  const [openAccountStatusModal, setOpenAccountStatusModal] =
    useState(false);
  const [open, setOpen] = useState(false)
  const handleUpdateAccountStatus = () => setOpenAccountStatusModal(true);
  const handleCloseUpdateAccountStatus = () => setOpenAccountStatusModal(false);
  const [openPriviledgeModal, setOpenPriviledgeModal] = useState(false);
  const [confirmStatusChange, setConfirmStatusChange] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const tabs =
    userType === "Customer"
      ? [
          "Account Information",
          "Additional Information",
          "Activities",
          "Orders",
        ]
      : ["Account Information", "Activities"];
  return (
    <Box py="24px" px={"40px"}>
      <Box py="24px" px="30px" bgcolor="#fff" borderRadius="24px">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "16px" }}>
          <ArrowBack />
        </IconButton>
        <Box mb="30px">
          <Typography fontSize="24px" color="#1C1B1F">
            User ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              {currentUser ? user?.user?.racId : data?.user?.racId}
            </Typography>
          </Typography>
        </Box>
        <CardWrapper
          title="User Personal Information"
          removeArrows
          bottomRadius
          fullByDefault
        >
          {loading ? (
            <Box
              width="100%"
              height="230px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid
              container
              gap="24px"
              wrap="nowrap"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={1.5}>
                <Box
                  width="138px"
                  height="138px"
                  borderRadius="24px"
                  bgcolor="#CAC4D0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography fontSize="50px" color="#1D192B">
                    {currentUser
                      ? user?.user?.firstName.slice(0, 1)
                      : data?.user?.firstName.slice(0, 1)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  First Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {currentUser ? user?.user?.firstName : data?.user?.firstName}
                </p>
                <Box mt="8px">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Other Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {currentUser ? user?.user?.lastName : data?.user?.lastName}
                  </p>
                </Box>
              </Grid>
              <Grid item xs={7.5}>
                <Box mb="8px" display={"flex"} alignItems="center" gap="18px">
                  <CallIcon />
                  <Typography>
                    {
                      data?.user?.contactAddress[0]?.phoneNumber ? data?.user
                        ?.countryCode : 'N/A'
                    }{" "}
                    {currentUser
                      ? user?.user?.contactAddress[0]?.phoneNumber
                      : data?.user?.contactAddress[0]?.phoneNumber}
                  </Typography>
                </Box>
                <Box mb="8px" display={"flex"} alignItems="center" gap="18px">
                  <GmailIcon />
                  <Typography>
                    {currentUser ? user?.user?.email : data?.user?.email}
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems="center" gap="18px">
                  <Location />
                  <Typography>
                    {currentUser
                      ? `${user?.user?.contactAddress[0]?.streetAddress}, ${user?.user?.contactAddress[0]?.city}, ${user?.user?.contactAddress[0]?.state}, ${user?.user?.contactAddress[0]?.country}, ${user?.user?.contactAddress[0]?.postalCode}`
                      : data?.user?.contactAddress?.length
                      ? `${
                          data?.user?.contactAddress[0]?.streetAddress ?? ""
                        }, ${data?.user?.contactAddress[0]?.city ?? ""}, ${
                          data?.user?.contactAddress[0]?.state ?? ""
                        }, ${data?.user?.contactAddress[0]?.country ?? ""}, ${
                          data?.user?.contactAddress[0]?.postalCode ?? ""
                        }`
                      : data?.user?.country}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
        </CardWrapper>
        <CardWrapper removeArrows topRadius fullByDefault mt="8px" mb="24px">
          <Button
            onClick={handleOpenEditProfile}
            startIcon={<Edit />}
            variant="contained"
            sx={{
              bgcolor: "#B3261E",
              color: "#fff",
              height: "40px",
              borderRadius: "100px",
              width: "261px",
              textTransform: "none",
            }}
          >
            Edit User Personal Information
          </Button>
        </CardWrapper>
        <Box borderRadius={"20px"} border="1px solid #CAC4D0">
          <Box
            height="50px"
            px="16px"
            display={"flex"}
            borderRadius={"20px"}
            alignItems="center"
            border="1px solid #CAC4D0"
          >
            {tabs.map((tab) => (
              <Box
                key={tab}
                px="16px"
                display={"flex"}
                alignItems="center"
                justifyContent
                height="100%"
                onClick={() => setCurrentTab(tab)}
                sx={{
                  borderBottom:
                    currentTab === tab ? "2px solid #6750A4" : "none",
                  cursor: "pointer",
                }}
              >
                <Typography
                  fontSize="14px"
                  color={currentTab === tab ? "#6750A4" : "#49454F"}
                >
                  {tab}
                </Typography>
              </Box>
            ))}
          </Box>
          {loading ? (
            <Box
              width="100%"
              height="230px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box p="16px">
              {currentTab === "Account Information" && (
                <Grid container wrap="nowrap" gap="16px">
                  <Grid
                    p="16px"
                    sx={{ border: "1px solid #CAC4D0", borderRadius: "20px" }}
                    item
                    xs={4}
                  >
                    <Box display="flex" gap="8px" alignItems="center" mb="16px">
                      <LockIcon />
                      <Typography color="#21005D" fontSize="22px">
                        Login Details
                      </Typography>
                    </Box>
                    <Box mb="32px">
                      <Box mb="16px">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Email:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          {currentUser ? user?.user?.email : data?.user?.email}
                        </p>
                      </Box>
                      <Box>
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Password:
                        </p>

                        {data?.user?.password.split("").map((password, i) => (
                          <span
                            key={i}
                            style={{ wordBreak: "break-all" }}
                            className="font-roboto  text-[20px] text-brand/100"
                          >
                            *
                          </span>
                        ))}
                      </Box>
                    </Box>
                    <Button
                      startIcon={<ResetIcon />}
                      variant="contained"
                      onClick={handleOpenResetPassword}
                      sx={{
                        bgcolor: "#B3261E",
                        color: "#fff",
                        height: "40px",
                        borderRadius: "100px",
                        width: "202px",
                        textTransform: "none",
                      }}
                    >
                      {currentUser
                        ? "Reset My Password"
                        : "Reset User Password"}
                    </Button>
                  </Grid>
                  <Grid
                    p="16px"
                    sx={{ border: "1px solid #CAC4D0", borderRadius: "20px" }}
                    item
                    xs={4}
                  >
                    <Box display="flex" gap="8px" alignItems="center" mb="16px">
                      <UserProfile />
                      <Typography color="#21005D" fontSize="22px">
                        User Profile
                      </Typography>
                    </Box>
                    <Box mb={userType === "Staff" ? "32px" : 0}>
                      <Box mb="10px">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Status:
                        </p>
                        <Box display="flex" gap="10px" alignItems="center">
                          <p className="font-roboto  text-[20px] text-brand/100">
                            {currentUser
                              ? user?.user?.isEmailVerified
                                ? "Verified"
                                : "Unverified"
                              : data?.user?.isEmailVerified
                              ? "Verified"
                              : "Unverified"}
                          </p>
                          <Button
                            startIcon={<ChangeIcon />}
                            onClick={handleUpdateAccountStatus}
                            variant="outlined"
                            sx={{
                              borderColor: "#6750A4",
                              color: "#6750A4",
                              height: "40px",
                              borderRadius: "100px",
                              width: "104px",
                              textTransform: "none",
                              display: currentUser ? "none" : "flex",
                            }}
                          >
                            Update
                          </Button>
                        </Box>
                      </Box>
                      <Box>
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Role:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          {currentUser
                            ? user?.user?.isAmin
                              ? "Staff"
                              : "Customer"
                            : data?.user?.isAmin
                            ? "Staff"
                            : "Customer"}
                        </p>
                      </Box>
                    </Box>
                    <Box>
                      {userType === "Staff" ? (
                        <Button
                          startIcon={<KeyIcon />}
                          onClick={() => setOpenPriviledgeModal(true)}
                          variant="contained"
                          sx={{
                            bgcolor: "#6750A4",
                            color: "#fff",
                            height: "40px",
                            borderRadius: "100px",
                            width: "184px",
                            textTransform: "none",
                          }}
                        >
                          Manage Privileges
                        </Button>
                      ) : null}
                    </Box>
                  </Grid>
                  <Grid
                    p="16px"
                    sx={{ border: "1px solid #CAC4D0", borderRadius: "20px" }}
                    item
                    xs={4}
                  >
                    <Box display="flex" gap="8px" alignItems="center" mb="16px">
                      <PinnedIcon />
                      <Typography color="#B3261E" fontSize="22px">
                        Pinned
                      </Typography>
                    </Box>
                    <Box>
                      <Box mb="16px">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Registered on:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          {currentUser
                            ? moment(user?.user?.createdAt).format(
                                "DD-MM-YYYY HH:mm"
                              )
                            : moment(data?.user?.createdAt).format(
                                "DD-MM-YYYY HH:mm"
                              )}
                        </p>
                      </Box>
                      <Box mb="16px">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Last Login:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          {currentUser
                            ? moment(user?.user?.lastLogin).format(
                                "DD-MM-YYYY HH:mm"
                              )
                            : moment(data?.user?.lastLogin).format(
                                "DD-MM-YYYY HH:mm"
                              )}
                        </p>
                      </Box>
                      <Box>
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Last Logout:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          {currentUser
                            ? "22-03-2023 13:05"
                            : moment(data?.user?.lastLogout).format(
                                "DD-MM-YYYY HH:mm"
                              )}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              )}
              {currentTab === "Additional Information" && (
                <Box display="flex" gap="30px" alignItems="center">
                  <Box
                    p="20px 16px"
                    border="1px solid #CAC4D0"
                    borderRadius="20px"
                    width="100%"
                  >
                    <Typography fontSize="22px" color="#49454F" mb="20px">
                      Business Information
                    </Typography>
                    <Box>
                      <div className="grid grid-cols-5 gap-[16px] ">
                        <div className="col-span-2">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            Business/Company Name:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            Malibu
                          </p>
                        </div>
                        <div className="">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            Country:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            Turkey
                          </p>
                        </div>
                        <div className="">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            State:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            Istanbul
                          </p>
                        </div>
                        <div className="">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            City:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            Cyprusic
                          </p>
                        </div>

                        <div className="col-span-2">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            Phone Number:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            +234 803 456 7845
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            Email:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            Malibushdrack@gmail.com
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                            Zip/postal Code:
                          </p>
                          <p className="font-roboto  text-[20px] text-brand/100">
                            98765
                          </p>
                        </div>
                      </div>
                      <div className="mt-[16px] col-span-5">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Address:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          No, 1osolo way, ikeja road, behind scaint merry
                        </p>
                      </div>
                    </Box>
                  </Box>
                  <Box onClick={() => setOpen(true)}>
                    <EditIcon />
                  </Box>
                </Box>
              )}
              {currentTab === "Orders" && <UserOrders />}
              {currentTab === "Activities" && (
                <UserActivities currentUser={currentUser} />
              )}
            </Box>
          )}
        </Box>
        <Box mt="30px">
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#6750A4",
              color: "#6750A4",
              height: "40px",
              borderRadius: "100px",
              width: "170px",
              textTransform: "none",
            }}
            onClick={() => navigate(-1)}
          >
            Back to Settings
          </Button>
        </Box>
      </Box>
      <UserModals
        open={openEditProfile}
        onClose={handleCloseEditProfile}
        title="Edit User Personal Information"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="30px"
          mb="30px"
          // py="30px"
          // pr="30px"
          //   sx={{ borderTop: "1px solid #79747E" }}
        >
          <Grid container gap="30px" wrap="nowrap">
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="first-name"
                type="text"
                label="First Name"
                // value={receiverFirstName}
                // onChange={(e) => setReceiverFirstName(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="last-name"
                type="text"
                label="Last Name"
                // value={receiverLastName}
                // onChange={(e) => setReceiverLastName(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              />
            </Grid>
          </Grid>
          <Grid container gap="30px" wrap="nowrap">
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="receiver's-email"
                type="text"
                label="Email"
                // value={receiverEmail}
                // onChange={(e) => setReceiverEmail(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container gap="20px" wrap="nowrap">
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    required
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="code"
                    type="text"
                    // value={code}
                    // onChange={(e) => setCode(e.target.value)}
                    label="Code"
                    select
                    InputProps={{
                      sx: {
                        borderRadius: "20px", // Apply border radius to the input element
                        height: "56px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                    // placeholder="Enter your country"
                  >
                    {countryCodes.map((country, i) => (
                      <MenuItem value={country.code} key={i}>
                        {country.name} {country.code}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="phone-number"
                    label="Phone Number"
                    type="text"
                    // value={number}
                    // onChange={(e) => setNumber(e.target.value)}
                    InputProps={{
                      sx: {
                        borderRadius: "20px", // Apply border radius to the input element
                        height: "56px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                    // placeholder="Enter your country"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap="30px" wrap="nowrap">
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="destination-country"
                type="text"
                label="Country"
                // value={destinationCountry}
                // onChange={(e) => setDestinationCountry(e.target.value)}
                defaultValue={""}
                select
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              >
                {countries.map((country, i) => (
                  <MenuItem value={country} key={i}>
                    {country}
                  </MenuItem>
                ))}{" "}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="destination-state"
                type="text"
                // value={destinationState}
                // onChange={(e) => setDestinationState(e.target.value)}
                label="State"
                defaultValue={""}
                select
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              >
                {states.map((state, i) => (
                  <MenuItem value={state} key={i}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="destination-city"
                type="text"
                // value={destinationCity}
                // onChange={(e) => setDestinationCity(e.target.value)}
                label="City"
                defaultValue={""}
                select
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              >
                {cities.map((city, i) => (
                  <MenuItem value={city} key={i}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            required
            sx={{ fontSize: "16px", color: "#1C1B1F" }}
            id="address"
            type="text"
            label="Address"
            // value={receiverAddress}
            // onChange={(e) => setReceiverAddress(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: "20px", // Apply border radius to the input element
                height: "56px",
                borderColor: "#79747E",
                fontSize: "16px",
                color: "#1C1B1F",
              },
            }}
            // placeholder="Enter your country"
          />
          <TextField
            fullWidth
            sx={{ fontSize: "16px", color: "#1C1B1F" }}
            id="zip-code"
            type="text"
            label="Zip/Postal Code"
            // value={receiverZipCode}
            // onChange={(e) => setReceiverZipCode(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: "20px", // Apply border radius to the input element
                height: "56px",
                borderColor: "#79747E",
                fontSize: "16px",
                color: "#1C1B1F",
              },
            }}
            // placeholder="Enter your country"
          />
        </Box>
        <Box>
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              width: "110px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={handleCloseEditProfile}
          >
            Cancel
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={openResetPassword}
        onClose={handleCloseResetPassword}
        title={currentUser ? "Change Password" : "Reset user password"}
        height="fit-content"
      >
        {currentUser ? (
          changePassword ? (
            <Box>
              <Typography fontSize="22px" color="#49454F" mb="30px">
                Kindly enter your new password
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                    mb: "10px",
                  },
                }}
                type="password"
                fullWidth
                id="password"
                label="New Password"
                placeholder="Enter new password"
              />
              <Grid container wrap={{ xs: "wrap", sm: "nowrap" }} mb="10px">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Tick />
                  <Typography
                    fontSize="12px"
                    color="#49454F"
                    letterSpacing=".4px"
                  >
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
                  <Typography
                    fontSize="12px"
                    color="#49454F"
                    letterSpacing=".4px"
                  >
                    Minimum of 8 characters
                  </Typography>
                </Grid>
              </Grid>
              <Grid container wrap={{ xs: "wrap", sm: "nowrap" }} mb="30px">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Tick color="#79747E" />
                  <Typography
                    fontSize="12px"
                    color="#49454F"
                    letterSpacing=".4px"
                  >
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
                  <Typography
                    fontSize="12px"
                    color="#49454F"
                    letterSpacing=".4px"
                  >
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
                    mb: "10px",
                  },
                }}
                type="password"
                fullWidth
                id="password"
                label="Re-Enter New Password"
                placeholder="Re-Enter new password"
              />
              <Box
                alignSelf={"flex-start"}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick />
                <Typography
                  fontSize="12px"
                  color="#49454F"
                  letterSpacing=".4px"
                >
                  Passwords match each other
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography fontSize="22px" color="#49454F" mb="30px">
                To ensure maximum security for your account, type in your
                existing password to continue.
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                  endAdornment: <EyeIconOpen />,
                }}
                type="password"
                fullWidth
                id="password"
                label="Existing Password"
                placeholder="Enter your password"
              />
            </Box>
          )
        ) : (
          <Typography fontSize="22px" color="#49454F">
            The customer will be sent an email that contains a link to reset
            their password, are you sure you want to proceed?
          </Typography>
        )}
        <Box mt="30px">
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              width: "110px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={() => {
              if (changePassword) setChangePassword(false);
              else handleCloseResetPassword();
            }}
          >
            {changePassword ? "Back" : "Cancel"}
          </Button>
          <Button
            startIcon={
              changePassword ? <CheckWhiteIcon /> : <ArrowRightWhite />
            }
            variant="contained"
            sx={{
              bgcolor: changePassword ? "#B3261E" : "#6750A4",
              color: "#fff",
              width: changePassword ? "215px" : "200px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
            onClick={() => {
              if (currentUser && !changePassword) setChangePassword(true);
            }}
          >
            {changePassword
              ? "Confirm New Password"
              : currentUser
              ? "Proceed"
              : "Confirm and Proceed"}
          </Button>
          {changePassword && (
            <Box mt="10px" maxWidth="340px">
              <Typography fontSize="14px">
                Upon clicking “Confirm New Password”, I confirm I have read and
                agreed to{" "}
                <Typography display="inline" color="#6750A4">
                  all terms and policies
                </Typography>
              </Typography>
            </Box>
          )}
        </Box>
      </UserModals>
      <UserModals
        open={openAccountStatusModal}
        onClose={handleCloseUpdateAccountStatus}
        title="Update User Account Status"
        height="fit-content"
      >
        <Box
          mb="30px"
          bgcolor="#fff"
          border="1px solid #21005D"
          borderRadius="20px"
          p="24px"
        >
          <Typography color="#79747E" fontSize="16px" mb="16px">
            Content goes here
          </Typography>
          <Box display="flex" gap="16px">
            <Box
              sx={{
                borderRadius: "100px",
                border: "1px solid #CAC4D0",
                bgcolor: "rgba(103, 80, 164, 0.11)",
                pr: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                value="Unverified"
                checked={accountStatus === "Unverified"}
                onChange={(e) => setAccountStatus(e.target.value)}
              />
              <Typography color="#49454F" fontSize="14px">
                Unverified
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "100px",
                border: "1px solid #CAC4D0",
                bgcolor: "rgba(103, 80, 164, 0.11)",
                pr: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                value="Pending Verification"
                checked={accountStatus === "Pending Verification"}
                onChange={(e) => setAccountStatus(e.target.value)}
              />
              <Typography color="#49454F" fontSize="14px">
                Pending Verification
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "100px",
                border: "1px solid #CAC4D0",
                bgcolor: "rgba(103, 80, 164, 0.11)",
                pr: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                value="Verified"
                checked={accountStatus === "Verified"}
                onChange={(e) => setAccountStatus(e.target.value)}
              />
              <Typography color="#49454F" fontSize="14px">
                Verified
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "100px",
                border: "1px solid #CAC4D0",
                bgcolor: "rgba(103, 80, 164, 0.11)",
                pr: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                value="Suspended"
                checked={accountStatus === "Suspended"}
                onChange={(e) => setAccountStatus(e.target.value)}
              />
              <Typography color="#49454F" fontSize="14px">
                Suspended
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              width: "110px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={handleCloseUpdateAccountStatus}
          >
            Cancel
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            onClick={() => setConfirmStatusChange(true)}
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "200px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Confirm and Proceed
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={openPriviledgeModal}
        onClose={() => setOpenPriviledgeModal(false)}
        title="Manage Staff Privileges"
        height="fit-content"
      >
        <Box width="100%" height="56px" bgcolor="#fff"></Box>
      </UserModals>
      <Modal
        open={confirmStatusChange}
        onClose={() => setConfirmStatusChange(false)}
      >
        <Box
          bgcolor="#fff"
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
          top="50%"
          left="50%"
          width="312px"
          height="fit-content"
          borderRadius="20px"
        >
          <Box bgcolor="#6750A41C" p="30px">
            <Box display="flex" flexDirection={"column"} gap="16px" pb="24px">
              <Typography color="#1C1B1F" fontSize="24px">
                Status Update Confirmation
              </Typography>
              <Typography color="#49454F" fontSize="14px">
                Are you sure you want to update the Account status of this user?
              </Typography>
            </Box>
            <Box
              display="flex"
              gap="8ppx"
              pt="24px"
              alignItems={"center"}
              justifyContent="flex-end"
            >
              <Button
                variant="text"
                onClick={() => setConfirmStatusChange(false)}
                sx={{
                  textTransform: "none",
                  color: "#6750A4",
                  fontWeight: 500,
                  width: "68px",
                  height: "40px",
                  fontSize: "14px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  setCurrentStatus(accountStatus);
                  setConfirmStatusChange(false);
                  handleCloseUpdateAccountStatus();
                }}
                sx={{
                  textTransform: "none",
                  color: "#6750A4",
                  fontWeight: 500,
                  width: "150px",
                  height: "40px",
                  fontSize: "14px",
                }}
              >
                Confirm and update
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Customer Business Information"
      >
        <AdditionInfoForm />
        <Box mt="30px">
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
    </Box>
  );
};

export default UserDetailsPage;
