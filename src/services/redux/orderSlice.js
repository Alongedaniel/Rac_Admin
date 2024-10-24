import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("orderFormData");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("orderFormData", serializedState);
  } catch {
    // Ignore write errors
  }
};

const initialState = loadState() || {
  assignedCustomer: "",
  orderType: "",
  orderStatus: "",
  service: "",
  shipmentMethod: "",
  deliveryCompany: "",
  deliveryLocation: "",
  items: [
    {
      name: "",
      image: "",
      cost: "",
      quantity: 0,
      description: "",
      color: "",
      properties: [
        {
          name: "",
          description: "",
        },
      ],
    },
  ],
  carItem: [
    {
      brand: "",
      model: "",
      prodYear: "",
      value: "",
      condition: "",
      color: "",
      millage: "",
      vin: "",
      weblink: "",
      picture: "",
      titleCopy: "",
      description: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      contactAddress: "",
      carCountry: "",
      carState: "",
      carCity: "",
      locationType: "",
      pickupDate: "",
      properties: [
        {
          name: "",
          description: "",
        },
      ],
    },
  ],
  shopItem: [
    {
      store: "",
      urgentPurchase: "",
      itemUrl: "",
      itemName: "",
      originalPrice: "",
      quantity: 0,
      shippingCost: "",
      itemPicture: "",
      description: "",

      properties: [
        {
          name: "",
          description: "",
        },
      ],
      color: "",
    },
  ],
  weight: "",
  length: "",
  width: "",
  height: "",
  destinationAddress: "",
  receiverFirstName: "",
  receiverLastName: "",
  receiverPhone: "",
  receiverEmail: "",
  receiverAddress: "",
  destinationCountry: "",
  destinationState: "",
  destinationCity: "",
  destinationZip: "",
};

const orderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      saveState(state);
    },
    clearFormData: (state) => {
      localStorage.removeItem("orderFormData");
      return initialState;
    },

    addItem: (state, action) => {
      const newItem = action.payload;

      // Check if all fields of the previous item are filled
      const isPreviousItemFilled =
        state.items.length === 0 ||
        (state.items[state.items.length - 1].name !== "" &&
          state.items[state.items.length - 1].cost !== "" &&
          state.items[state.items.length - 1].quantity !== 0 &&
          state.items[state.items.length - 1].description !== "" &&
          state.items[state.items.length - 1].image !== "" && // Check if the image is a non-empty string
          state.items[state.items.length - 1].color !== "");

      if (isPreviousItemFilled) {
        state.items.push(newItem);
      } else {
        toast.error("Please fill all fields of the previous item first");
      }
    },
    addCarItem: (state, action) => {
      const newItem = {
        brand: "",
        model: "",
        prodYear: "",
        value: "",
        condition: "",
        color: "",
        millage: "",
        vin: "",
        weblink: "",
        picture: "",
        titleCopy: "",
        description: "",
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        contactAddress: "",
        carCountry: "",
        carState: "",
        carCity: "",
        locationType: "",
        pickupDate: "",
        properties: [
          {
            name: "",
            description: "",
          },
        ],
      };

      state.carItem.push({ ...newItem, ...action.payload });
    },
    addShopItem: (state, action) => {
      const newShopItem = {
        store: "",
        urgentPurchase: "",
        itemUrl: "",
        itemName: "",
        originalPrice: "",
        quantity: 0,
        shippingCost: "",
        itemPicture: "",
        description: "",

        properties: [
          {
            name: "",
            description: "",
          },
        ],
        color: "",
      };

      state.shopItem.push({ ...newShopItem, ...action.payload });
    },

    updateItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.items[index][field] = value;
      saveState(state);
    },
    updateShopItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.shopItem[index][field] = value;
      saveState(state);
    },
    updateCarItem: (state, action) => {
      const { index, field, value } = action.payload;
      state.carItem[index][field] = value;
      saveState(state);
    },

    deleteItem: (state, action) => {
      const index = action.payload;
      if (index > 0 && index < state.items.length) {
        state.items.splice(index, 1);
        saveState(state);
      }
    },
    deleteShopItem: (state, action) => {
      const index = action.payload;
      if (index > 0 && index < state.shopItem.length) {
        state.shopItem.splice(index, 1);
        saveState(state);
      }
    },
    deleteCarItem: (state, action) => {
      const index = action.payload;
      if (index > 0 && index < state.carItem.length) {
        state.carItem.splice(index, 1);
        saveState(state);
      }
    },

    updateItemQuantity: (state, action) => {
      const { index, increment } = action.payload;
      const item = state.items[index];
      if (item) {
        // Increment or decrement the quantity based on the 'increment' parameter
        item.quantity = increment
          ? item.quantity + 1
          : Math.max(item.quantity - 1, 0);
        saveState(state); // Save to localStorage
      }
    },
    updateShopItemQuantity: (state, action) => {
      const { index, increment } = action.payload;
      const item = state.shopItem[index];

      if (item) {
        // Increment or decrement the quantity based on the 'increment' parameter
        item.quantity = increment
          ? item.quantity + 1
          : Math.max(item.quantity - 1, 0);
        saveState(state); // Save to localStorage
      }
    },

    addProperty: (state, action) => {
      const { index, property } = action.payload;
      state.items[index].properties.push(property);
      saveState(state);
    },
    addCarProperty: (state, action) => {
      const { index, property } = action.payload;
      state.carItem[index].properties.push(property);
      saveState(state);
    },
    addShopProperty: (state, action) => {
      const { index, property } = action.payload;
      state.shopItem[index].properties.push(property);
      saveState(state);
    },

    updateProperty: (state, action) => {
      const { index, propertyIndex, updatedProperty } = action.payload;

      // Use Immer's produce to safely update the state
      state.items[index].properties[propertyIndex] = updatedProperty;
      saveState(state);
    },
    updateCarProperty: (state, action) => {
      const { index, propertyIndex, updatedProperty } = action.payload;

      // Use Immer's produce to safely update the state
      state.carItem[index].properties[propertyIndex] = updatedProperty;
      saveState(state);
    },
    updateShopProperty: (state, action) => {
      const { index, propertyIndex, updatedProperty } = action.payload;

      // Use Immer's produce to safely update the state
      state.shopItem[index].properties[propertyIndex] = updatedProperty;
      saveState(state);
    },

    deleteProperty: (state, action) => {
      const { index, propertyIndex } = action.payload;

      // Use filter to create a new array excluding the property to be deleted
      state.items[index].properties = state.items[index].properties.filter(
        (_, i) => i !== propertyIndex,
      );
      saveState(state);
    },
    deleteCarProperty: (state, action) => {
      const { index, propertyIndex } = action.payload;

      // Use filter to create a new array excluding the property to be deleted
      state.carItem[index].properties = state.carItem[index].properties.filter(
        (_, i) => i !== propertyIndex,
      );
      saveState(state);
    },
    deleteShopProperty: (state, action) => {
      const { index, propertyIndex } = action.payload;

      // Use filter to create a new array excluding the property to be deleted
      state.carItem[index].properties = state.carItem[index].properties.filter(
        (_, i) => i !== propertyIndex,
      );
      saveState(state);
    },
  },
});

export const {
  updateField,
  clearFormData,
  addItem,
  updateItem,
  deleteItem,
  updateItemQuantity,
  updateProperty,
  addProperty,
  deleteProperty,
  updateCarItem,
  addCarItem,
  deleteCarItem,
  addCarProperty,
  updateCarProperty,
  deleteCarProperty,
  updateShopItem,
  updateShopItemQuantity,
  updateShopProperty,
  addShopProperty,
  deleteShopProperty,
  addShopItem,
  deleteShopItem,
} = orderSlice.actions;

export default orderSlice.reducer;
