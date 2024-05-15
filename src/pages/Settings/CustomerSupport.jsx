import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../assets/icons/ArrowBack';
import PaymentsTable from './components/PaymentsTable';
import TableValue from './components/TableValue';
import CloseCircle from '../../assets/icons/CloseCircle';
import ArrowRightWhite from '../../assets/icons/ArrowRightWhite';

const CustomerSupport = () => {
    // const columns = ["Currency", "Naira Rate (₦)"];
    const rows = ["Call Phone Number", "WhatsApp Number", "Email"];
    const navigate = useNavigate();
    const [value, setValue] = useState("0000000000");
    const [email, setEmail] = useState("abcd@raclogistics.com");
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" >
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          Customer Support Details
        </Typography>
        <PaymentsTable rows={rows} columns={[]} allColored>
          <TableValue value={value} setValue={setValue} />
          <TableValue value={value} setValue={setValue} />
          <TableValue value={email} setValue={setEmail} />
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

export default CustomerSupport
