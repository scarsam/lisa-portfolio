import Image from "components/image";
import ReactMarkdown from "react-markdown";

const VerticalComponent = ({ verticalText, image }) => {
  return (
    <>
      <div className="col-span-3">
        <ReactMarkdown source={verticalText} />
      </div>
      <div className="col-span-5 col-start-5">
        <Image horiztonal={false} image={image} alt="Picture of the author" />
      </div>
    </>
  );
};

export default VerticalComponent;
