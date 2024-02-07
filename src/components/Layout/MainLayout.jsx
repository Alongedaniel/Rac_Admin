import React, { useState } from 'react'
import { Box, Container, Stack } from '@mui/material'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack flexDirection="row">
        <Sidebar showFullBar={showFullBar} setShowFullBar={setShowFullBar} />
        <Stack
          ml={showFullBar ? "250px" : "72px"}
          width="100%"
        >
          <Navbar />
          {children}
        </Stack>
      </Stack>
    </Container>
  );
}

export default MainLayout
