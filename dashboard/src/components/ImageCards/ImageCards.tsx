interface RoundedImage {
  imageSrc: string;
  altText?: string;
  rounded: boolean;
}

const ImageCards = ({
  imageSrc,
  altText,
  rounded,
}: RoundedImage): JSX.Element => {
  const roundedImg = rounded
    ? "rounded-full object-cover object-center h-10 w-10"
    : "rounded-lg object-cover object-center h-10";

  return (
    <div className="aspect-w-1 aspect-h-1">
      <img src={imageSrc} alt={altText} className={roundedImg} />
    </div>
  );
};

export default ImageCards;
