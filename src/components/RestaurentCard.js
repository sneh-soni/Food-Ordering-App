const RestaurentCard = (restaurent) => {
  return (
    <div className="h-60 w-full border border-black p-1">
      <img
        className="h-1/2 border border-black bg-gray-200"
        src={restaurent.strCategoryThumb}
        alt={restaurent.strCategory}
      />
      <div className="flex justify-between my-1">
        <p className="text-xl font-bold">{restaurent.strCategory}</p>
      </div>
      <p className="text-xs h-1/3 overflow-hidden">
        {restaurent.strCategoryDescription}
      </p>
    </div>
  );
};
export default RestaurentCard;
