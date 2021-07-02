import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { AboutApi } from "lib/api";

export async function getStaticProps() {
  const { about, images } = await AboutApi();

  return {
    props: {
      about,
      images,
    },
    revalidate: 15,
  };
}

export default function About({ about, images }) {
  return (
    <div className="container mx-auto my-auto">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-6 text-3xl cms-content prose text-white">
          <ReactMarkdown source={about} />
        </div>
        <div className="col-start-7 col-end-11">
          {images.map((image) => (
            <div
              className="relative mb-14"
              key={image.id}
              style={{ width: "532px", height: "762px" }}
            >
              <Image
                placeholder="blur"
                blurDataURL={image.url}
                src={image.url}
                alt="Lisa Skole"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
