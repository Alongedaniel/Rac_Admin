/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment} from "react";
import TextInput from "../Forms/Inputs/TextInput";
import TextAreaInput from "../Forms/Inputs/TextAreaInput";
import { Add, ArrowCircleRight2, Bag } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty, deleteProperty, updateProperty } from "../../services/redux/orderSlice";

function Properties({ isOpen, setIsOpen, item, index: itemIndex }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);




  const addPropertyFunc = (itemIndex) => {
    dispatch(
      addProperty({
        index: itemIndex,
        property: { name: "", description: "" },
      })
    );
  };

  const deletePropertyFunc = ({ index, propertyIndex }) => {
    if (order.items[index].properties.length > 1) {
      dispatch(
        deleteProperty({
          index,
          propertyIndex,
        })
      );
    }
  };

  // const updatePropertyFunc = ({ itemIndex, propertyIndex }) => {
  //   dispatch(
  //     updateProperty({
  //       index: itemIndex,
  //       propertyIndex: propertyIndex,
  //       updatedProperty: { name: propertyLabel, description: propertyDescription },
  //     })
  //   );
  // };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(!isOpen)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="h-full w-full max-w-md transform overflow-hidden rounded-[30px] bg-[#FFFBFE] p-[20px] text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-roboto leading-6 text-gray-900"
                >
                  Add properties
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You want more properties for the products to be procured,
                    give it a label (name of the property) like size, color,
                    e.t.c, and optionally the description of the property.
                  </p>
                </div>

                <div className="flex h-[300px] scrollbars p-[20px] border flex-col w-full space-y-[20px] mt-[20px] overflow-auto">
                {Object.keys(item.properties).map((property, propertyIndex) => (
                  <div key={propertyIndex} className="flex items-center space-x-[20px]">
                   <div className="flex flex-col space-y-[20px] w-full">
                   <TextInput
                      label={`Property Label ${propertyIndex + 1} *`}
                      value={item.properties[property].name}
                      onChange={
                        (e) => dispatch(
                          updateProperty({
                            index: 0, // Assuming you want to update the first item
                            propertyIndex,
                            updatedProperty: {
                              name: e.target.value,
                              description: order.items[0].properties[property].description,
                            },
                          })
                        )
                      }
                    />
                    <TextAreaInput
                      label={`Property Description ${propertyIndex + 1}`}
                      value={item.properties[property].description}
                      onChange={(e) =>
                        dispatch(
                          updateProperty({
                            index: 0, // Assuming you want to update the first item
                            propertyIndex,
                            updatedProperty: {
                              name: order.items[0].properties[property].name,
                              description: e.target.value,
                            },
                          })
                        )
                      }
                    />
                   </div>
                   <button onClick={()=>deletePropertyFunc({index: itemIndex, propertyIndex})}>
                    <Bag className="text-red-500"/>
                   </button>
                   
                  </div>
                  
                ))}
                </div>
                <button onClick={() => addPropertyFunc(itemIndex)}  className="mt-[20px] flex items-center space-x-[10px]">
                  <Add className="text-brand/200" />
                  <p className="font-roboto text-brand/200">
                    Add more properties
                  </p>
                </button>
                <div className="mt-[24px] flex items-center justify-end space-x-[20px] ">
                  <button onClick={()=> setIsOpen(false)} className="font-roboto text-brand/200 p-[10px_20px]">
                    Cancel
                  </button>
                   <button onClick={()=> setIsOpen(false)} className="flex items-center space-x-[10px] bg-brand/200 font-roboto text-white p-[10px_20px] rounded-full">
                    <ArrowCircleRight2 />
                    <p>Add Property</p>
                  </button> 
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
       
      </Dialog>
    </Transition>
  );
}

export default Properties;
