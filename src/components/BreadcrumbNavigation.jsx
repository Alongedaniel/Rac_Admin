import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import HomeIcon from '../assets/icons/HomeIcon';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import { useNavigate, useParams } from 'react-router-dom';

const BreadcrumbNavigation = () => {
    const url = window.location.pathname;
    const segments = url.split("/").filter((segment) => segment !== "");
  const navigate = useNavigate()
  const { id } = useParams()
  return (
    <Box>
      <Breadcrumbs separator={<ArrowLeftIcon />}>
        <Box onClick={() => navigate('/')}>
          <HomeIcon width="19px" height="19px" />
        </Box>
        {segments.map((link, i) => (
          <Link
            key={i}
            sx={{
              fontSize: "14px",
              color: "#625B71",
              textDecoration: "none",
              "&:hover": {
                bgcolor: "#E6E1E514",
              },
            }}
            href={`/${link}`}
          >
            {link}{id? `=${id}` : null}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbNavigation
