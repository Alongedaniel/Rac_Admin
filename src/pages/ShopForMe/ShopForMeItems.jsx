import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import car from'../../assets/images/car.png'
import laptop from'../../assets/images/laptop.png'

const ShopForMeItems = ({ service }) => {
    
const shopForMeItems = [
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemLink: "htttp/jjnkkukja.jhgyja...",
    itemCost: "$88.99",
    urgentPurchase: "No",
    quantity: 3,
    totalItemValue: "$112.49",
  },
];
const autoImportItems = [
  {
    image: car,
    itemName: "Benz s10",
    itemColor: "blue",
    itemValue: "$88.99",
    pickupCost: "$22.00",
  },
  {
    image: car,
    itemName: "Benz s10",
    itemColor: "blue",
    itemValue: "$88.99",
    pickupCost: "$22.00",
  },
  {
    image: car,
    itemName: "Benz s10",
    itemColor: "blue",
    itemValue: "$88.99",
    pickupCost: "$22.00",
  },
  {
    image: car,
    itemName: "Benz s10",
    itemColor: "blue",
    itemValue: "$88.99",
    pickupCost: "$22.00",
  },
];
const items = [
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemCost: "$88.99",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemCost: "$88.99",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemCost: "$88.99",
    quantity: 3,
    totalItemValue: "$112.49",
  },
  {
    image: laptop,
    itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
    itemCost: "$88.99",
    quantity: 3,
    totalItemValue: "$112.49",
  },
];


  return (
    <Box border="1px solid #CAC4D0" borderRadius="20px">
      {service === "Shop For Me" ? (
        <Grid
          sx={{
            bgcolor: "#F4EFF4",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          container
          p="20px 30px"
          gap="20px"
          wrap="nowrap"
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Items
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Item URL
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Item Cost From Store
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Urgent Purchase
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Quantity Of Items
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Total Value Of Item
          </Grid>
        </Grid>
      ) : service === "Auto Import" ? (
        <Grid
          sx={{
            bgcolor: "#F4EFF4",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          container
          p="30px"
        >
          <Grid item xs={3} sx={{ fontWeight: 600 }}>
            Items
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Car(s) Color
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Car Value
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Pickup Cost
          </Grid>
        </Grid>
      ) : (
        <Grid
          sx={{
            bgcolor: "#F4EFF4",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          container
          p="30px"
        >
          <Grid item xs={3} sx={{ fontWeight: 600 }}>
            Items
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Valur Per Item
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Quantity of Items
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            Total Value Of Item
          </Grid>
        </Grid>
      )}
      {service === "Shop For Me"
        ? shopForMeItems.map((item, i) => (
            <Grid
              key={i}
              sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
              container
              gap="20px"
              p="20px"
              wrap="nowrap"
            >
              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={item.image}
                  alt="car"
                  style={{ width: "61px", height: "54px" }}
                />
                <Typography fontSize={"14px"} fontWeight={600} color="#1D192B">
                  {item.itemName}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  <a
                    href={item.itemLink}
                    style={{
                      textDecoration: "none",
                      color: "#6750A4",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.itemLink}
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.itemCost}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.urgentPurchase}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.quantity}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.totalItemValue}
                </Typography>
              </Grid>
            </Grid>
          ))
        : service === "Auto Import"
        ? autoImportItems.map((item, i) => (
            <Grid
              key={i}
              sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
              container
              p="20px"
            >
              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={item.image}
                  alt="car"
                  style={{ width: "61px", height: "54px" }}
                />
                <Typography fontSize={"14px"} fontWeight={600} color="#1D192B">
                  {item.itemName}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.itemColor}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.itemValue}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.pickupCost}
                </Typography>
              </Grid>
            </Grid>
          ))
        : items.map((item, i) => (
            <Grid
              key={i}
              sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
              container
              p="20px"
            >
              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={item.image}
                  alt="car"
                  style={{ width: "61px", height: "54px" }}
                />
                <Typography fontSize={"14px"} fontWeight={600} color="#1D192B">
                  {item.itemName}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.itemCost}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.quantity}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} fontWeight={600}>
                  {item.totalItemValue}
                </Typography>
              </Grid>
            </Grid>
          ))}
      <Grid
        sx={{
          bgcolor: "#fff",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        container
        p="20px"
      >
        {service === "Auto Import" ? (
          <>
            <Grid item xs={8}></Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Typography fontSize={"14px"} color="#49454F">
                Total Declared Value:
              </Typography>
              <Typography fontSize={"20px"} color="#1C1B1F">
                $345.00
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Typography fontSize={"14px"} color="#49454F">
                Total pick up cost:
              </Typography>
              <Typography fontSize={"20px"} color="#1C1B1F">
                $345.00
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={4}>
              <Typography fontSize={"14px"} color="#49454F">
                Total Number Of Items:
              </Typography>
              <Typography fontSize={"20px"} color="#1C1B1F">
                {service === "Shop For Me"
                  ? shopForMeItems.length
                  : items.length}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={"14px"} color="#49454F">
                Total Gross Weight:
              </Typography>
              <Typography fontSize={"20px"} color="#1C1B1F">
                30lbs
              </Typography>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Typography fontSize={"14px"} color="#49454F">
                Total Declared Value:
              </Typography>
              <Typography fontSize={"20px"} color="#1C1B1F">
                $345.00
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default ShopForMeItems
