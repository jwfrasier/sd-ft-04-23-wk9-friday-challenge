import SmallCard from "../Cardcomponents/SmallCard";

export const MetricCards = () => {
  const dogggos = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rounded: true,
      smallerText: "Big woow",
      largeText: "Woofer",
      width: "w-1/3",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      icon: true,
      smallerText: "Brown wowow",
      largeText: "Smoop",
      width: "w-1/3",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      icon: true,
      smallerText: "Brown wowow",
      largeText: "Smoop",
      width: "w-2/3",
    },
  ];
  return (
    <div
      className={`flex justify-center flex-row gap-4 ml-[10rem] my-5 w-full`}
    >
      {dogggos.map((dogs) => (
        <SmallCard {...dogs} />
      ))}
    </div>
  );
};
