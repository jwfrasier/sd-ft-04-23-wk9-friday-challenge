import SmallCard from "../Cardcomponents/SmallCard";
import lightbulb from "../../assets/icons8-lightbulb-50.png";
import customers from "../../assets/icons8-b-customers-50.png";
import car from "../../assets/icons8-car-50.png";
export const MetricCards = () => {
  const dogggos = [
    {
      imageSrc: lightbulb,
      icon: true,
      smallerText: "Sales",
      largeText: "1,034",
      width: "w-1/3",
      titleHighlight: true,
    },
    {
      imageSrc: customers,
      icon: true,
      smallerText: "Active Accounts",
      largeText: "2,300",
      width: "w-1/3",
      titleHighlight: true,
    },
    {
      imageSrc: car,
      icon: true,
      smallerText: "Drivers",
      largeText: "23,000",
      width: "w-1/3",
      titleHighlight: true,
    },
    {
      imageSrc: car,
      icon: true,
      smallerText: "Drivers",
      largeText: "23,000",
      width: "w-1/3",
      titleHighlight: true,
    },
  ];
  return (
    <div className={`flex justify-center flex-row gap-4 ml-[7rem] my-5 w-full`}>
      {dogggos.map((dogs) => (
        <SmallCard {...dogs} />
      ))}
    </div>
  );
};
