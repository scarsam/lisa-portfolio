import Image from "components/image";
import ReactMarkdown from "react-markdown";

const VerticalComponent = ({ verticalText, image }) => {
  return (
    <div className="flex flex-col-reverse md:grid gap-5 grid-cols-10 pt-4 mb-14 md:mb-28">
      <div className="col-span-12 md:col-span-3 text-lg cms-content text-white prose">
        <ReactMarkdown source={verticalText} />
      </div>
      <div className="col-span-12 md:col-span-5 md:col-start-5">
        <Image horiztonal={false} image={image} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default VerticalComponent;
