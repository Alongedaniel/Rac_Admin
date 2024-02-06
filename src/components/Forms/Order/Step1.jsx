/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import ChevronRight from "../../Icons/ChevronRight";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import { updateField } from "../../../services/redux/orderSlice";

function Step1() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  return (
    <>
      <div className="flex items-center space-x-[10px] border-b-[2px] pb-[10px]">
        <ChevronRight />
        <p className="font-roboto font-[500] text-[14px] ">
          Fill in the order & customer details
        </p>
      </div>
      <div className="flex flex-col gap-[30px] mt-[30px]">
        <div>
          <TextInput
            label="Assigned Customer"
            id="assignedCustomer"
            value={order.assignedCustomer}
            onChange={(e) =>
              handleFieldChange("assignedCustomer", e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-[30px]">
          <div>
            <SelectInput
              id="order"
              label="Order Type"
              value={order.orderType}
              onChange={(e) => handleFieldChange("orderType", e.target.value)}
              options={
                <>
                  <option value="" className="">
                    Select order type
                  </option>
                  <option value="shipment" className="">
                    Shipment
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="status"
              label="Order Status"
              value={order.orderStatus}
              onChange={(e) => handleFieldChange("orderStatus", e.target.value)}
              options={
                <>
                  <option value="" className="">
                    Select order status
                  </option>
                  <option value="under-process" className="">
                    Under Process
                  </option>
                </>
              }
            />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <SelectInput
              id="order"
              label="Service"
              value={order.service}
              onChange={(e) => handleFieldChange("service", e.target.value)}
              options={
                <>
                  <option value="" className="">
                    Select Service
                  </option>
                  <option value="import" className="">
                    Import
                  </option>
                  <option value="export" className="">
                    Export
                  </option>
                  <option value="import-auto" className="">
                    Import Auto
                  </option>
                  <option value="shop-for-me" className="">
                    Shop For Me
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="order"
              label="Shipment Method"
              value={order.shipmentMethod}
              onChange={(e) =>
                handleFieldChange("shipmentMethod", e.target.value)
              }
              options={
                <>
                  <option value="" className="">
                    Select Shipment Method
                  </option>
                  <option value="air" className="">
                    Air
                  </option>
                  <option value="water" className="">
                    Water
                  </option>
                </>
              }
            />
          </div>
          <div>
            <SelectInput
              id="status"
              label="Delivery Company"
              value={order.deliveryCompany}
              onChange={(e) =>
                handleFieldChange("deliveryCompany", e.target.value)
              }
              options={
                <>
                  <option value="" className="">
                    Select Delivery Company
                  </option>
                  <option value="dhl" className="">
                    DHL
                  </option>
                  <option value="ups" className="">
                    UPS
                  </option>
                </>
              }
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Step1;
