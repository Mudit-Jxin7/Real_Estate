const Card = (props) => {
  const { price, placeAddress, place, propertyType, houseName, date } = props;

  return (
    <div className="w-1/5 bg-white rounded-lg shadow-md">
      <img
        src="https://picsum.photos/300/200" // Using a random image from Lorem Picsum
        alt="Property"
        className="w-full h-auto mx-auto"
      />
      <div className="mt-4 p-4 bg-white">
        <div className="flex flex-row justify-between bg-white">
          <p className="text-purple-600 font-bold text-xl bg-white">{`$${price}/month`}</p>
          <button className="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20s-8-4.5-8-9.6C4 5.1 9.163 2 12 4.5 14.837 2 20 5.1 20 10.4 20 15.5 12 20 12 20z"
              />
            </svg>
          </button>
        </div>
        <p className="text-black font-semibold mt-2 bg-white">{houseName}</p>
        <p className="text-gray-600 mt-1  bg-white">{placeAddress}</p>
      </div>
      <div className="flex justify-between items-center mt-4 p-4 bg-white">
        <div className="flex space-x-4 text-sm">
          <p className="bg-white">4 beds</p>
          <p className="bg-white">2 bathrooms</p>
          <p className="bg-white"> 5 x 7 area</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
