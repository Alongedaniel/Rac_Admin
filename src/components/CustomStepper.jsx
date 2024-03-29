import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const CustomStepper = ({steps, activeStep}) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, i) => (
        <Step key={i}>
          <StepLabel
            sx={{
              "& .MuiStepLabel-iconContainer": {
                color: "red",
                width: "33px",
                height: "48px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: i === activeStep ? "#21005D" : "#CAC4D0",
                mr: i === activeStep ? "10px" : 0,
              },
              "& .MuiStepLabel-label": {
                color: "#000", // Custom label color
                fontSize: "24px", // Custom font size
              },
              "& .MuiStepIcon-root": {
                ml: "6px",
                // i === activeStep ? "#21005D" : "#CAC4D0", // Custom circle background color
                color:
                  i === activeStep
                    ? "#21005D"
                    : activeStep > i
                    ? "#fff"
                    : "#CAC4D0", // Custom circle icon color
              },
            }}
          >
            {i === activeStep ? step : null}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default CustomStepper
