const Filter = () => {
  return (
    <div className="flex items-center justify-center mt-9 w-full">
      <div className="bg-white p-4 rounded-md text-center flex space-x-32">
        <div className="flex flex-col space-y-2 bg-white">
          <label className="text-sm font-medium bg-white">Location:</label>
          <select className="border border-white rounded-md p-1 outline-none">
            <option value="all">All</option>
            <option value="newyork">New York</option>
            <option value="usa">Delhi</option>
            <option value="paris">Paris</option>
            <option value="london">London</option>
            <option value="tokyo">Tokyo</option>
            <option value="sydney">Sydney</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 bg-white">
          <label className="text-sm font-medium bg-white">When:</label>
          <select className="border border-white border-gray-300 rounded-md p-1 outline-none">
            <option value="today">All</option>
            <option value="2023-08-10">August 10, 2023</option>
            <option value="2023-08-15">August 15, 2023</option>
            <option value="2023-08-20">August 20, 2023</option>
            <option value="2023-09-01">September 1, 2023</option>
            <option value="2023-09-10">September 10, 2023</option>
            <option value="2023-09-20">September 20, 2023</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 bg-white">
          <label className="text-sm font-medium bg-white">Price:</label>
          <select className="border border-white border-gray-300 rounded-md p-1 outline-none">
            <option value="any">All</option>
            <option value="price1">$500 - $1000</option>
            <option value="price2">$1000 - $1500</option>
            <option value="price3">$1500 - $2000</option>
            <option value="price4">$2000 - $2500</option>
            <option value="price5">$2500 - $3000</option>
            <option value="price6">$3000 - $3500</option>
            <option value="price7">$3500 - $4000</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 bg-white">
          <label className="text-sm font-medium bg-white">
            Property Types:
          </label>
          <select className="border border-white border-gray-300 rounded-md p-1 outline-none">
            <option value="all">All</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="studio">Studio</option>
            <option value="loft">Loft</option>
          </select>
        </div>
        <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
