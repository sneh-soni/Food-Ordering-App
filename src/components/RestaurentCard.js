const RestaurentCard = (restaurent) => {
  const tempRest = restaurent.restaurent;
  return (
    <div className="h-60 border border-black p-1">
      <img
        className="h-1/2 border border-black bg-gray-200"
        src={tempRest.strCategoryThumb}
        alt={tempRest.strCategory}
      />
      <div className="flex justify-between my-1">
        <p className="text-xl font-bold">{tempRest.strCategory}</p>
      </div>
      <p className="text-xs w-full h-1/3 overflow-hidden">
        {tempRest.strCategoryDescription}
      </p>
    </div>
  );
};
export default RestaurentCard;
