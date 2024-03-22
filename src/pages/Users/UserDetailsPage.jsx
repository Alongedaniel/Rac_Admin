import { Box, Button, Grid, Typography } from "@mui/material";
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

const UserDetailsPage = ({ userType = "Customer" }) => {
  const [currentTab, setCurrentTab] = useState("Account Information");
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
        <Box mb="30px">
          <Typography fontSize="24px" color="#1C1B1F">
            User ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              RACS1234567
            </Typography>
          </Typography>
        </Box>
        <CardWrapper
          title="User Personal Information"
          removeArrows
          bottomRadius
          fullByDefault
        >
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
                  U
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                First Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">Undo</p>
              <Box mt="8px">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Other Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Reno Offorex
                </p>
              </Box>
            </Grid>
            <Grid item xs={7.5}>
              <Box mb="8px" display={"flex"} alignItems="center" gap="18px">
                <CallIcon />
                <Typography>+234 8080006321</Typography>
              </Box>
              <Box mb="8px" display={"flex"} alignItems="center" gap="18px">
                <GmailIcon />
                <Typography>hello@raclogistics.com</Typography>
              </Box>
              <Box display={"flex"} alignItems="center" gap="18px">
                <Location />
                <Typography>
                  29b Osolo Way Opposite Polaris Bank Ajao Estate, ikeja, Lagos
                  State, Nigeria, 075348
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardWrapper>
        <CardWrapper removeArrows topRadius fullByDefault mt="8px" mb="24px">
          <Button
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
                        offorrex@gmail.com
                      </p>
                    </Box>
                    <Box>
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Password:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        ********
                      </p>
                    </Box>
                  </Box>
                  <Button
                    startIcon={<ResetIcon />}
                    variant="contained"
                    sx={{
                      bgcolor: "#B3261E",
                      color: "#fff",
                      height: "40px",
                      borderRadius: "100px",
                      width: "202px",
                      textTransform: "none",
                    }}
                  >
                    Reset User Password
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
                  <Box mb={userType === 'Staff' ? '32px' : 0}>
                    <Box mb="10px">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Status:
                      </p>
                      <Box display="flex" gap="10px" alignItems="center">
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Unverified
                        </p>
                        <Button
                          startIcon={<ChangeIcon />}
                          variant="outlined"
                          sx={{
                            borderColor: "#6750A4",
                            color: "#6750A4",
                            height: "40px",
                            borderRadius: "100px",
                            width: "104px",
                            textTransform: "none",
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
                        {userType}
                      </p>
                    </Box>
                  </Box>
                  <Box>
                    {userType === "Staff" ? (
                      <Button
                        startIcon={<KeyIcon />}
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
                        22-03-2023 13:05
                      </p>
                    </Box>
                    <Box mb="16px">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Last Login:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        22-03-2023 13:05
                      </p>
                    </Box>
                    <Box>
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Last Logout:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        22-03-2023 13:05
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
                <Box>
                  <EditIcon />
                </Box>
              </Box>
            )}
          </Box>
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
          >
            Back to Settings
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetailsPage;
