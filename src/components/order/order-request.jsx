import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useOrderRequestQuery } from "../../services/routes/order";

function OrderRequestComp() {
  const { data, isLoading, isSuccess, error } = useOrderRequestQuery();
  const orderRequest = data?.data;
  console.log(error)
  return (
    <>
      {orderRequest?.length === 0 ? (
        <div className="flex flex-col items-center space-y-[30px] font-roboto mt-[-15%]">
          <p>You don’t have any order yet, would you like to create one now?</p>
          <button className="bg-brand/200 text-white w-fit p-[10px_15px] rounded-full">
            Add new order
          </button>
        </div>
      ) : (
        <>
        {
          error && (
            <div>
              <p>{error?.data?.message}</p>
            </div>
          )
        }
          {isLoading && (
            <div className="flex flex-col animate-pulse items-center space-y-[30px] font-roboto mt-[-15%]">
              <p>Loading...</p>
            </div>
          )}
          {isSuccess && (
            <>
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-[20px]">
                  <button className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
                    Filter View
                  </button>
                  <div className="border border-gray-600 rounded-[10px] px-[15px] w-[400px]">
                    <input
                      type="text"
                      className="h-full w-full py-[11px] outline-none bg-transparent font-roboto"
                      placeholder="Search for users with any related keyword"
                    />
                  </div>
                  <button className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
                    Bulk Actions
                  </button>
                </div>
                <div>
                  <Link to='/admin/orders/create' className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
                    Create new Order
                  </Link>
                </div>
              </div>
              <div className=" h-[500px] mt-[30px] relative max-w-[1200px] overflow-x-auto w-full scrollbar">
                <table className="w-full bg-white text-sm text-left rtl:text-right  rounded-[10px]">
                  <thead className="font-roboto  text-[14px] ">
                    <tr className=" space-x-[20px]">
                      <th className="px-6 py-3">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="h-[18px] w-[18px]"
                        />
                      </th>
                      <th scope="col" className="min-w-[90px]  py-3">
                        Order ID
                      </th>
                      <th scope="col" className="min-w-[100px]  py-3">
                        Type
                      </th>
                      {/* <th scope="col" className="min-w-[110px] py-3">
              Shipment ID
            </th> */}
                      <th scope="col" className="min-w-[110px]  py-3">
                        Customer
                      </th>
                      <th scope="col" className="min-w-[130px]   py-3">
                        Shipment Location
                      </th>

                      <th scope="col" className="min-w-[110px] py-3">
                        Status
                      </th>
                      <th scope="col" className="min-w-[110px] py-3">
                        Request Date
                      </th>
                      <th scope="col" className="min-w-[150px] py-3">
                        Staff In Charge
                      </th>

                      <th scope="col" className="min-w-[60px] py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orderRequest.length > 0 ? (
                        orderRequest?.map(({ _id: id, orderId, trackingId }) => (
                          <tr
                            className="bg-red-50 border-b gap-x-[20px] font-roboto"
                            key={id}
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap"
                            >
                              <input
                                type="checkbox"
                                name=""
                                id=""
                                className="h-[18px] w-[18px]"
                              />
                            </th>
                            <td className="min-w-[90px] py-4">
                              <div>
                                <p className="text-[16px] font-[500]">{orderId}</p>
                                <p className="">{trackingId}</p>
                              </div>
                            </td>
                            <td className="min-w-[100px] py-4 font-[500] text-[14px]">
                              Shipment
                            </td>
    
                            <td className="min-w-[110px] text-[16px] font-[500] py-4">
                              <div className="flex items-center space-x-[2px]">
                                <p>loll</p>
                                <p className="text-[#21005D] font-[500] text-[14px]">
                                  Rexo Offorex
                                </p>
                              </div>
                            </td>
                            <td className="min-w-[130px] text-[14px] font-[500] py-4">
                              NG-LOS-A 3
                            </td>
    
                            <td className="min-w-[110px] text-[14px] font-[500] py-4">
                              Responded
                            </td>
                            <td className="min-w-[110px] text-[14px] font-[500] py-4">
                              22-03-2023 13:05
                            </td>
                            <td className="min-w-[150px] text-[14px] font-[500] py-4">
                              Micheal Sam obalodu
                            </td>
    
                            <td className="min-w-[110px] text-[14px] font-[500] py-4 ">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex w-full justify-center ">
                                    <BsThreeDots className="text-[25px]" />
                                  </Menu.Button>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#FFFBFE] border-none shadow-lg  ">
                                    <div className="">
                                      <Menu.Item>
                                        <Link
                                          to="/admin/draft-detail"
                                          className={`hover:bg-brand/200 hover:text-white group flex w-full items-center rounded-t-md  px-2 py-[10px] text-sm`}
                                        >
                                          View Order Details
                                        </Link>
                                      </Menu.Item>
                                      <Menu.Item>
                                        <button
                                          className={` hover:bg-brand/200 hover:text-white group flex w-full items-center  px-2 py-[10px] text-sm`}
                                        >
                                          Check Payment Status
                                        </button>
                                      </Menu.Item>
                                      <Menu.Item>
                                        <button
                                          className={`hover:bg-brand/200 hover:text-white group flex w-full items-center rounded-b-md  px-2 py-[10px] text-sm`}
                                        >
                                          Cancel Order
                                        </button>
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </td>
                          </tr>
                        ))
                      ) : (null)
                    }
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default OrderRequestComp;
