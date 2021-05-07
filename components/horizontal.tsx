import Image from "components/image";
import ReactMarkdown from "react-markdown";

const HorizonalComponent = ({ horizontalText, image }) => {
  return (
    <>
      <Image image={image} alt="Picture of the author" />
      <div className="grid gap-2 grid-cols-12 pt-4">
        {horizontalText.map((content, index) => (
          <div key={index} className="col-span-3 text-lg">
            <ReactMarkdown source={content} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HorizonalComponent;
