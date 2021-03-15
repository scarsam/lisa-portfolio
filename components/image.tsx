import Image from "next/image";

const ImageComponent = ({ image, alt, horiztonal = true }) => {
  const dimensions = horiztonal
    ? { width: "1135px", height: "635px" }
    : { width: "532px", height: "762px" };
  return (
    <div className="relative" key={image.id} style={{ ...dimensions }}>
      <Image src={image.url} alt={alt} layout="fill" />
    </div>
  );
};

export default ImageComponent;
