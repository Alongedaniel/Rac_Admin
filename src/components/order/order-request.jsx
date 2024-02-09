import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useOrderRequestQuery } from "../../services/routes/order";
import { Box, TextField } from "@mui/material";
import ActionButton from "../ActionButton";
import FilterIcons from "../../assets/icons/FilterIcons";
import SearchIcon from "../../assets/icons/SearchIcon";
import BulkIcon from "../../assets/icons/BulkIcon";
import NewOrderIcon from "../../assets/icons/NewOrderIcon";
import OrderTable from "../OrderTable";

function OrderRequestComp() {
  const { data, isLoading, isSuccess, error } = useOrderRequestQuery();
  const orderRequest = data?.data;
  console.log(error)
  return (
    <>
      {orderRequest?.length === 0 ? (
        <div className="flex flex-col items-center space-y-[30px] font-roboto mt-[-15%]">
          <p>You don’t have any order yet, would you like to create one now?</p>
          <button className="bg-brand/200 text-white w-fit p-[10px_15px] rounded-full">
            Add new order
          </button>
        </div>
      ) : (
        <Box>
          <Box
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
                    width: "458px",
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
            {/* <Box sx={{ flex: 1 }}> */}
            <ActionButton title="Create new order" icon={<NewOrderIcon />} />
            {/* </Box> */}
          </Box>
          <Box height={"500px"}>
            <OrderTable />
          </Box>
        </Box>
      )}
    </>
  );
}

export default OrderRequestComp;
