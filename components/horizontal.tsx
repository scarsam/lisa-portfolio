import Image from "components/image";
import ReactMarkdown from "react-markdown";

const HorizonalComponent = ({ horizontalText, image }) => {
  return (
    <div className="mb-14 md:mb-28">
      <Image image={image} alt="Picture of the author" />
      <div className="grid gap-5 grid-cols-10 pt-4">
        {horizontalText.map((content, index) => (
          <div
            key={index}
            className={`${
              horizontalText.length > 4
                ? "col-span-6 md:col-span-2 md:first:col-span-3 last:col-span-12 md:last:col-span-4"
                : "col-span-12 md:col-span-3 prose text-white"
            } text-lg cms-content`}
          >
            <ReactMarkdown source={content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizonalComponent;
