const RestaurentCard = ({ restaurent }) => {
  console.log("Restaurent Card Rendered");
  return (
    <div className="h-52 w-1/6 border border-black p-1">
      <img
        className="h-2/3 w-full"
        src={restaurent.image}
        alt={restaurent.name}
      />
      <div className="flex justify-between my-2">
        <p className="text-xl font-bold">{restaurent.name}</p>
        <p>{restaurent.rating} *</p>
      </div>
      <p className="text-lg font-semibold">{restaurent.price} Rs</p>
    </div>
  );
};
export default RestaurentCard;
