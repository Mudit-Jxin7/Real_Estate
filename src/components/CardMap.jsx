import propertyData from "../config/data";
import Card from "./Card";

const CardMap = () => {
  return (
    <div className="flex flex-wrap gap-32 mx-auto justify-center mt-4">
      {propertyData.map((property) => (
        <Card
          key={property.id}
          price={property.price}
          placeAddress={property.placeAddress}
          place={property.place}
          propertyType={property.propertyType}
          date={property.date}
          houseName={property.houseName}
        />
      ))}
    </div>
  );
};

export default CardMap;
