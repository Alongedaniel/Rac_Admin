import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoChevronUpCircleOutline } from "react-icons/io5";

function OrderDetails() {
  const [drop, setDrop] = useState(null);
  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };

  return (
    <div className="p-[20px] font-roboto h-full">
      <div className="p-[20px] bg-white rounded-[20px]">
        <p className="border border-brand/200 p-[15px] rounded-[20px] font-roboto border-dotted ">
          Order Details
        </p>

        <p className="font-roboto text-[24px] my-[30px]">
          <span>Order ID:</span> <span className="font-[700]">OD78667</span>
        </p>

        <div className="flex flex-col space-y-[40px] font-roboto">
          <div className="">
            <div className="flex items-center space-x-[10px] ">
              <FaChevronCircleRight />
              <p className="font-roboto font-[500] text-[14px] ">
                Order Information
              </p>
            </div>

            <div className="flex flex-col space-y-[20px]">
              <div
                className={`${
                  drop === 1 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
                } transition-all mt-[20px] border  rounded-[10px]`}
              >
                <div
                  onClick={() => toggle(1)}
                  className={`${
                    drop === 1 ? "" : "p-[10px]"
                  } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[22px]">Order Information</p>
                  <IoChevronUpCircleOutline className="text-[25px]" />
                </div>

                <div className="grid grid-cols-5 mt-[30px]  gap-[20px]">
                  <div>
                    <p className="text-[14px] font-roboto">
                      Assigned Customer:
                    </p>
                    <p className="font-roboto text-brand/200 text-[22px]">
                      Rex Offorex
                    </p>
                  </div>
                  <div></div>
                  <div>
                    <p className="text-[14px] font-roboto">Order Type:</p>
                    <p className="font-roboto  text-[22px]">Shipment</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Order Status:</p>
                    <p className="font-roboto  text-[22px]">Under Process</p>
                  </div>
                  <div></div>
                  <div>
                    <p className="text-[14px] font-roboto">Service:</p>
                    <p className="font-roboto  text-[22px]">Export</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Shipment Method:</p>
                    <p className="font-roboto  text-[22px]">Air</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Delivery Company:</p>
                    <p className="font-roboto  text-[22px]">DHL</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Order Date:</p>
                    <p className="font-roboto  text-[22px]">12/02/2023</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Order Time:</p>
                    <p className="font-roboto  text-[22px]">9:48am</p>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  drop === 2 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
                } transition-all mt-[20px] border  rounded-[10px]`}
              >
                <div
                  onClick={() => toggle(2)}
                  className={`${
                    drop === 2 ? "" : "p-[10px]"
                  } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[22px]">Shipment Details</p>
                  <IoChevronUpCircleOutline className="text-[25px]" />
                </div>

                <div className="grid grid-cols-2 mt-[30px] ">
                  <div>
                    <p className="text-[14px] font-roboto">Order Type:</p>
                    <p className="font-roboto  text-[22px]">Shipment</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-roboto">Status:</p>
                    <div className="flex items-center space-x-[10px]">
                      <p className="font-roboto  text-[22px]">Not Started</p>
                      <button className="p-[5px_20px] border border-brand/200 rounded-full text-brand/200">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid  ">
                  <div>
                    <p className="text-[14px] font-roboto">Packaging:</p>
                    <div className="flex items-center space-x-[10px]">
                      <p className="font-roboto  text-[22px]">Not Started</p>
                      <button className="p-[5px_20px] border border-brand/200 rounded-full text-brand/200">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center space-x-[10px] ">
              <FaChevronCircleRight />
              <p className="font-roboto font-[500] text-[14px] ">
                Package Details
              </p>
            </div>
            <div
              className={`${
                drop === 3 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
              } transition-all mt-[20px] border  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(3)}
                className={`${
                  drop === 3 ? "" : "p-[10px]"
                } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">Package Origin/Shipment location</p>
                <IoChevronUpCircleOutline className="text-[25px]" />
              </div>
              <div className="mt-[30px]">
                <p className="text-[14px] font-roboto">Origin:</p>
                <p className="font-roboto  text-[22px]">
                  United States (Houston - warehouse)
                </p>
              </div>
              <div className=" mt-[40px] ">
                <p className="text-brand/200">Origin Address</p>
                <div className="grid grid-cols-2 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      First Name:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Malibu
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Last Name:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      SHedrack
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] ">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Street Address:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    No, 1osolo way, ikeja road, behind scaint merry
                  </p>
                </div>
                <div className="grid grid-cols-3 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      State:{" "}
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Istanbul
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      City:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Cyprusic
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Zip/postal Code:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      98765
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                drop === 4 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
              } transition-all mt-[20px] border  rounded-[10px]`}
            >
              <div
                onClick={() => toggle(4)}
                className={`${
                  drop === 4 ? "" : "p-[10px]"
                } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
              >
                <p className="text-[22px]">
                  Item - <span className="text-brand/200">#1</span>
                </p>
                <IoChevronUpCircleOutline className="text-[25px]" />
              </div>

              <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Product Name:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    Designer Bags
                  </p>
                </div>
                <div></div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Product Original Cost
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    $45.00
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Quantity:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">4</p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Weight:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    67kg
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Height:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    5 inches
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Length:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    5 inches
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Width:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    5 inches
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[14px] font-roboto text-brand/200">
                  Product/Item Picture:
                </p>
                <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border"></div>
                <p className="text-[14px] font-roboto text-brand/200 mt-[10px]">
                  Product Description:
                </p>
                <p className="font-roboto  text-[22px] text-brand/100">
                  Additonvnv ghss jgsjvsn
                </p>
              </div>
              <div className="grid grid-cols-2 mt-[10px] gap-[20px]">
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Color:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    Blue
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Stripes:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    5 inches
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center space-x-[10px] ">
              <FaChevronCircleRight />
              <p className="font-roboto font-[500] text-[14px] ">
                Shipping Details
              </p>
            </div>

            <div className="flex flex-col space-y-[20px]">
              <div
                className={`${
                  drop === 5 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
                } transition-all mt-[20px] border  rounded-[10px]`}
              >
                <div
                  onClick={() => toggle(5)}
                  className={`${
                    drop === 5 ? "" : "p-[10px]"
                  } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[22px]">Destination/Shipping Address</p>
                  <IoChevronUpCircleOutline className="text-[25px]" />
                </div>

                <div className="grid grid-cols-2 gap-[20px] mt-[30px] ">
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Receiver's First Name:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Malibu
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Receiver's Last Name:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      SHedrack
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Receiver's Phone Number:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      +234 803 456 7845
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Receiver's Email:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Malibushdrack@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-[14px] font-roboto text-brand/200">
                    Receiver's Address:
                  </p>
                  <p className="font-roboto  text-[22px] text-brand/100">
                    No, 1osolo way, ikeja road, behind scaint merry
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-[20px] mt-[30px] ">
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Destination Country:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Turkey
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Destination State:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Istanbul
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Destination City:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      Cyprusic
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] font-roboto text-brand/200">
                      Zip/postal Code:
                    </p>
                    <p className="font-roboto  text-[22px] text-brand/100">
                      98765
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center space-x-[10px] ">
              <FaChevronCircleRight />
              <p className="font-roboto font-[500] text-[14px] ">
                Billing Details
              </p>
            </div>

            <div className="flex flex-col space-y-[20px]">
              <div
                className={`${
                  drop === 6 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
                } transition-all mt-[20px] border  rounded-[10px]`}
              >
                <div
                  onClick={() => toggle(6)}
                  className={`${
                    drop === 6 ? "" : "p-[10px]"
                  } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[22px]">Billing Information</p>
                  <IoChevronUpCircleOutline className="text-[25px]" />
                </div>

                <div className="grid grid-cols-5 mt-[30px] border">
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                </div>
              </div>
              <div
                className={`${
                  drop === 7 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
                } transition-all mt-[20px] border  rounded-[10px]`}
              >
                <div
                  onClick={() => toggle(7)}
                  className={`${
                    drop === 7 ? "" : "p-[10px]"
                  } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[22px]">Payments Information</p>
                  <IoChevronUpCircleOutline className="text-[25px]" />
                </div>

                <div className="grid grid-cols-5 mt-[30px] border">
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                  <p>loll</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;

{
  /* <div
  className={`${
    drop === 2 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
  } transition-all mt-[20px] border  rounded-[10px]`}
>
  <div
    onClick={() => toggle(2)}
    className={`${
      drop === 2 ? "" : "p-[10px]"
    } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
  >
    <p className="text-[22px]">Package Origin/Shipment location</p>
    <IoChevronUpCircleOutline className="text-[25px]" />
  </div>

  <div className="grid grid-cols-5 mt-[30px] border">
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
  </div>
</div> */
}
