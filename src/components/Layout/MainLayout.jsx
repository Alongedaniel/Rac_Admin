import React, { useState } from 'react'
import { Box, Container, Stack } from '@mui/material'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    <Container maxWidth="xl" disableGutters sx={{ position: "relative" }}>
      <Stack flexDirection="row" sx={{ position: "relative" }}>
        <Sidebar showFullBar={showFullBar} setShowFullBar={setShowFullBar} />
        <Box
          ml={showFullBar ? "250px" : "72px"}
          width="1504px"
          position={"relative"}
        >
          <Box
            position="fixed"
            width="100%"
            sx={{ maxWidth: "1504px", zIndex: 9999 }}
          >
            <Navbar />
          </Box>
          <Box mt="122px">{children}</Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default MainLayout
