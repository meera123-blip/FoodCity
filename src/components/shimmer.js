

const Shimmer = () => {
    return (
      <div className="restaurant-list" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="bg-white p-4 rounded-lg shadow-md h-[320px]">
    <div className="animate-pulse">
      <div className="bg-gray-300 h-32 rounded-md mb-2"></div>
      <div className="bg-gray-300 h-6 rounded-md w-3/4 mb-2"></div>
      <div className="bg-gray-300 h-6 rounded-md w-1/2"></div>
    </div>
  </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;