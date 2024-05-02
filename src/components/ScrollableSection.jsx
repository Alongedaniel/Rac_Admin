import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const ScrollableSection = ({ children, height }) => {
      const sectionRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState("down");
    const [prevScrollPos, setPrevScrollPos] = useState(0);

      useEffect(() => {
        const handleScroll = () => {
          if (!sectionRef.current) return;

          const currentScrollPos = sectionRef?.current?.scrollTop;
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
    <Box
      ref={sectionRef}
      height={height}
          overflow="auto"
          zIndex={6}
      sx={{
        boxShadow:
          scrollDirection === "down"
            ? `inset 0px 4px 10px -4px rgba(0, 0, 0, 0.2)`
            : `inset 0px -4px 10px -4px rgba(0, 0, 0, 0.2)`,
      }}
    >
      {children}
    </Box>
  );
}

export default ScrollableSection
