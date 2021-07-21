import Image from "next/image";

const ImageComponent = ({ image, alt, horiztonal = true }) => {
  const dimensions = horiztonal
    ? { width: "1130px", height: "635px" }
    : { width: "532px", height: "762px" };

  return image?.mimeType === "video/mp4" ? (
    <video autoPlay loop muted>
      <source src={image.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
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
