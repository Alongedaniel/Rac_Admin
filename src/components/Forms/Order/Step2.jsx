/* eslint-disable react/prop-types */

import { useState } from "react";
import ChevronRight from "../../Icons/ChevronRight";
import SelectInput from "../Inputs/SelectInput";
import { ArrowCircleDown, Bag } from "iconsax-react";
import TextInput from "../Inputs/TextInput";
import CurrencyInput from "../Inputs/CurrencyInput";
import QuantityInput from "../Inputs/QuantityInput";
import FileInput from "../Inputs/FileInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  updateField,
  updateItem,
  updateCarItem,
  addCarItem,
  deleteCarItem,
  updateShopItem,
  addShopItem,
  deleteShopItem,
} from "../../../services/redux/orderSlice";
import Properties from "../../Modals/Properties";
import DateInput from "../Inputs/DateField";
import CarProperties from "../../Modals/CarProperties";
import ShopProperties from "../../Modals/ShopProperties";

function Step2() {
  const [drop, setDrop] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  function handleItemChange(index, field, value) {
    dispatch(updateItem({ index, field, value }));
  }
  function handleShopItemChange(index, field, value) {
    dispatch(updateShopItem({ index, field, value }));
  }

  function handleCarItemChange(index, field, value) {
    dispatch(updateCarItem({ index, field, value }));
  }

  function deleteCarItemFunc(index) {
    dispatch(deleteCarItem(index));
  }

  function addNewItem() {
    dispatch(
      addItem({
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
      })
    );
  }

  function addNewCarItem() {
    dispatch(addCarItem());
  }
  function addNewShopItem() {
    dispatch(addShopItem());
  }

  function deleteSingleItem(index) {
    dispatch(deleteItem(index));
  }
  function deleteShopItemFunc(index) {
    dispatch(deleteShopItem(index));
  }

  return (
    <div>
      {/* {order.service === "import" && ( */}
      <div>
        <div>
          <div className="flex items-center space-x-[10px] border-b-[2px] pb-[10px]">
            <ChevronRight />
            <p className="font-roboto font-[500] text-[14px] ">
              Tell us where this package will be shipped from
            </p>
          </div>
          <div className="mt-[30px]">
            <SelectInput
              id="order"
              label="Origin/Shipment Location"
              value={order.deliveryLocation}
              onChange={(e) =>
                handleFieldChange("deliveryLocation", e.target.value)
              }
              options={
                <>
                  <option value="" className="">
                    Select Shipment Location
                  </option>
                  <option value="shipment" className="">
                    Shipment
                  </option>
                  <option value="" className="">
                    Shipment
                  </option>
                  <option value="" className="">
                    Shipment
                  </option>
                  <option value="" className="">
                    Shipment
                  </option>
                </>
              }
            />
          </div>
        </div>
        {order.service === "import" && (
          <div className="w-full ">
            <div className="min-w-full">
              <div className="flex items-center space-x-[10px] mt-[30px]">
                <ChevronRight />
                <p className="font-roboto font-[500] text-[14px] ">
                  Add details about your package
                </p>
              </div>

              <div className=" mt-[20px] flex flex-col space-y-[10px] min-w-full">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center min-w-full space-x-[20px]"
                  >
                    <div
                      className={`${
                        drop === index + 1
                          ? "h-full p-[10px]"
                          : "h-[40px] overflow-hidden"
                      } transition-all  border  rounded-[10px]`}
                    >
                      <div
                        onClick={() => toggle(index + 1)}
                        className={`${
                          drop === index + 1 ? "" : "p-[10px]"
                        } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                      >
                        <p className="text-[22px]">
                          Item -{" "}
                          <span className="text-brand/200"># {index + 1}</span>
                        </p>
                        <ArrowCircleDown color="#292D32" variant="Outline" />
                      </div>
                      <div className="mt-[20px flex flex-col space-y-[30px]">
                        <div className="mt-[20px]">
                          <TextInput
                            label="Item Name"
                            id="itemName"
                            value={item.name}
                            onChange={(e) =>
                              handleItemChange(index, "name", e.target.value)
                            }
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-[20px]">
                          <div className="col-span-2">
                            <CurrencyInput
                              label="Item Original Cost"
                              id="itemCost"
                              value={item.cost}
                              onChange={(e) =>
                                handleItemChange(index, "cost", e.target.value)
                              }
                            />
                          </div>
                          <div className="">
                            <QuantityInput
                              quantity={item.quantity}
                              index={index}
                              label="Quantity"
                              id="quantity"
                              value={item.quantity}
                            />
                          </div>
                        </div>
                        <div>
                          <FileInput label="Upload Product/Item Picture" />
                        </div>
                        <div>
                          <TextAreaInput
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            label="Product/Item Description"
                          />
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex items-center space-x-[10px] ">
                            <ChevronRight />
                            <p className="font-roboto font-[500] text-[14px] ">
                              Describe the item you wish to purchase further
                              with the following properties
                            </p>
                          </div>
                          <div className="my-[20px]  flex items-center space-x-[20px]">
                            <div className="w-[500px]">
                              <TextInput
                                value={item.color}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "color",
                                    e.target.value
                                  )
                                }
                                label="Item Color"
                              />
                            </div>
                            <button
                              onClick={() => setOpen(!open)}
                              className=" min-w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
                            >
                              Add Properties
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Properties
                      item={item}
                      index={index}
                      isOpen={open}
                      setIsOpen={setOpen}
                    />

                    <button
                      className="w-fit border"
                      onClick={() => deleteSingleItem(index)}
                    >
                      <Bag className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={addNewItem}
              className=" mt-[20px] w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
            >
              Add new product/item
            </button>
          </div>
        )}
        {order.service === "export" && (
          <div className="w-full ">
            <div className="min-w-full">
              <div className="flex items-center space-x-[10px] mt-[30px]">
                <ChevronRight />
                <p className="font-roboto font-[500] text-[14px] ">
                  Add details about your package
                </p>
              </div>

              <div className=" mt-[20px] flex flex-col space-y-[10px] min-w-full">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center min-w-full space-x-[20px]"
                  >
                    <div
                      className={`${
                        drop === index + 1
                          ? "h-full p-[10px]"
                          : "h-[40px] overflow-hidden"
                      } transition-all  border  rounded-[10px]`}
                    >
                      <div
                        onClick={() => toggle(index + 1)}
                        className={`${
                          drop === index + 1 ? "" : "p-[10px]"
                        } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                      >
                        <p className="text-[22px]">
                          Item -{" "}
                          <span className="text-brand/200"># {index + 1}</span>
                        </p>
                        <ArrowCircleDown color="#292D32" variant="Outline" />
                      </div>
                      <div className="mt-[20px flex flex-col space-y-[30px]">
                        <div className="mt-[20px]">
                          <TextInput
                            label="Item Name"
                            id="itemName"
                            value={item.name}
                            onChange={(e) =>
                              handleItemChange(index, "name", e.target.value)
                            }
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-[20px]">
                          <div className="col-span-2">
                            <CurrencyInput
                              label="Item Original Cost"
                              id="itemCost"
                              value={item.cost}
                              onChange={(e) =>
                                handleItemChange(index, "cost", e.target.value)
                              }
                            />
                          </div>
                          <div className="">
                            <QuantityInput
                              quantity={item.quantity}
                              index={index}
                              label="Quantity"
                              id="quantity"
                              value={item.quantity}
                            />
                          </div>
                        </div>
                        <div>
                          <FileInput label="Upload Product/Item Picture" />
                        </div>
                        <div>
                          <TextAreaInput
                            value={item.description}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            label="Product/Item Description"
                          />
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex items-center space-x-[10px] ">
                            <ChevronRight />
                            <p className="font-roboto font-[500] text-[14px] ">
                              Describe the item you wish to purchase further
                              with the following properties
                            </p>
                          </div>
                          <div className="my-[20px]  flex items-center space-x-[20px]">
                            <div className="w-[500px]">
                              <TextInput
                                value={item.color}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "color",
                                    e.target.value
                                  )
                                }
                                label="Item Color"
                              />
                            </div>
                            <button
                              onClick={() => setOpen(!open)}
                              className=" min-w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
                            >
                              Add Properties
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Properties
                      item={item}
                      index={index}
                      isOpen={open}
                      setIsOpen={setOpen}
                    />

                    <button
                      className="w-fit border"
                      onClick={() => deleteSingleItem(index)}
                    >
                      <Bag className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={addNewItem}
              className=" mt-[20px] w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
            >
              Add new product/item
            </button>
          </div>
        )}
        {order.service === "import-auto" && (
          <div>
            <div>
              <div className="flex items-center space-x-[10px] mt-[30px]">
                <ChevronRight />
                <p className="font-roboto font-[500] text-[14px] ">
                  Add details about your package
                </p>
              </div>
              <div className=" mt-[20px] flex flex-col space-y-[10px]">
                {order.carItem.map((item, index) => (
                  <div key={index} className="flex items-center space-x-[30px]">
                    <div
                      className={`${
                        drop === index + 1
                          ? "h-full p-[10px]"
                          : "h-[40px] overflow-hidden"
                      } transition-all w-full  border  rounded-[10px]`}
                    >
                      <div
                        onClick={() => toggle(index + 1)}
                        className={`${
                          drop === index + 1 ? "" : "p-[10px]"
                        } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                      >
                        <p className="text-[22px]">
                          Car -{" "}
                          <span className="text-brand/200">#{index + 1}</span>
                        </p>
                        <ArrowCircleDown color="#292D32" variant="Outline" />
                      </div>
                      <div className="mt-[20px flex flex-col space-y-[30px]">
                        <div className="mt-[20px] grid grid-cols-3 gap-[30px]">
                          <SelectInput
                            id="name"
                            label="Car Brand"
                            value={item.brand}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "brand",
                                e.target.value
                              )
                            }
                            options={
                              <>
                                <option value="" className="">
                                  Select Car Brand
                                </option>
                                <option value="toyota" className="">
                                  Toyota
                                </option>
                                <option value="mazda" className="">
                                  Mazda
                                </option>
                              </>
                            }
                          />
                          <SelectInput
                            id="brand"
                            label="Model"
                            value={item.model}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "model",
                                e.target.value
                              )
                            }
                            options={
                              <>
                                <option value="" className="">
                                  Select Car Model
                                </option>
                                <option value="avensis" className="">
                                  Avensis
                                </option>
                              </>
                            }
                          />
                          <SelectInput
                            id="prodyear"
                            label="Production Year"
                            value={item.prodYear}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "prodYear",
                                e.target.value
                              )
                            }
                            options={
                              <>
                                <option value="" className="">
                                  Select Car Prod Year
                                </option>
                                <option value="1992" className="">
                                  1992
                                </option>
                              </>
                            }
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-[30px]">
                          <div className="">
                            <CurrencyInput
                              label="Car Value"
                              id="itemCost"
                              value={item.value}
                              onChange={(e) =>
                                handleCarItemChange(
                                  index,
                                  "value",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <SelectInput
                            id="name"
                            label="Car Condition"
                            value={item.condition}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "condition",
                                e.target.value
                              )
                            }
                            options={
                              <>
                                <option value="" className="">
                                  Select Car Condition
                                </option>
                                <option value="drivable" className="">
                                  Drivable
                                </option>
                              </>
                            }
                          />
                          <TextInput
                            value={item.color}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "color",
                                e.target.value
                              )
                            }
                            label="Car Color"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-[30px]">
                          <TextInput
                            value={item.millage}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "millage",
                                e.target.value
                              )
                            }
                            label="Millage"
                          />
                          <TextInput
                            value={item.vin}
                            onChange={(e) =>
                              handleCarItemChange(index, "vin", e.target.value)
                            }
                            label="VIN Number"
                          />
                          <TextInput
                            value={item.weblink}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "weblink",
                                e.target.value
                              )
                            }
                            label="Direct URL/Website Link to the Car"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-[30px]">
                          <FileInput label="Upload Car Picture *" />
                          <FileInput label="Upload Copy of Car Title" />
                        </div>
                        <div className="bg-[#F2B8B5] p-[15px_20px] rounded-[20px] font-roboto">
                          <p className="font-[700]">Note:</p>
                          <p>
                            We need the details of the car title before we can
                            schedule a pick up, Be sure sure that our driver can
                            collect can it during pick up, as we can’t ship a
                            car without the title.
                          </p>
                        </div>
                        <div>
                          <TextAreaInput
                            value={item.description}
                            onChange={(e) =>
                              handleCarItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            label="Additional Car Description"
                          />
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex items-center space-x-[10px] ">
                            <ChevronRight />
                            <p className="font-roboto font-[500] text-[14px] ">
                              Describe the item you wish to purchase further
                              with the following properties
                            </p>
                          </div>
                          <div className="my-[20px]  flex items-center space-x-[20px]">
                            <div className="w-[500px]">
                              <TextInput
                                value={item.color}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "color",
                                    e.target.value
                                  )
                                }
                                label="Item Color"
                              />
                            </div>
                            <CarProperties
                              item={item}
                              index={index}
                              isOpen={open1}
                              setIsOpen={setOpen1}
                            />
                            <button
                              onClick={() => setOpen1(!open1)}
                              className=" min-w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
                            >
                              Add Properties
                            </button>
                          </div>
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex items-center space-x-[10px] ">
                            <ChevronRight />
                            <p className="font-roboto font-[500] text-[14px] ">
                              Additional details
                            </p>
                          </div>
                          <div className="mt-[25px] grid gap-[30px]">
                            <p className="text-[22px] font-roboto">
                              Enable Pickup
                            </p>
                            <div className="grid grid-cols-3 gap-[30px] ">
                              <div>
                                <TextInput
                                  value={item.contactName}
                                  onChange={(e) =>
                                    handleCarItemChange(
                                      index,
                                      "contactName",
                                      e.target.value
                                    )
                                  }
                                  label="Pick up Contact Name *"
                                />
                              </div>
                              <div className="col-span-2">
                                <TextInput
                                  value={item.contactPhone}
                                  onChange={(e) =>
                                    handleCarItemChange(
                                      index,
                                      "contactPhone",
                                      e.target.value
                                    )
                                  }
                                  label="Contact Phone number *"
                                />
                              </div>
                            </div>

                            <div>
                              <TextInput
                                value={item.contactEmail}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "contactEmail",
                                    e.target.value
                                  )
                                }
                                label="Pick up Contact Email Address"
                              />
                            </div>
                            <div>
                              <TextInput
                                value={item.contactAddress}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "contactAddress",
                                    e.target.value
                                  )
                                }
                                label="Pick up Address *"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-[30px]">
                              <SelectInput
                                id="order"
                                label="Location Of The Car (Country) *"
                                value={item.carCountry}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "carCountry",
                                    e.target.value
                                  )
                                }
                                options={
                                  <>
                                    <option value="" className="">
                                      Select Country
                                    </option>
                                    <option value="usa" className="">
                                      United States
                                    </option>
                                  </>
                                }
                              />
                              <SelectInput
                                id="order"
                                label="Location Of The Car (State) *"
                                value={item.carState}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "carState",
                                    e.target.value
                                  )
                                }
                                options={
                                  <>
                                    <option value="" className="">
                                      Select State
                                    </option>
                                    <option value="chicago" className="">
                                      Chicago
                                    </option>
                                  </>
                                }
                              />
                              <SelectInput
                                id="order"
                                label="Location Of The Car (City) *"
                                value={item.carCity}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "carCity",
                                    e.target.value
                                  )
                                }
                                options={
                                  <>
                                    <option value="" className="">
                                      Select City
                                    </option>
                                    <option value="la" className="">
                                      Los Angeles
                                    </option>
                                  </>
                                }
                              />
                            </div>
                            <p>
                              The car location(city) is used to determine the
                              pickup cost. Select a car in Houston or Atlanta
                              city to enjoy a pick-up cost of just $195
                            </p>

                            <div className="grid grid-cols-2 gap-[30px]">
                              <DateInput
                                id="date"
                                label="Pick up date *"
                                value={item.pickupDate}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "pickupDate",
                                    e.target.value
                                  )
                                }
                              />
                              <SelectInput
                                id="name"
                                label="Pickup Location Type *"
                                value={item.locationType}
                                onChange={(e) =>
                                  handleCarItemChange(
                                    index,
                                    "locationType",
                                    e.target.value
                                  )
                                }
                                options={
                                  <>
                                    <option value="" className="">
                                      Select Location Type
                                    </option>
                                    <option value="drivable" className="">
                                      Drivable
                                    </option>
                                  </>
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => deleteCarItemFunc(index)}>
                      delete
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addNewCarItem}
                className=" mt-[20px] w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
              >
                Add New
              </button>
            </div>
          </div>
        )}
        {order.service === "shop-for-me" && (
          <div>
            <div className="w-full">
              <div className="flex items-center space-x-[10px] mt-[30px]">
                <ChevronRight />
                <p className="font-roboto font-[500] text-[14px] ">
                  Add details about your package
                </p>
              </div>

              <div className="w-full mt-[20px] flex flex-col space-y-[10px]">
                {order.shopItem.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center  space-x-[20px]"
                  >
                    <div
                      className={`${
                        drop === index + 1
                          ? "h-full p-[10px]"
                          : "h-[40px] overflow-hidden"
                      } transition-all  border w-full  rounded-[10px]`}
                    >
                      <div
                        onClick={() => toggle(index + 1)}
                        className={`${
                          drop === index + 1 ? "" : "p-[10px]"
                        } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                      >
                        <p className="text-[22px]">
                          Item -{" "}
                          <span className="text-brand/200"># {index + 1}</span>
                        </p>
                        <ArrowCircleDown color="#292D32" variant="Outline" />
                      </div>
                      <div className="mt-[20px flex flex-col space-y-[30px]">
                        <div className="mt-[20px] grid grid-cols-3 gap-[30px]">
                          <div className="col-span-2">
                            <SelectInput
                              id="store"
                              label="Store"
                              value={item.store}
                              onChange={(e) =>
                                handleShopItemChange(
                                  index,
                                  "store",
                                  e.target.value
                                )
                              }
                              options={
                                <>
                                  <option value="" className="">
                                    Select a Store
                                  </option>
                                  <option value="common" className="">
                                    Common
                                  </option>
                                </>
                              }
                            />
                          </div>
                          <div>
                            <SelectInput
                              id="store"
                              label="Urgent Purchase"
                              value={item.urgentPurchase}
                              onChange={(e) =>
                                handleShopItemChange(
                                  index,
                                  "urgentPurchase",
                                  e.target.value
                                )
                              }
                              options={
                                <>
                                  <option value="" className="">
                                    Select an Option
                                  </option>
                                  <option value="yes" className="">
                                    Yes
                                  </option>
                                  <option value="no" className="">
                                    No
                                  </option>
                                </>
                              }
                            />
                          </div>
                        </div>

                        <div className="grid gap-[30px]">
                          <TextInput
                            value={item.itemUrl}
                            onChange={(e) =>
                              handleShopItemChange(
                                index,
                                "itemUrl",
                                e.target.value
                              )
                            }
                            label="Item URL *"
                          />
                          <TextInput
                            value={item.itemName}
                            onChange={(e) =>
                              handleShopItemChange(
                                index,
                                "itemName",
                                e.target.value
                              )
                            }
                            label="Item Name *"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-[20px]">
                          <div className="col-span-2">
                            <CurrencyInput
                              label="Item Original Cost"
                              id="itemCost"
                              value={item.originalPrice}
                              onChange={(e) =>
                                handleShopItemChange(
                                  index,
                                  "originalPrice",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="">
                            <QuantityInput
                              quantity={item.quantity}
                              label="Quantity"
                              id="quantity"
                              index={index}
                              value={item.quantity}
                            />
                          </div>
                        </div>
                        <div>
                          <CurrencyInput
                            label="Total shipping cost to your warehouse & Sales Tax"
                            id="itemCost"
                            value={item.shippingCost}
                            onChange={(e) =>
                              handleShopItemChange(
                                index,
                                "shippingCost",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <FileInput label="Upload Product/Item Picture" />
                        </div>
                        <div>
                          <TextAreaInput
                            value={item.description}
                            onChange={(e) =>
                              handleShopItemChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            label="Additional Product/Item Description"
                          />
                        </div>
                        <div className="mt-[30px]">
                          <div className="flex items-center space-x-[10px] ">
                            <ChevronRight />
                            <p className="font-roboto font-[500] text-[14px] ">
                              Describe the item you wish to purchase further
                              with the following properties
                            </p>
                          </div>
                          <div className="my-[20px]  flex items-center space-x-[20px]">
                            <div className="w-[500px]">
                              <TextInput
                                value={item.color}
                                onChange={(e) =>
                                  handleShopItemChange(
                                    index,
                                    "color",
                                    e.target.value
                                  )
                                }
                                label="Item Color"
                              />
                            </div>
                            <button
                              onClick={() => setOpen2(true)}
                              className=" min-w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
                            >
                              Add Properties
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ShopProperties
                      item={item}
                      index={index}
                      isOpen={open2}
                      setIsOpen={setOpen2}
                    />
                    <button
                      className="w-fit border"
                      onClick={() => deleteShopItemFunc(index)}
                    >
                      <Bag className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addNewShopItem}
                className=" mt-[20px] w-[200px] rounded-[20px] bg-gray-600 p-[15px_20px] font-roboto text-white"
              >
                Add item
              </button>
            </div>
          </div>
        )}
        <div className="mt-[20px] border-t pt-[20px] grid grid-cols-4 gap-[30px]">
          <TextInput
            value={order.weight}
            onChange={(e) => handleFieldChange("weight", e.target.value)}
            label="Total Weight (in kg) *"
          />
          <TextInput
            value={order.length}
            onChange={(e) => handleFieldChange("length", e.target.value)}
            label="Total Length (in Inches) *"
          />
          <TextInput
            value={order.width}
            onChange={(e) => handleFieldChange("width", e.target.value)}
            label="Total Width (in Inches) *"
          />
          <TextInput
            value={order.height}
            onChange={(e) => handleFieldChange("height", e.target.value)}
            label="Total Height (in Inches) *"
          />
        </div>
      </div>
    </div>
  );
}

export default Step2;
