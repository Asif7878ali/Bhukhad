import foodItems from "../utils/foodItemsData";

const Fooditems = () => {
  
  return (
    <>
      <div className="pl-20 mt-20">
        <div className="flex justify-center">
          <div>
            <h2 className="text-4xl md:text-5xl md:leading-snug font-bold">
              Experiance Great & Tasty <span className="text-red-600">Food</span>
            </h2>
          </div>
        </div>
        {/* map cards */}
        <div className="flex justify-center flex-wrap">
          {foodItems.map((item) => (
            <div key={item.id}>
              <div className="w-64 mt-10 mb-10 ml-5 lg:mr-[4.2rem] shadow-md rounded-md cursor-pointer hover:-translate-y-4 transition-all duration-300">
                <img src={item.image} alt="Food Items" className="w-full h-40 object-cover"/>
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-2 text-center">{item.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fooditems;
