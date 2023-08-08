import { useState } from "react";
import propertyData from "../config/data";
import Card from "./Card";

const CardMap = () => {
  const [data, setData] = useState(propertyData);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("any");
  const [selectedPropertyType, setSelectedPropertyType] = useState("all");
  const [date, setDate] = useState("today");

  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue);
    filterData(selectedValue, selectedPriceRange, selectedPropertyType, date);
  };

  const handlePriceRangeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriceRange(selectedValue);
    filterData(selectedLocation, selectedValue, selectedPropertyType, date);
  };

  const handlePropertyTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPropertyType(selectedValue);
    filterData(selectedLocation, selectedPriceRange, selectedValue, date);
  };

  const handleDate = (event) => {
    const selectedValue = event.target.value;
    setDate(selectedValue);
    filterData(
      selectedLocation,
      selectedPriceRange,
      selectedPropertyType,
      selectedValue
    );
  };

  const filterData = (location, priceRange, propertyType, date) => {
    let filteredData = propertyData;

    if (location !== "all") {
      filteredData = filteredData.filter(
        (property) => property.place === location
      );
    }

    if (priceRange !== "any") {
      const [minPrice, maxPrice] = priceRange.split(" - ");
      filteredData = filteredData.filter(
        (property) =>
          property.price >= parseInt(minPrice) &&
          property.price <= parseInt(maxPrice)
      );
    }

    if (propertyType !== "all") {
      filteredData = filteredData.filter(
        (property) => property.propertyType === propertyType
      );
    }

    if (date !== "today") {
      filteredData = filteredData.filter((property) => property.date === date);
    }

    setData(filteredData);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-9 w-full">
        <div className="bg-white p-4 rounded-md text-center flex space-x-32">
          <div className="flex flex-col space-y-2 bg-white">
            <label className="text-sm font-medium bg-white">Location:</label>
            <select
              className="border border-white rounded-md p-1 outline-none"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="all">All</option>
              <option value="New York">New York</option>
              <option value="Delhi">Delhi</option>
              <option value="Paris">Paris</option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 bg-white">
            <label className="text-sm font-medium bg-white">When:</label>
            <select
              className="border border-white border-gray-300 rounded-md p-1 outline-none"
              value={date}
              onChange={handleDate}
            >
              <option value="today">All</option>
              <option value="2023-09-10">August 10, 2023</option>
              <option value="023-08-10">August 15, 2023</option>
              <option value="2023-08-15">August 20, 2023</option>
              <option value="2023-08-20">September 1, 2023</option>
              <option value="2023-09-01">September 10, 2023</option>
              <option value="2023-09-20">September 20, 2023</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 bg-white">
            <label className="text-sm font-medium bg-white">Price:</label>
            <select
              className="border border-white border-gray-300 rounded-md p-1 outline-none"
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
            >
              <option value="any">All</option>
              <option value="500 - 1000">500 - 1000</option>
              <option value="1000 - 1500">1000 - 1500</option>
              <option value="1500 - 2000">1500 - 2000</option>
              <option value="2000 - 2500">2000 - 2500</option>
              <option value="2500 - 3000">2500 - 3000</option>
              <option value="3000 - 3500">3000 - 3500</option>
              <option value="3500 - 100000">3500 +</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 bg-white">
            <label className="text-sm font-medium bg-white">
              Property Types:
            </label>
            <select
              className="border border-white border-gray-300 rounded-md p-1 outline-none"
              value={selectedPropertyType}
              onChange={handlePropertyTypeChange}
            >
              <option value="all">All</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Studio">Studio</option>
              <option value="Loft">Loft</option>
            </select>
          </div>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-32 mx-auto justify-center mt-4">
        {data.map((property) => (
          <Card
            key={property.id}
            price={property.price}
            placeAddress={property.placeAddress}
            place={property.place}
            propertyType={property.propertyType}
            date={property.date}
            houseName={property.houseName}
            image={property.image}
          />
        ))}
      </div>
    </>
  );
};

export default CardMap;
