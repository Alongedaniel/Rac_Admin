/* eslint-disable react/prop-types */

import { ArrowCircleDown } from "iconsax-react";
import ChevronRight from "../../Icons/ChevronRight";
import CurrencyInput from "../Inputs/CurrencyInput";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import { useState } from "react";
import SwitchComp from "../Inputs/Switch";

function Step4({ service }) {
  console.log(service);
  const [drop, setDrop] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };
  return (
    <div>
      {/* {service === "import" && "export" && ( */}
      <div>
        <div className="flex items-center space-x-[10px] border-b-[2px] pb-[10px]">
          <ChevronRight />
          <p className="font-roboto font-[500] text-[14px] ">
            Provide the customer billing address
          </p>
        </div>
        <div className="mt-[30px] ">
          <div
            className={`${
              drop === 0 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
            } transition-all  border w-full  rounded-[10px]`}
          >
            <div
              onClick={() => toggle(0)}
              className={`${
                drop === 0 ? "" : "p-[10px]"
              } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
            >
              <p className="text-[22px]">
                Customer’s Default Address
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="mt-[20px] flex flex-col space-y-[30px] py-[10px] font-roboto">
              <div>
                <p className="font-[700]">Mr Rex Offor</p>
                <p>+234 8080006321</p>
                <p>rexoffor@gmail.com</p>
                <p>
                  29b Osolo Way Opposite Polaris Bank Ajao Estate, <br />
                  ikeja, Lagos State, USA, 075348
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] ">
          <div
            className={`${
              drop === 1 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
            } transition-all  border w-full  rounded-[10px]`}
          >
            <div
              onClick={() => toggle(1)}
              className={`${
                drop === 1 ? "" : "p-[10px]"
              } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
            >
              <p className="text-[22px]">
                Custom Billing Address
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="mt-[20px flex flex-col space-y-[30px] py-[20px]">
              <div className="mt-[20px] grid grid-cols-2 gap-[30px]">
                <TextInput
                  // value={item.color}
                  // onChange={(e) =>
                  //   handleItemChange(index, "color", e.target.value)
                  // }
                  label="Item URL *"
                />
                <TextInput
                  // value={item.color}
                  // onChange={(e) =>
                  //   handleItemChange(index, "color", e.target.value)
                  // }
                  label="First Name"
                />
              </div>

              <div className="grid grid-cols-3 gap-[30px]">
                <TextInput
                  // value={item.color}
                  // onChange={(e) =>
                  //   handleItemChange(index, "color", e.target.value)
                  // }
                  label="Email"
                />
                <div className="col-span-2">
                  <TextInput
                    // value={item.color}
                    // onChange={(e) =>
                    //   handleItemChange(index, "color", e.target.value)
                    // }
                    label="Contact Phone number *"
                  />
                </div>
              </div>
              <div>
                <TextInput
                  // value={item.color}
                  // onChange={(e) =>
                  //   handleItemChange(index, "color", e.target.value)
                  // }
                  label="Address *"
                />
              </div>
              <div className="grid grid-cols-3 gap-[30px]">
                <SelectInput
                  id="store"
                  label="Destination Country *"
                  // value={deliveryLocation}
                  // onChange={(e) => setDeliveryLocation(e.target.value)}
                  options={
                    <>
                      <option value="" className="">
                        Select a Country
                      </option>
                      <option value="nigeria" className="">
                        Nigeria
                      </option>
                    </>
                  }
                />
                <SelectInput
                  id="store"
                  label="Destination State *"
                  // value={deliveryLocation}
                  // onChange={(e) => setDeliveryLocation(e.target.value)}
                  options={
                    <>
                      <option value="" className="">
                        Select a State
                      </option>
                      <option value="nigeria" className="">
                        Akwa Ibom State
                      </option>
                    </>
                  }
                />
                <SelectInput
                  id="store"
                  label="Destination City *"
                  // value={deliveryLocation}
                  // onChange={(e) => setDeliveryLocation(e.target.value)}
                  options={
                    <>
                      <option value="" className="">
                        Select a City
                      </option>
                      <option value="nigeria" className="">
                        Uyo
                      </option>
                    </>
                  }
                />
              </div>
              <div>
                <TextInput
                  // value={item.color}
                  // onChange={(e) =>
                  //   handleItemChange(index, "color", e.target.value)
                  // }
                  label="Zip/Postal code"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col space-y-[30px]">
          <div className="flex items-center space-x-[10px] border-b-[2px] pb-[10px]">
            <ChevronRight />
            <p className="font-roboto font-[500] text-[14px] ">
              Confirm the Payments for this Order
            </p>
          </div>
          <div className=" flex items-center space-x-[20px] font-roboto">
            <p>
              Default Currency: <span className="font-[500]">USD</span>
            </p>
            <button className="border border-[#79747E] p-[8px_20px] text-brand/200 rounded-full">
              Change currency
            </button>
          </div>

          <div className="rounded-[20px] border font-roboto">
            <div className="bg-[#F4EFF4] rounded-t-[20px] p-[20px] grid gap-[20px] grid-cols-7 w-full">
              <div className="col-span-2">Items</div>
              <div>Item URL</div>
              <div>Item Cost from Store</div>
              <div>Urgent Purchase</div>
              <div>Quantity of items</div>
              <div>Total value of item</div>
            </div>
            <div className="p-[20px] grid grid-cols-7 w-full gap-[20px]">
              <div className="col-span-2 flex items-center space-x-[10px]">
                <div className="h-[60px] min-w-[60px] rounded-[5px] bg-gray-800"></div>
                <p>
                  SteelSeries Rival 5 Gaming <br /> Laptop with PrismSync RGB...
                </p>
              </div>
              <div>
                <p className="text-brand/200 underline cursor-pointer">
                  htttp/jjnkkukja.jhgyja...
                </p>
              </div>
              <div>$88.99</div>
              <div>No</div>
              <div>3</div>
              <div>$112.49</div>
            </div>
            <div className="bg-[#F4EFF4] rounded-b-[20px] p-[20px]  grid grid-cols-3">
              <div>
                <p>Total number of items:</p>
                <p>6</p>
              </div>
              <div>
                <p>Total Gross weight:</p>
                <p>30lbs</p>
              </div>
              <div>
                <p>Total declared Value:</p>
                <p>$345.00</p>
              </div>
            </div>
          </div>
        </div>
        {service === "import" && (
          <div className="mt-[30px] ">
            <div
              className={`${
                drop === 2 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(2)}
                className={`${
                  drop === 2 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Shipment Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div className="grid grid-cols-3 gap-[25px]">
                  <div className="p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="basicShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="basicShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Basic Shipping Method
                        </p>
                      </label>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Shipping Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Clearing, Port Handling:</p>
                      <p className="font-[500] text-[20px]">$0.00</p>
                    </div>
                  </div>
                  <div className="col-span-2 p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="customShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="customShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Custom Shipping Method
                        </p>
                      </label>
                    </div>

                    <div className="mt-[40px] grid grid-cols-2 gap-[30px]">
                      <CurrencyInput label="Shipping Cost *" />
                      <CurrencyInput label="Clearing, Port Handling *" />
                    </div>
                    <div className="mt-[30px]">
                      <CurrencyInput label="Duty Fee" />
                    </div>
                  </div>
                </div>
                <div className="border p-[20px] rounded-[10px] font-roboto">
                  <div className="grid grid-cols-4">
                    <div>
                      <p>Storage Charge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Insurance Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Payment Method Surcharge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>VAT:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <CurrencyInput
                      // value={item.color}
                      // onChange={(e) =>
                      //   handleItemChange(index, "color", e.target.value)
                      // }
                      label="Other Charges"
                    />
                  </div>
                </div>
                <div className="  grid grid-cols-3 gap-[30px] rounded-[10px] font-roboto">
                  <div className="border p-[20px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                      <p className="font-[500] font-roboto text-[20px]">
                        Discounts
                      </p>
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                    </div>
                    <div className="flex items-center space-x-[20px] my-[20px]">
                      <label
                        htmlFor="percent"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="percent"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>%%</p>
                      </label>
                      <label
                        htmlFor="dollar"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="dollar"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>$$</p>
                      </label>
                    </div>
                    <div className="mt-[20px]">
                      <CurrencyInput label="Discount" />
                    </div>
                  </div>
                  <div className="font-roboto">
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {service === "export" && (
          <div className="mt-[30px] ">
            <div
              className={`${
                drop === 2 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(2)}
                className={`${
                  drop === 2 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Shipment Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div className="grid grid-cols-3 gap-[25px]">
                  <div className="p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="basicShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="basicShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Basic Shipping Method
                        </p>
                      </label>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Shipping Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Clearing, Port Handling:</p>
                      <p className="font-[500] text-[20px]">$0.00</p>
                    </div>
                  </div>
                  <div className="col-span-2 p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="customShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="customShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Custom Shipping Method
                        </p>
                      </label>
                    </div>

                    <div className="mt-[40px] grid grid-cols-2 gap-[30px]">
                      <CurrencyInput label="Shipping Cost *" />
                      <CurrencyInput label="Clearing, Port Handling *" />
                    </div>
                    <div className="mt-[30px]">
                      <CurrencyInput label="Duty Fee" />
                    </div>
                  </div>
                </div>
                <div className="border p-[20px] rounded-[10px] font-roboto">
                  <div className="grid grid-cols-4">
                    <div>
                      <p>Storage Charge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Insurance Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Payment Method Surcharge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>VAT:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <CurrencyInput
                      // value={item.color}
                      // onChange={(e) =>
                      //   handleItemChange(index, "color", e.target.value)
                      // }
                      label="Other Charges"
                    />
                  </div>
                </div>
                <div className="  grid grid-cols-3 gap-[30px] rounded-[10px] font-roboto">
                  <div className="border p-[20px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                      <p className="font-[500] font-roboto text-[20px]">
                        Discounts
                      </p>
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                    </div>
                    <div className="flex items-center space-x-[20px] my-[20px]">
                      <label
                        htmlFor="percent"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="percent"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>%%</p>
                      </label>
                      <label
                        htmlFor="dollar"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="dollar"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>$$</p>
                      </label>
                    </div>
                    <div className="mt-[20px]">
                      <CurrencyInput label="Discount" />
                    </div>
                  </div>
                  <div className="font-roboto">
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {service === "import-auto" && (
          <div className="mt-[30px] space-y-[30px]">
            <div
              className={`${
                drop === 3 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(3)}
                className={`${
                  drop === 3 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Shipment Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div>
                  <CurrencyInput label="Shipping Cost *" />
                </div>
                <div className="border p-[20px] rounded-[10px]">
                  <p className="font-roboto text-[20px]">Additional Costs</p>
                  <div className="grid grid-cols-4 mt-[30px]">
                    <div>
                      <p>Storage Charge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Insurance Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Payment Method Surcharge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>VAT:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <CurrencyInput label="Shipping Cost *" />
                  </div>
                </div>
                <div className=" grid grid-cols-3 gap-[30px]">
                  <div className="flex items-center justify-between border p-[20px] rounded-[10px]">
                    <p className="font-[500] font-roboto text-[20px]">
                      Discounts
                    </p>
                    <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                  </div>
                  <div>
                    <p>Total Shipment Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Payment Status:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                drop === 4 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(4)}
                className={`${
                  drop === 4 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Clearing Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div>
                  <CurrencyInput label="Customs Clearing *" />
                </div>
                <div>
                  <button className="bg-gray-600 font-roboto p-[10px_25px] rounded-[10px] text-white">
                    Add New Payment
                  </button>
                </div>

                <div className=" grid grid-cols-3 gap-[30px]">
                  <div className="flex items-center justify-between border p-[20px] rounded-[10px]">
                    <p className="font-[500] font-roboto text-[20px]">
                      Discounts
                    </p>
                    <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                  </div>
                  <div>
                    <p>Total Clearing Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Payment Status:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {service === "shop-for-me" && (
          <div className="mt-[30px] space-y-[30px] grid pb-[30px]">
            <div
              className={`${
                drop === 3 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(3)}
                className={`${
                  drop === 3 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Shop For Me Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div className="grid grid-cols-3 gap-[30px]">
                  <div>
                    <p>Total Item(s) Cost from Store(s):</p>
                    <p className="font-[500] text-[20px]">$23.00</p>
                  </div>
                  <div>
                    <p>Total Processing Fee:</p>
                    <p className="font-[500] text-[20px]">$23.00</p>
                  </div>
                  <div>
                    <p>Total Urgent Purchase Fee:</p>
                    <p className="font-[500] text-[20px]">$23.00</p>
                  </div>
                  <div>
                    <p>Payment Method Surcharge:</p>
                    <p className="font-[500] text-[20px]">$23.00</p>
                  </div>
                  <div>
                    <p>VAT:</p>
                    <p className="font-[500] text-[20px]">$23.00</p>
                  </div>
                </div>
                <div>
                  <CurrencyInput label="Total Shipping to Origin Warehouse cost" />
                </div>
                <div className=" grid grid-cols-3 gap-[30px]">
                  <div className="flex items-center justify-between border p-[20px] rounded-[10px]">
                    <p className="font-[500] font-roboto text-[20px]">
                      Discounts
                    </p>
                    <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                  </div>
                  <div>
                    <p>Total Shipment Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Payment Status:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                drop === 3 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
              } transition-all  border w-full  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(3)}
                className={`${
                  drop === 3 ? "" : "p-[10px]"
                } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Shipment Cost
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="mt-[20px] flex flex-col space-y-[30px] py-[20px]">
                <div className="grid grid-cols-3 gap-[25px]">
                  <div className="p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="basicShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="basicShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Basic Shipping Method
                        </p>
                      </label>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Shipping Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                      <p>Clearing, Port Handling:</p>
                      <p className="font-[500] text-[20px]">$0.00</p>
                    </div>
                  </div>
                  <div className="col-span-2 p-[20px] rounded-[10px] border">
                    <div className="flex items-center space-x-[20px]">
                      <label
                        htmlFor="customShipping"
                        className="flex items-center space-x-[20px] cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="h-[24px] w-[24px]"
                          name="shippingMethod"
                          id="customShipping"
                        />
                        <p className="font-roboto font-[500]">
                          {" "}
                          Custom Shipping Method
                        </p>
                      </label>
                    </div>

                    <div className="mt-[40px] grid grid-cols-2 gap-[30px]">
                      <CurrencyInput label="Shipping Cost *" />
                      <CurrencyInput label="Clearing, Port Handling *" />
                    </div>
                    <div className="mt-[30px]">
                      <CurrencyInput label="Duty Fee" />
                    </div>
                  </div>
                </div>
                <div className="border p-[20px] rounded-[10px]">
                  <p className="font-roboto text-[20px]">Additional Costs</p>
                  <div className="grid grid-cols-4 mt-[30px]">
                    <div>
                      <p>Storage Charge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Insurance Cost:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>Payment Method Surcharge:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                    <div>
                      <p>VAT:</p>
                      <p className="font-[500] text-[20px]">$23.00</p>
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <CurrencyInput label="Shipping Cost *" />
                  </div>
                </div>
                <div className="  grid grid-cols-3 gap-[30px] rounded-[10px] font-roboto">
                  <div className="border p-[20px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                      <p className="font-[500] font-roboto text-[20px]">
                        Discounts
                      </p>
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                    </div>
                    <div className="flex items-center space-x-[20px] my-[20px]">
                      <label
                        htmlFor="percent"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="percent"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>%%</p>
                      </label>
                      <label
                        htmlFor="dollar"
                        className="flex items-center space-x-[10px]"
                      >
                        <input
                          type="radio"
                          id="dollar"
                          className="h-[24px] w-[24px] text-brand/200"
                          name="disc"
                        />
                        <p>$$</p>
                      </label>
                    </div>
                    <div className="mt-[20px]">
                      <CurrencyInput label="Discount" />
                    </div>
                  </div>
                  <div className="font-roboto">
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <p className="font-[500] text-[20px]">$5,682,345.00</p>
                  </div>
                  <div>
                    {" "}
                    <p>Total Shipment Cost:</p>
                    <div className="flex items-center space-x-[20px] mt-[20px]">
                      <SwitchComp enabled={enabled} setEnabled={setEnabled} />
                      <p className="text-[20px]">Unpaid</p>
                      <button className="bg-[#B3261E] text-white text-[18px] p-[5px_20px] rounded-full">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
}

export default Step4;
