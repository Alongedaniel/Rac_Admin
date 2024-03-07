import { Box, Breadcrumbs,  } from '@mui/material'
import React from 'react'
import HomeIcon from '../assets/icons/HomeIcon';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import { useNavigate, useParams, Link } from "react-router-dom";

const BreadcrumbNavigation = () => {
    const url = window.location.pathname;
    const segments = url.split("/").filter((segment) => segment !== "");
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(segments)
  return (
    <Box>
      <Breadcrumbs separator={<ArrowLeftIcon />}>
        <Box onClick={() => navigate('/')}>
          <HomeIcon width="19px" height="19px" />
        </Box>
        {segments.map((link, i) => {
          const routeTo = `/${segments.slice(0, i + 1).join("/")}`;
          return (
            <Link
              key={i}
              style={{
                fontSize: "14px",
                color: "#625B71",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#E6E1E514",
                },
                pointerEvents: i === segments.length - 1 ? 'none' : 'all'
              }}
              to={i === segments.length - 1 ? '' : routeTo}
            >
              {link}
              {id ? `=${id}` : null}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbNavigation
