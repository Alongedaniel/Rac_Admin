import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../assets/icons/ArrowBack';
import PaymentsTable from './components/PaymentsTable';
import TableValue from './components/TableValue';
import CloseCircle from '../../assets/icons/CloseCircle';
import ArrowRightWhite from '../../assets/icons/ArrowRightWhite';

const ShippingMethods = () => {
       const rows = ["Duration", "Take off"];
       const navigate = useNavigate();
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" maxWidth="1200px">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          Shipping Methods
        </Typography>
        <Box>
          <Box mb="16px">
            <Box
              pl="16px"
              py="18px"
              borderRadius="8px"
              border="1px solid #79747E"
            >
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                Basic - Export and Import
              </Typography>
            </Box>
            <PaymentsTable rows={rows} columns={[]} allColored>
              <Box display="flex">
                <TableValue width="190px" value={"5"} setValue={() => {}} />
                <Box
                  alignSelf={"flex-end"}
                  width="100%"
                  height="46px"
                  bgcolor="#FFECF1"
                  display="flex"
                  alignItems="flex-end"
                  pl="16px"
                  borderBottom="1px solid #E7E0EC"
                  pb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                    {`working days`}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <TableValue
                  width="190px"
                  value={"1st Wednesday"}
                  setValue={() => {}}
                />
                <Box
                  width="100%"
                  alignSelf={"flex-end"}
                  height="46px"
                  bgcolor="#FFECF1"
                  display="flex"
                  alignItems="flex-end"
                  pl="16px"
                  borderBottom="1px solid #E7E0EC"
                  pb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                    {`after your payment`}
                  </Typography>
                </Box>
              </Box>
            </PaymentsTable>
          </Box>
          <Box pt="8px" borderTop="1px dashed #79747E" mb="24px">
            <Box>
              <Box
                pl="8px"
                display="flex"
                gap="8px"
                alignItems="center"
                mb="8px"
              >
                <Box
                  width="5px"
                  height="5px"
                  borderRadius="100%"
                  bgcolor="#1C1B1F"
                ></Box>
                <Typography fontSize="12px" fontWeight={500} color="#1C1B1F">
                  Shipping method description
                </Typography>
              </Box>
              <Typography fontSize="16px" color="#938F99" mb="5px">
                This shipping method takes your package{" "}
                <Typography
                  fontSize="16px"
                  display="inline"
                  fontWeight={500}
                  color="#1C1B1F"
                >{`{5 working days}`}</Typography>{" "}
                to arrive your destination from the{" "}
                <Typography
                  fontSize="16px"
                  display="inline"
                  fontWeight={500}
                  color="#1C1B1F"
                >{`{1st Wednesday after your payment}`}</Typography>
                , You can call us on +234 700 700 6000 or +1 888 567 8765 or
                send us a dm to get alternative shipping methods with different
                benefits.
              </Typography>
              <Typography fontSize="16px" fontWeight={500} color="#79747E">
                The cost paid here covers clearing, documentation and delivery
                to the destination.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box mb="16px">
            <Box
              pl="16px"
              py="18px"
              borderRadius="8px"
              border="1px solid #79747E"
            >
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                Basic - Auto Import
              </Typography>
            </Box>
            <PaymentsTable rows={rows} columns={[]} allColored>
              <Box display="flex">
                <TableValue width="190px" value={"5"} setValue={() => {}} />
                <Box
                  alignSelf={"flex-end"}
                  width="100%"
                  height="46px"
                  bgcolor="#FFECF1"
                  display="flex"
                  alignItems="flex-end"
                  pl="16px"
                  borderBottom="1px solid #E7E0EC"
                  pb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                    {`working days`}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <TableValue
                  width="190px"
                  value={"1st Wednesday"}
                  setValue={() => {}}
                />
                <Box
                  width="100%"
                  alignSelf={"flex-end"}
                  height="46px"
                  bgcolor="#FFECF1"
                  display="flex"
                  alignItems="flex-end"
                  pl="16px"
                  borderBottom="1px solid #E7E0EC"
                  pb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                    {`after your payment`}
                  </Typography>
                </Box>
              </Box>
            </PaymentsTable>
          </Box>
          <Box pt="8px" borderTop="1px dashed #79747E" mb="24px">
            <Box>
              <Box
                pl="8px"
                display="flex"
                gap="8px"
                alignItems="center"
                mb="8px"
              >
                <Box
                  width="5px"
                  height="5px"
                  borderRadius="100%"
                  bgcolor="#1C1B1F"
                ></Box>
                <Typography fontSize="12px" fontWeight={500} color="#1C1B1F">
                  Shipping method description
                </Typography>
</Box>
                <Typography fontSize="16px" color="#938F99" mb="5px">
                  This shipping method takes your package{" "}
                  <Typography
                    fontSize="16px"
                    display="inline"
                    fontWeight={500}
                    color="#1C1B1F"
                  >{`{5 working days}`}</Typography>{" "}
                  to arrive your destination from the{" "}
                  <Typography
                    fontSize="16px"
                    display="inline"
                    fontWeight={500}
                    color="#1C1B1F"
                  >{`{1st Wednesday after your payment}`}</Typography>
                  , You can call us on +234 700 700 6000 or +1 888 567 8765 or
                  send us a dm to get alternative shipping methods with
                  different benefits.
                </Typography>
                <Typography fontSize="16px" fontWeight={500} color="#79747E">
                  The cost paid here covers clearing, documentation and delivery
                  to the destination.
                </Typography>
              </Box>
          </Box>
        </Box>
        <Box mt="24px" display="flex" alignItems="center" gap="10px">
          <Button
            variant="outlined"
            sx={{
              color: "#6750A4",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              border: "1px solid #6750A4",
              width: "174px",
            }}
            startIcon={<CloseCircle color="#6750A4" />}
          >
            Discard Changes
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              bgcolor: "#6750A4",
              width: "172px",
            }}
            startIcon={<ArrowRightWhite />}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShippingMethods
