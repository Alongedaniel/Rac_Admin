/* eslint-disable react/prop-types */

import { useState } from "react";
import ChevronRight from "../../Icons/ChevronRight";
import { ArrowCircleDown } from "iconsax-react";

function Step5({ service }) {
  const [drop, setDrop] = useState(null);
  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };
  return (
    <div className="grid gap-[30px]">
      <div>
        <div className="flex items-center space-x-[10px]  ">
          <ChevronRight />
          <p className="font-roboto font-[500] text-[14px] ">
            Order Information
          </p>
        </div>
        <div className="mt-[20px]">
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
                Shop For Me Cost
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="grid grid-cols-5 gap-[30px]">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Assigned Customer:</p>
                <p className="font-[500] text-[20px]">Reno Offorex</p>
              </div>
              <div></div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Type:</p>
                <p className="font-[500] text-[20px]">Shipment</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Status:</p>
                <p className="font-[500] text-[20px]">Under Process</p>
              </div>
              <div></div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Service:</p>
                <p className="font-[500] text-[20px]">Export</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Shipment Method:</p>
                <p className="font-[500] text-[20px]">Air</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Delivery Company:</p>
                <p className="font-[500] text-[20px]">DHL</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Date:</p>
                <p className="font-[500] text-[20px]">12/02/2023</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Time:</p>
                <p className="font-[500] text-[20px]">9:48am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-[10px]  ">
          <ChevronRight />
          <p className="font-roboto font-[500] text-[14px] ">Package details</p>
        </div>
        <div className="mt-[20px]">
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
                Package Origin/Shipment Location
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Origin:</p>
                <p className="font-[500] text-[20px]">
                  United States (Houston - warehouse)
                </p>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className=" text-brand/200 font-[500] font-roboto text-[20px]">
                Origin Address
              </p>
              <div className="grid grid-cols-2">
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p className="text-brand/200 font-roboto">First Name:</p>
                  <p className="font-[500] text-brand/200 font-roboto text-[20px]">
                    Malibu
                  </p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p className="text-brand/200 font-roboto">Last Name:</p>
                  <p className="text-brand/200 font-roboto font-[500] text-[20px]">
                    Shedrack
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p className="text-brand/200 font-roboto">Street Address:</p>
                <p className="font-[500] text-brand/200 font-roboto text-[20px]">
                  No, 1osolo way, ikeja road, behind scaint merry
                </p>
              </div>
              <div className="grid grid-cols-3">
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p className="text-brand/200 font-roboto">State:</p>
                  <p className="font-[500] text-brand/200 font-roboto text-[20px]">
                    Istanbul
                  </p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p className="text-brand/200 font-roboto">City:</p>
                  <p className="font-[500] text-brand/200 font-roboto text-[20px]">
                    Cyprusic
                  </p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p className="text-brand/200 font-roboto">Zip/postal Code:</p>
                  <p className="text-brand/200 font-roboto font-[500] text-[20px]">
                    98765
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-5 gap-[30px]">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Assigned Customer:</p>
                <p className="font-[500] text-[20px]">Reno Offorex</p>
              </div>
              <div>loll</div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Type:</p>
                <p className="font-[500] text-[20px]">Shipment</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Status:</p>
                <p className="font-[500] text-[20px]">Under Process</p>
              </div>
              <div>loll</div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Service:</p>
                <p className="font-[500] text-[20px]">Export</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Shipment Method:</p>
                <p className="font-[500] text-[20px]">Air</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Delivery Company:</p>
                <p className="font-[500] text-[20px]">DHL</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Date:</p>
                <p className="font-[500] text-[20px]">12/02/2023</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Order Time:</p>
                <p className="font-[500] text-[20px]">9:48am</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[20px]">
          <div className="flex items-center justify-center space-x-[20px]">
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
                  Item - #1
                  {/* <span className="text-brand/200"># {index + 1}</span> */}
                </p>
                <ArrowCircleDown color="#292D32" variant="Outline" />
              </div>
              <div className="grid grid-cols-4 mt-[30px] gap-[30px]">
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Product Name:</p>
                  <p className="font-[500] text-[20px]">Designer Bags</p>
                </div>
                <div></div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Product Original Cost</p>
                  <p className="font-[500] text-[20px]">$45.00</p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Quantity:</p>
                  <p className="font-[500] text-[20px]">4</p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Weight:</p>
                  <p className="font-[500] text-[20px]">67kg</p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Height:</p>
                  <p className="font-[500] text-[20px]">5 inches</p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Length:</p>
                  <p className="font-[500] text-[20px]">5 inches</p>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Width:</p>
                  <p className="font-[500] text-[20px]">5 inches</p>
                </div>
              </div>
              <div className="grid gap-[30px]">
                <div className="flex flex-col space-y-[3px] mt-[30px] font-roboto">
                  <p>Product/Item Picture:</p>
                  <div className="font-[500] text-[20px] w-[220px] h-[150px] bg-gray-300"></div>
                </div>
                <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                  <p>Product Description:</p>
                  <p className="font-[500] text-[20px]">
                    Additonvnv ghss jgsjvsn
                  </p>
                </div>
              </div>
            </div>
            <div>edit</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-[10px]  ">
          <ChevronRight />
          <p className="font-roboto font-[500] text-[14px] ">
            Shipping Details
          </p>
        </div>
        <div className="mt-[20px]">
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
                Destination/Shipping Address
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s First Name:</p>
                <p className="font-[500] text-[20px]">Malibu</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Last Name:</p>
                <p className="font-[500] text-[20px]">SHedrack</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Phone Number:</p>
                <p className="font-[500] text-[20px]">+234 803 456 7845</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Email:</p>
                <p className="font-[500] text-[20px]">
                  Malibushdrack@gmail.com{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
              <p>Receiver&apos;s Address:</p>
              <p className="font-[500] text-[20px]">
                No, 1osolo way, ikeja road, behind scaint merry
              </p>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination Country:</p>
                <p className="font-[500] text-[20px]">Turkey</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination State:</p>
                <p className="font-[500] text-[20px]">Istanbul</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination City:</p>
                <p className="font-[500] text-[20px]">Cyprusic</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Zip/postal Code:</p>
                <p className="font-[500] text-[20px]">98765</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-[10px]  ">
          <ChevronRight />
          <p className="font-roboto font-[500] text-[14px] ">Billing Details</p>
        </div>
        <div className="mt-[20px] grid gap-[30px]">
          <div
            className={`${
              drop === 5 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
            } transition-all  border w-full  rounded-[10px]`}
          >
            <div
              onClick={() => toggle(5)}
              className={`${
                drop === 5 ? "" : "p-[10px]"
              } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
            >
              <p className="text-[22px]">
                Billing Information
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s First Name:</p>
                <p className="font-[500] text-[20px]">Malibu</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Last Name:</p>
                <p className="font-[500] text-[20px]">SHedrack</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Phone Number:</p>
                <p className="font-[500] text-[20px]">+234 803 456 7845</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Receiver&apos;s Email:</p>
                <p className="font-[500] text-[20px]">
                  Malibushdrack@gmail.com{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
              <p>Receiver&apos;s Address:</p>
              <p className="font-[500] text-[20px]">
                No, 1osolo way, ikeja road, behind scaint merry
              </p>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination Country:</p>
                <p className="font-[500] text-[20px]">Turkey</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination State:</p>
                <p className="font-[500] text-[20px]">Istanbul</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Destination City:</p>
                <p className="font-[500] text-[20px]">Cyprusic</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Zip/postal Code:</p>
                <p className="font-[500] text-[20px]">98765</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              drop === 6 ? "h-full p-[20px]" : "h-[40px] overflow-hidden"
            } transition-all  border w-full  rounded-[10px]`}
          >
            <div
              onClick={() => toggle(6)}
              className={`${
                drop === 6 ? "" : "p-[10px]"
              } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
            >
              <p className="text-[22px]">
                Payments Information
                {/* <span className="text-brand/200"># {index + 1}</span> */}
              </p>
              <ArrowCircleDown color="#292D32" variant="Outline" />
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Total Shipment Cost:</p>
                <p className="font-[500] text-[20px]">$234,000.00</p>
              </div>
              <div className="flex flex-col space-y-[3px] mt-[20px] font-roboto">
                <p>Payment Status:</p>
                <p className="font-[500] text-[20px]">Processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
