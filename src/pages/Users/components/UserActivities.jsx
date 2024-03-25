import React, { useState } from 'react'
import OrderTable from '../../../components/OrderTable';
import {v4 as uuid}  from 'uuid';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import PinnedIcon from '../../../assets/icons/PinnedIcon';

const UserActivities = () => {
    const HeaderName = ({ header }) => {
      return (
        <Typography fontSize="14px" fontWeight={500} color="#000">
          {header}
        </Typography>
      );
    };
    const columns = [
      //     {
      //         field: 'id',
      //         renderCell: (params) => <Box display='none'>{params.row.id}</Box>
      // },
      {
        field: "event",
        headerName: <HeaderName header="Event" />,
        renderCell: (params) => <Box width="100%">{params.row.event}</Box>,
        // width: 800,
      },
      {
        field: "dateTime",
        headerName: <HeaderName header="Date & Time" />,
        // width: 150,
        renderCell: (params) => <TableRow align={'right'}>{params.row.dateTime}</TableRow>,
      },
    ];
    const rows = [
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
      {
        id: uuid(),
        event: "Sent a payment claim",
        dateTime: "22-03-2023 13:05",
      },
    ];
    const rowsPerPageOptions = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const slicedData = rows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

  return (
    <Box display="flex" gap="16px" height="262px">
      {/* <OrderTable columns={columns} rows={rows} height="262px" /> */}
      <Box
        width="100%"
        p="16px"
        sx={{ border: "1px solid #CAC4D0", borderRadius: "20px" }}
      >
        <TableContainer sx={{ height: "262px", }}>
          <Table
            stickyHeader
            sx={{ width: "100%", height: "262px" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell align="right">Date & Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.event}
                  </TableCell>
                  <TableCell align="right">{row.dateTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box
        p="16px"
        sx={{
          border: "1px solid #CAC4D0",
          borderRadius: "20px",
          minWidth: "190px",
        }}
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
      </Box>
    </Box>
  );
}

export default UserActivities
