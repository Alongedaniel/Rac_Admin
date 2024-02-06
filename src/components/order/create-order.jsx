function CreateOrder() {
  return (
    <div className="flex flex-col space-y-[20px]">
      <div className="bg-white p-[20px] gap-[20px] font-roboto rounded-[20px] flex items-center">
        <p className="flex-1 text-t/100">
          Have a view of the{" "}
          <span className="font-[700]">complete order history</span> of all your
          registered website customers in one place.
        </p>
        <button className="flex-1 bg-brand/200 text-white p-[10px_30px] rounded-full">
          View Orders
        </button>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="p-[20px] bg-white rounded-[20px] font-roboto flex space-y-[20px] flex-col items-center">
          <p className="font-[400] text-[22px]">Want to Create a new order?</p>
          <button className=" w-full bg-brand/200 text-white p-[10px_30px] rounded-full">
          Create new order
        </button>
        </div>
        <div className="p-[20px] bg-white rounded-[20px] font-roboto flex space-y-[20px] flex-col items-center">
          <p className="font-[400] text-[22px]">Want to Create a new invoice?</p>
          <button className=" w-full bg-brand/200 text-white p-[10px_30px] rounded-full">
          Create new invoice
        </button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
