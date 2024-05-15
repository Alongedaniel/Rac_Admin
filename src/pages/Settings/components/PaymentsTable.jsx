import { Box, Typography } from '@mui/material'
import React from 'react'
import Information from '../../../assets/icons/Information';

const PaymentsTable = ({columns=[], rows=[], allColored=false, children, tooltip=false}) => {

  return (
    <Box width="100%" overflow="auto">
      <Box display="flex" width="100%">
        {columns.map((column, i) => (
          <Box
            key={i}
            py="18px"
            pl="16px"
            // width={
            //   columns.length === 2 && i === 1
            //     ? "100%" : columns.length > 1 && i === 0 ? '195px'
            //     : columns.length > 0 && i === 0
            //     ? "170px !important"
            //     : "130px"
            // }
          >
            <Typography
              width={
                columns.length === 2 && i === 1
                  ? "100%"
                  : columns.length > 1 && i === 0
                  ? "155px"
                  : columns.length > 0 && i === 0
                  ? "170px !important"
                  : "110px"
              }
              fontSize="14px"
              fontWeight={500}
              color="#1D192B"
              borderRight={i === 0 ? "1px solid #CAC4D0" : "none"}
            >
              {column}
              {i > 0 && tooltip ? <Information /> : null}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex">
        <Box>
          {rows.map((row, i) => (
            <Box
              key={i}
              //   pt="24px"
              //   pb="12px"
              pl="16px"
              height="56px"
              display="flex"
              alignItems="center"
              //   justifyContent='center'
              width={"170px"}
              bgcolor={
                allColored
                  ? "#F4EFF4"
                  : !allColored && (i + 1) % 2 === 0
                  ? "#fff"
                  : "#F4EFF4"
              }
              borderBottom={
                i + 1 === rows.length ? "none" : "1px solid #E7E0EC"
              }
            >
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                {row}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box width="100%">{children}</Box>
      </Box>
    </Box>
  );
}

export default PaymentsTable
