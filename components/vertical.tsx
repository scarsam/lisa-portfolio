import Image from "components/image";
import ReactMarkdown from "react-markdown";

const VerticalComponent = ({ verticalText, image }) => {
  return (
    <div className="grid gap-5 grid-cols-10 pt-4 mb-28">
      <div className="col-span-3 text-lg cms-content">
        <ReactMarkdown source={verticalText} />
      </div>
      <div className="col-span-5 col-start-5">
        <Image horiztonal={false} image={image} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default VerticalComponent;
