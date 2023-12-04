const RestaurentCard = (restaurent) => {
  const tempRest = restaurent.restaurent;
  return (
    <div className="h-fit border border-black p-1">
      <img
        className="h-1/2 border border-black bg-gray-200"
        src={tempRest.strCategoryThumb}
        alt={tempRest.strCategory}
      />
      <div className="flex justify-center text-xl font-bold my-1">
        {tempRest.strCategory}
      </div>
      {/* <p className="text-xs w-full h-1/3 overflow-hidden">
        {tempRest.strCategoryDescription}
      </p> */}
    </div>
  );
};
export default RestaurentCard;
