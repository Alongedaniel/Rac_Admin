import { Box } from '@mui/material'
import React from 'react'
import CircleRight from '../assets/icons/CircleRight';

const SectionHeader = ({title, noBorder}) => {
  return (
    <Box>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          {title}
        </p>
      </div>
      {!noBorder && <Box pl="30px">
        <Box mt="10px" width="100%" height="1px" bgcolor="#79747E"></Box>
          </Box>}
    </Box>
  );
}

export default SectionHeader
