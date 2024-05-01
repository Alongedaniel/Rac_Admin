import { Box, Modal, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CloseCircle from '../../../assets/icons/CloseCircle';
import CloseCircleRed from '../../../assets/icons/CloseCircleRed';
import ArrowSquare from '../../../assets/icons/ArrowSquare';

const UserModals = ({
  open = false,
  onClose,
  children,
  title = "",
  id1 = "",
  id2 = "",
  type1 = "",
  type2 = "",
  width = "70%",
  height = "80%",
}) => {
  const sectionRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return;

      const currentScrollPos = sectionRef.current.scrollTop;
      //   const isScrollingDown =
      //     currentScrollPos >
      //         (sectionRef.current.scrollTop || sectionRef.current.scrollTop);
      console.log(currentScrollPos);
      console.log(prevScrollPos);
      setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
      setPrevScrollPos(currentScrollPos);
    };

    sectionRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      sectionRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        ref={sectionRef}
        bgcolor="#fff"
        sx={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        top="50%"
        left="50%"
        width={width}
        height={height}
        // maxHeight='600px'
        overflow="auto"
        borderRadius="20px"
      >
        <Box
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          height="100%"
          // maxHeight={'80%'}
          overflow="auto"
          bgcolor="#6750A41C"
          p="30px"
          position={"relative"}
        >
          {title && <Box
            bgcolor="#fff"
            position="fixed"
            left={0}
            right={0}
            top={0}
            width="100%"
            zIndex={5}
            sx={{boxShadow:scrollDirection === 'down' ? ' 0px 5px 10px rgba(0, 0, 0, 0.1)' : 'none'}}
          >
            <Box pt="30px" pb="16px" px="30px" bgcolor="#6750A41C">
              <Box
                width="100%"
                border="2px dashed #6750A4"
                borderRadius="20px"
                // mb="30px"
                p="20px 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize="28px" color="#6750A4">
                  {title}
                </Typography>
                <Box onClick={onClose}>
                  <CloseCircleRed />
                </Box>
              </Box>
            </Box>
            {type1 && id1 && (
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                px="30px"
                bgcolor="#6750A41C"
                pt="14px"
                pb="16px"
              >
                <Typography fontSize="24px" color="#1C1B1F">
                  {type1}:{" "}
                  <Typography
                    fontSize="24px"
                    color="#1C1B1F"
                    display="inline"
                    fontWeight={700}
                  >
                    {id1}
                  </Typography>
                </Typography>
                {type2 && id2 && (
                  <>
                    <ArrowSquare />
                    <Typography fontSize="24px" color="#1C1B1F">
                      {type2}:{" "}
                      <Typography
                        fontSize="24px"
                        color="#1C1B1F"
                        display="inline"
                        fontWeight={700}
                      >
                        {id2}
                      </Typography>
                    </Typography>
                  </>
                )}
              </Box>
            )}
          </Box>}
          <Box ref={sectionRef} pt={type1 && id1 ? "200px" : !title ? 0 : "116px"}>{children}</Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default UserModals
