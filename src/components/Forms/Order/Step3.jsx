/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import ChevronRight from "../../Icons/ChevronRight";
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import { updateField } from "../../../services/redux/orderSlice";

function Step3() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <ChevronRight />
        <p className="font-roboto font-[500] text-[14px] ">
          Fill in the shipment details
        </p>
      </div>
      <div>
        {order.service === "export" && (
          <div className="grid gap-[30px] mt-[30px]">
            <div className="grid grid-cols-2 gap-[30px] ">
              <TextInput
                value={order.receiverFirstName}
                onChange={(e) =>
                  handleFieldChange("receiverFirstName", e.target.value)
                }
                label="Receiver's First Name *"
              />
              <TextInput
                value={order.receiverLastName}
                onChange={(e) =>
                  handleFieldChange("receiverLastName", e.target.value)
                }
                label="Receiver's Last Name *"
              />
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <TextInput
                value={order.receiverEmail}
                onChange={(e) =>
                  handleFieldChange("receiverEmail", e.target.value)
                }
                label="Receiver's Email"
              />
              <TextInput
                value={order.receiverPhone}
                onChange={(e) =>
                  handleFieldChange("receiverPhone", e.target.value)
                }
                label="Phone Number *"
              />
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <SelectInput
                id="store"
                label="Destination Country *"
                value={order.destinationCountry}
                onChange={(e) =>
                  handleFieldChange("destinationCountry", e.target.value)
                }
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
                value={order.destinationState}
                onChange={(e) =>
                  handleFieldChange("destinationState", e.target.value)
                }
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
                value={order.destinationCity}
                onChange={(e) =>
                  handleFieldChange("destinationCity", e.target.value)
                }
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
            <div className="grid gap-[30px]">
              <TextInput
                value={order.receiverAddress}
                onChange={(e) =>
                  handleFieldChange("receiverAddress", e.target.value)
                }
                label="Receiver's Address *"
              />
              <TextInput
                value={order.destinationZip}
                onChange={(e) =>
                  handleFieldChange("destinationZip", e.target.value)
                }
                label="Zip/Postal code"
              />
            </div>
          </div>
        )}
        {order.service === "import-auto" && (
          <div className="grid gap-[30px] mt-[30px]">
            <div className="grid grid-cols-2 gap-[30px] ">
              <TextInput
                value={order.receiverFirstName}
                onChange={(e) =>
                  handleFieldChange("receiverFirstName", e.target.value)
                }
                label="Receiver's First Name *"
              />
              <TextInput
                value={order.receiverLastName}
                onChange={(e) =>
                  handleFieldChange("receiverLastName", e.target.value)
                }
                label="Receiver's Last Name *"
              />
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <TextInput
                value={order.receiverEmail}
                onChange={(e) =>
                  handleFieldChange("receiverEmail", e.target.value)
                }
                label="Receiver's Email"
              />
              <TextInput
                value={order.receiverPhone}
                onChange={(e) =>
                  handleFieldChange("receiverPhone", e.target.value)
                }
                label="Phone Number *"
              />
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <SelectInput
                id="store"
                label="Destination Country *"
                value={order.destinationCountry}
                onChange={(e) =>
                  handleFieldChange("destinationCountry", e.target.value)
                }
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
                value={order.destinationState}
                onChange={(e) =>
                  handleFieldChange("destinationState", e.target.value)
                }
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
                value={order.destinationCity}
                onChange={(e) =>
                  handleFieldChange("destinationCity", e.target.value)
                }
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
            <div className="grid gap-[30px]">
              <TextInput
                value={order.receiverAddress}
                onChange={(e) =>
                  handleFieldChange("receiverAddress", e.target.value)
                }
                label="Receiver's Address *"
              />
              <TextInput
                value={order.destinationZip}
                onChange={(e) =>
                  handleFieldChange("destinationZip", e.target.value)
                }
                label="Zip/Postal code"
              />
            </div>
          </div>
        )}

        {order.service === "import" && (
          <div className="mt-[30px]">
            <div className="bg-[#F2B8B5] p-[20px_40px] rounded-[20px] font-roboto">
              <p className="text-brand/200 font-[500]">IMPORTANT NOTICE:</p>
              <ul className="list-disc flex flex-col space-y-[10px]">
                <li>
                  The package will be delivered to the{" "}
                  <span className="font-[500]">
                    ”Destination/Shipping Address” (which is our available
                    office in Nigeria)
                  </span>{" "}
                  you will select.
                </li>
                <li>
                  And if the customer wants doorstep delivery, we will help them
                  make provisions for that when it arrives the{" "}
                  <span className="font-[500]">
                    ”Destination/Shipping Address” (which is our office in
                    Nigeria)
                  </span>{" "}
                  you will select.
                </li>
              </ul>
            </div>
            <div className="grid mt-[30px]">
              <SelectInput
                id="address"
                label="Destination/Shipping Address *"
                value={order.destinationAddress}
                onChange={(e) =>
                  handleFieldChange("destinationAddress", e.target.value)
                }
                options={
                  <>
                    <option value="" className="">
                      Select Destination
                    </option>
                    <option value="shipment" className="">
                      Nigeria
                    </option>
                  </>
                }
              />
            </div>
          </div>
        )}
        {order.service === "shop-for-me" && (
          <div className="mt-[30px]">
            <div className="bg-[#F2B8B5] p-[20px_40px] rounded-[20px] font-roboto">
              <p className="text-brand/200 font-[500]">IMPORTANT NOTICE:</p>
              <ul className="list-disc flex flex-col space-y-[10px]">
                <li>
                  The package will be delivered to the{" "}
                  <span className="font-[500]">
                    ”Destination/Shipping Address” (which is our available
                    office in Nigeria)
                  </span>{" "}
                  you will select.
                </li>
                <li>
                  And if the customer wants doorstep delivery, we will help them
                  make provisions for that when it arrives the{" "}
                  <span className="font-[500]">
                    ”Destination/Shipping Address” (which is our office in
                    Nigeria)
                  </span>{" "}
                  you will select.
                </li>
              </ul>
            </div>
            <div className="grid mt-[30px]">
              <SelectInput
                id="address"
                label="Destination/Shipping Address *"
                value={order.destinationAddress}
                onChange={(e) =>
                  handleFieldChange("destinationAddress", e.target.value)
                }
                options={
                  <>
                    <option value="" className="">
                      Select Destination
                    </option>
                    <option value="shipment" className="">
                      Nigeria
                    </option>
                  </>
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Step3;
