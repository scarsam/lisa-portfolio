import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "components/link";
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
    <>
      <NextSeo
        title="Graphic Designer and Art Director Lisa Skole | About"
        description="She specialize in digital design and the fluid world between product, identity and editorial. Attention to detail and the beauty of the process is essential in her design thinking and she’s striving to make things simple and intuitive."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/lisa-skole-favicon.svg",
          },
        ]}
        openGraph={{
          type: "website",
          url: `https://www.lisaskole.se/about`,
          title: "Graphic Designer and Art Director Lisa Skole",
          description:
            "This links to the portfolio of Graphic designer and Art Director Lisa Skole. She specialize in digital design and the fluid world between product, identity and editorial. Attention to detail and the beauty of the process is essential in her design thinking and she’s striving to make things simple and intuitive. ",
          images: [
            {
              url: "/lisa-skole-meta.jpg",
              width: 1200,
              height: 628,
              alt: "Nice to meet you",
            },
          ],
        }}
      />
      <div className="container mx-auto my-auto">
        <div className="flex flex-col-reverse md:grid grid-cols-12 mb-28">
          <div className="col-start-2 col-end-11 md:col-end-6 mx-4 sm:mx-0">
            <span className="text-xl cms-content prose text-white">
              <ReactMarkdown source={about} />
            </span>
            <div className="mt-10 text-3xl">
              <Link
                className="block mb-2"
                href="mailto:hello@lisaskole.com"
                text="Say hey"
                large
              />
              <Link
                className="block"
                href="mailto:hello@lisaskole.com"
                text="hello@lisaskole.design"
                large
              />
            </div>
          </div>
          <div className="col-start-2 md:col-start-7 col-end-11">
            {images.map(({ id, url, mimeType }) => (
              <div key={id} className="mb-14">
                {mimeType === "video/mp4" ? (
                  <video autoPlay loop muted playsInline>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    {...{ width: "532px", height: "762px" }}
                    placeholder="blur"
                    blurDataURL={url}
                    src={url}
                    alt="Lisa Skole"
                    layout="responsive"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
