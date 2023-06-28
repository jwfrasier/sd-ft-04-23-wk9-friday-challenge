import { ReactNode } from "react";
import ImageCards from "../ImageCards/ImageCards";

interface RoundedImage {
  imageSrc: string;
  altText?: string;
  rounded: boolean;
}

interface SmallCardProps {
  imageSrc?: string;
  largeText?: string;
  smallerText?: string;
  icon?: ReactNode;
  rounded?: boolean;
  width?: string;
}

const SmallCard = ({
  imageSrc = "",
  largeText,
  smallerText,
  icon,
  rounded = false,
  width,
}: SmallCardProps): JSX.Element => {
  return (
    <div
      className={`flex gap-2 items-center align-middle bg-white shadow-md rounded-lg p-8 ${width}`}
    >
      {/* image goes here */}
      {rounded && <ImageCards imageSrc={imageSrc} rounded={rounded} />}

      {/* large text here */}
      <div className={`flex flex-col`}>
        <h1 className={`text-2xl`}>{largeText}</h1>

        {/* smaller text here */}
        <h3>{smallerText}</h3>
      </div>

      {icon && <ImageCards imageSrc={imageSrc} rounded={rounded} />}

      {/* Icon here */}
    </div>
  );
};

export default SmallCard;
