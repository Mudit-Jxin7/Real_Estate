const Section = () => {
  return (
    <div className="flex flex-row justify-between mt-10 space-x-8">
      <div className="flex flex-row justify-around space-x-72 mx-auto">
        <h1 className="text-4xl font-bold mt-4">Search Properties to Rent</h1>
        <div className="flex items-center border rounded-lg p-2 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none w-full p-2 bg-white"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-purple-600 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
