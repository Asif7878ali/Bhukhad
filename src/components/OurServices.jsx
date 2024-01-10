import React from "react";



const OurServices = () => {
  const serviceLists = [
    {
      id: 1,
      title: "Catering",
      des: "Delight your guests with our flavors and  presentation",
      img: 'https://images.unsplash.com/photo-1480455454781-1af590be2a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    {
      id: 2,
      title: "Fast delivery",
      des: "We deliver your order promptly flavors and  presentation to your door",
      img: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Online Ordering",
      des: "Explore menu & order with ease using our Online Ordering n",
      img: "https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Gift Cards",
      des: "Give the gift of exceptional dining with Foodi Gift Cards",
      img: "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="section-container mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="lg:w-[50%] mt-3 lg:pl-20 pl-8">
            <h1 className="text-4xl font-bold mb-3">Our Story & Culinary Journey</h1>
            <h1 className="text-4xl font-bold text-red-600 mb-3">Services</h1>
            <p className="italic mb-5 sm:font-bold">
            Our Services Food website, where culinary excellence meets convenience. Our mission is to bring you a delightful dining experience with a range of services tailored to satisfy your cravings. From delectable meals prepared with the finest ingredients to prompt and reliable delivery services, we are dedicated to providing you with a hassle-free and enjoyable food experience.
            </p>
            <button className="bg-red-500 hover:bg-red-900 border border-gray-400 border-b-4 font-medium overflow-hidden px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Explore
</button>
          </div>
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
              {serviceLists.map((service) => (
                <div
                  key={service.id}
                  className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-60 transition-all duration-200"
                >
                  <img src={service.img} alt="" className="mx-auto sm:h-5 lg:h-20 w-full object-cover" />
                  <h5 className="pt-3 font-bold"> {service.title}</h5>
                  <p className="text-red-600">{service.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
