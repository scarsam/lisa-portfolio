import Image from "next/image";

const ImageComponent = ({ image, alt, horiztonal = true }) => {
  const dimensions = horiztonal
    ? { width: "1130px", height: "635px" }
    : { width: "532px", height: "762px" };
  return (
    <Image
      {...dimensions}
      key={image.id}
      placeholder="blur"
      blurDataURL={image.url}
      src={image.url}
      alt={alt}
      layout="responsive"
    />
  );
};

export default ImageComponent;
