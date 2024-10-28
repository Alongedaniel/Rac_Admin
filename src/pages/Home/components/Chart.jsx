import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Shop from "../../../assets/icons/Shop";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDown from "../../../assets/icons/ArrowDown";
import dayjs from "dayjs";
import Calendar from "../../../assets/icons/Calendar";
import DropDown from "../../../assets/icons/DropDown";

const Chart = () => {
  const [trend, setTrend] = useState("Orders");
  const data = [
    { name: "JAN", uv: 1000 },
    { name: "FEB", uv: 3000 },
    { name: "MAR", uv: 5000 },
    { name: "APR", uv: 7000 },
    { name: "MAY", uv: 20000 },
    { name: "JUN", uv: 12000 },
    { name: "JUL", uv: 25000 },
    { name: "AUG", uv: 10000 },
    { name: "SEP", uv: 15000 },
    { name: "OCT", uv: 30000 },
    { name: "NOV", uv: 20000 },
    { name: "DEC", uv: 10000 },
  ];
  const revenueData = [
    { name: "JAN", uv: "50000" },
    { name: "FEB", uv: "100000" },
    { name: "MAR", uv: "5000000" },
    { name: "APR", uv: "3000000" },
    { name: "MAY", uv: "1000000" },
    { name: "JUN", uv: "5000000" },
    { name: "JUL", uv: "7000000" },
    { name: "AUG", uv: "500000" },
    { name: "SEP", uv: "300000" },
    { name: "OCT", uv: "8000000" },
    { name: "NOV", uv: "5000000" },
    { name: "DEC", uv: "10000000" },
  ];
  const [startDate, setStartDate] = useState(dayjs("Jan 01 2024"));
  const [endDate, setEndDate] = useState(dayjs());

  const formatYAxis = (tickItem) => {
    if (tickItem >= 1000000) {
      return `${trend === "Revenue" ? "₦" : ""}${tickItem / 1000000}m`;
    } else if (tickItem >= 1000) {
      return `${trend === "Revenue" ? "₦" : ""}${tickItem / 1000}k`;
    } else {
      return trend === "Revenue" ? "₦" : "" + tickItem;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          p="4px 24px"
          bgcolor={trend === "Orders" ? "#6750A4" : "#7D5260"}
          borderRadius="10px"
        >
          <Typography textAlign="center" fontSize="11px" color="#fff">
            {trend}
          </Typography>
          <Typography
            textAlign="center"
            fontSize="12px"
            color="#fff"
            fontWeight={500}
          >
            {payload[0].value}
          </Typography>
          <Typography
            textAlign="center"
            fontSize="8px"
            color="#D0BCFF"
            fontWeight={500}
          >{`${label} ${dayjs().year()}`}</Typography>
        </Box>
      );
    }

    return null;
  };
  return (
    <Card variant="outlined" sx={{ maxWidth: 640, borderRadius: "20px" }}>
      <CardContent>
        <Box
          mb="24px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" gap="8px">
            <Typography fontSize="16px" fontWeight={500} color="#1D192B">
              Trends
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: "63px",
                height: "22px",
                borderRadius: "8px",
                bgcolor:
                  trend === "Orders" ? "#6750A4" : "rgba(28, 27, 31, 0.12)",
                textTransform: "none",
                fontSize: "12px",
                fontWeight: 500,
                color: trend === "Orders" ? "#FFFFFF" : "#1C1B1F",
              }}
              onClick={() => setTrend("Orders")}
            >
              Orders
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "74px",
                height: "22px",
                borderRadius: "8px",
                bgcolor:
                  trend === "Revenue" ? "#7D5260" : "rgba(28, 27, 31, 0.12)",
                textTransform: "none",
                fontSize: "12px",
                fontWeight: 500,
                color: trend === "Revenue" ? "#FFFFFF" : "#1C1B1F",
                // "&:hover": {
                //   bgcolor: "rgba(28, 27, 31, 0.12)",
                // },
              }}
              onClick={() => setTrend("Revenue")}
            >
              Revenue
            </Button>
          </Box>
          <Box display="flex" alignItems="center" gap="8px">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Calendar />
              <Typography fontSize="12px" fontWeight={500} color="#625B71">
                From
              </Typography>
              <DatePicker
                slots={{
                  openPickerIcon: DropDown,
                  //   day: startDate,
                }}
                // defaultValue={"Jan 01 2024"}
                format="MMM DD YYYY"
                value={startDate}
                slotProps={{
                  day: { selectedDay: startDate },
                }}
                onChange={(newValue) => setStartDate(newValue)}
                sx={{
                  width: "115px",
                  border: "none",
                  input: {
                    p: 0,
                    m: 0,
                    border: "none",
                    fontSize: "12px",
                    color: "#625B71",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      p: 0,
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <Typography fontSize="12px" fontWeight={500} color="#625B71">
                to
              </Typography>
              <DatePicker
                slots={{
                  openPickerIcon: DropDown,
                }}
                // defaultValue={"May 16 2024"}
                format="MMM DD YYYY"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                sx={{
                  width: "115px",
                  border: "none",
                  input: {
                    p: 0,
                    border: "none",
                    fontSize: "12px",
                    color: "#625B71",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      p: 0,
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Typography fontSize="11px" fontWeight={500} color="#625B71" mb="15px">
          {trend === "Orders" ? "No of orders" : "Amount made"}
        </Typography>
        <ResponsiveContainer width="100%" height={257}>
          <AreaChart
            data={trend === "Orders" ? data : revenueData}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={
                    trend === "Orders"
                      ? "rgba(103, 80, 164, 0.31)"
                      : "rgba(180, 131, 146, 0.31)"
                  }
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={
                    trend === "Orders"
                      ? "rgba(103, 80, 164, 0.31)"
                      : "rgba(180, 131, 146, 0.31)"
                  }
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke={trend === "Orders" ? "#6750A4" : "#7D5260"}
              strokeWidth={2}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
