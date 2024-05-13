import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBack from '../../assets/icons/ArrowBack';
import { useNavigate } from 'react-router-dom';
import PaymentsTable from './components/PaymentsTable';
import TableValue from './components/TableValue';
import CloseCircle from '../../assets/icons/CloseCircle';
import ArrowRightWhite from '../../assets/icons/ArrowRightWhite';

const ProcurementFees = () => {
    const navigate = useNavigate()
    const columns = ["Amount ($)", "Processing Fee ($)"];
    const rows = [
      "1 - 150",
      "151 - 1000",
      "1001 - 5000",
      "5001 - 10000",
      "10001 - 1M",
    ];
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" maxWidth="1200px">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="8px">
          Procurement Fees
        </Typography>
        <Typography fontSize="16px" color="#1D192B" mb="24px">
          These costs apply to shop for me orders only
        </Typography>
        <PaymentsTable rows={rows} columns={columns} allColored>
          <Box display="flex">
            <TableValue width="143px" value={"$15"} setValue={() => {}} />
            <Box
              alignSelf={"flex-end"}
              width="238px"
              height="46px"
              bgcolor="#FFECF1"
              display="flex"
              alignItems="flex-end"
              pl="16px"
              borderBottom="1px solid #E7E0EC"
              pb="8px"
            >
              <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                {`Flat Rate`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <TableValue width="143px" value={"10%"} setValue={() => {}} />
            <Box
              alignSelf={"flex-end"}
              width="238px"
              height="46px"
              bgcolor="#FFECF1"
              display="flex"
              alignItems="flex-end"
              pl="16px"
              borderBottom="1px solid #E7E0EC"
              pb="8px"
            >
              <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                {`* {Total Value of Items}`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <TableValue width="143px" value={"8%"} setValue={() => {}} />
            <Box
              alignSelf={"flex-end"}
              width="238px"
              height="46px"
              bgcolor="#FFECF1"
              display="flex"
              alignItems="flex-end"
              pl="16px"
              borderBottom="1px solid #E7E0EC"
              pb="8px"
            >
              <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                {`* {Total Value of Items}`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <TableValue width="143px" value={"7%"} setValue={() => {}} />
            <Box
              alignSelf={"flex-end"}
              width="238px"
              height="46px"
              bgcolor="#FFECF1"
              display="flex"
              alignItems="flex-end"
              pl="16px"
              borderBottom="1px solid #E7E0EC"
              pb="8px"
            >
              <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                {`* {Total Value of Items}`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <TableValue width="143px" value={"5%"} setValue={() => {}} />
            <Box
              alignSelf={"flex-end"}
              width="238px"
              height="46px"
              bgcolor="#FFECF1"
              display="flex"
              alignItems="flex-end"
              pl="16px"
              borderBottom="1px solid #E7E0EC"
              pb="8px"
            >
              <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                {`* {Total Value of Items}`}
              </Typography>
            </Box>
          </Box>
        </PaymentsTable>
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

export default ProcurementFees
