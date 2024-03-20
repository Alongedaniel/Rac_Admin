import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import NewCustomerIcon from '../../assets/icons/NewCustomerIcon';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate()
    const rows = []
  return (
    <Box>
      {rows.length > 0 ? (
        <Box>
          null
          {/* <Box
            display="flex"
            alignItems="center"
            gap="10px"
            sx={{ justifyContent: "space-between" }}
            width="100%"
            mb="16px"
          >
            <Box display="flex" alignItems="center" gap="20px">
              <ActionButton title="Filter view" icon={<FilterIcons />} />
              <TextField
                id="search"
                type="text"
                placeholder="Search for orders with any related keyword"
                InputProps={{
                  sx: {
                    border: "1px solid #79747E",
                    height: "50px",
                    minWidth: "458px",
                    p: "4px 16px",
                    borderRadius: "16px",
                    input: {
                      ml: "12px",
                    },
                  },
                  startAdornment: <SearchIcon />,
                }}
              />
              <ActionButton title="Bulk Actions" icon={<BulkIcon />} />
            </Box>
            <ActionButton
              action={() => navigate("/orders/create-new-order")}
              title="Create new order"
              icon={<NewOrderIcon />}
            />
          </Box>
          <Box>
            <OrderTable columns={columns} rows={rows} />
          </Box> */}
        </Box>
      ) : (
        <Box
          display="flex"
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
          width="100%"
          height="70vh"
        >
          <Typography
            sx={{
              width: "460px",
              textAlign: "center",
              fontSize: "22px",
              color: "#000",
            }}
          >
            You don’t have any registered customer yet, would you like to add
            one now?
          </Typography>
          <Button
            onClick={() => navigate("adding-new-customer")}
            variant="contained"
            startIcon={<NewCustomerIcon />}
            sx={{
              width: "fit-content",
              p: "10px 24px",
              bgcolor: "#6750A4",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#6750A4",
              },
              borderRadius: "100px",
            }}
          >
            Add new customer
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Customer
