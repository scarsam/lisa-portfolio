import Image from "components/image";
import ReactMarkdown from "react-markdown";

const HorizonalComponent = ({ horizontalText, image }) => {
  const heroMobileClassNames = (index) => {
    switch (index) {
      case 0:
        return "col-span-6 md:col-span-3 order-1 md:order-none";
      case 1:
        return "col-span-10 md:col-span-2 order-3 md:order-none";
      case 2:
        return "col-span-10 md:col-span-2 order-4 md:order-none";
      case 3:
        return "col-span-6 md:col-span-3 order-2 md:order-none md:justify-self-center";
      case 4:
        return "col-span-12 md:col-span-4 order-5 md:order-none";
      default:
        return null;
    }
  };

  return (
    <div className="mb-14">
      <Image image={image} alt="Project image" />
      <div className="grid gap-5 grid-cols-10 pt-4">
        {horizontalText.map((content, index) => (
          <div
            key={index}
            className={`${
              horizontalText.length > 4
                ? heroMobileClassNames(index)
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
