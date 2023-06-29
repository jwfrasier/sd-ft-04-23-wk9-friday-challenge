import { ReactNode } from "react";
import ImageCards from "../ImageCards/ImageCards";

interface SmallCardProps {
  id?: number;
  name?: string;
  title?: string;
  imageSrc?: string;
  rounded?: boolean;
  smallerText?: string;
  largeText?: string;
  width?: string;
  icon?: ReactNode;
  titleHighlight?: boolean;
}

const SmallCard = ({
  id,
  name,
  title,
  imageSrc = "",
  largeText,
  smallerText,
  icon,
  rounded = false,
  width,
  titleHighlight,
}: SmallCardProps): JSX.Element => {
  return (
    <div
      className={`flex gap-2 items-center align-middle bg-white shadow-md rounded-lg p-8 ${width}`}
    >
      {/* image goes here */}
      {rounded && <ImageCards imageSrc={imageSrc} rounded={rounded} />}

      {/* large text here */}
      <div className={`flex flex-col`}>
        <h1 className={`text-4xl ${titleHighlight && "text-customRed"}`}>
          {largeText && largeText}
        </h1>
        <h1 className={`text-2xl text-gray-700`}>{title && title}</h1>
        {/* smaller text here */}
        <h3 className={`text-gray-500 ${titleHighlight && "text-"}`}>
          {smallerText && smallerText}
        </h3>
        <h3 className={`text-gray-500 ${titleHighlight && "text-customRed"}`}>
          {name && name}
        </h3>
      </div>

      {icon && <ImageCards imageSrc={imageSrc} rounded={rounded} />}

      {/* Icon here */}
    </div>
  );
};

export default SmallCard;
