const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-3 pt-12 justify-center">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div key={idx} className="h-60 w-1/6 border border-black p-1">
          <div className="h-1/2 bg-gray-200"></div>
          <div className="h-[12%] w-1/2 my-2 bg-gray-200"></div>
          <div className="h-[5%] my-1 bg-gray-200"></div>
          <div className="h-[5%] my-1 bg-gray-100"></div>
          <div className="h-[5%] my-1 bg-gray-50"></div>
        </div>
      ))}
      ;
    </div>
  );
};
export default Shimmer;
