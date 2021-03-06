import { NextSeo } from "next-seo";
import { ProjectsApi } from "lib/api";
import Link from "components/link";
import Image from "components/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export async function getStaticProps() {
  const projects = await ProjectsApi();

  return {
    props: {
      projects,
    },
    revalidate: 15,
  };
}

export default function Home({ projects }) {
  return (
    <>
      <NextSeo
        title="Graphic Designer and Art Director Lisa Skole"
        description="This links to the portfolio of Graphic designer and Art Director Lisa Skole. She specialize in digital design and the fluid world between product, identity and editorial. Attention to detail and the beauty of the process is essential in her design thinking and she’s striving to make things simple and intuitive."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/lisa-skole-favicon.svg",
          },
        ]}
        openGraph={{
          type: "website",
          url: `https://www.lisaskole.se`,
          title: "Graphic Designer and Art Director Lisa Skole",
          description:
            "She specialize in digital design and the fluid world between product, identity and editorial. Attention to detail and the beauty of the process is essential in her design thinking and she’s striving to make things simple and intuitive. ",
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
      <div id="work" className="container mx-auto my-auto">
        <div className="grid grid-cols-12">
          {projects.map(({ id, overviews, slug }) => (
            <figure
              key={id}
              className="card mb-14 col-span-12 sm:col-start-2 sm:col-span-10"
            >
              <div className="carousel max-w-[1130px] m-auto">
                <Carousel
                  showThumbs={false}
                  showIndicators={false}
                  showStatus={false}
                  infiniteLoop={true}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        className="prev-button opacity-0 hover:opacity-100 transition-opacity left-0"
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                      >
                        <span className="button-text text-xl md:text-3xl left-0 md:-left-10 relative">
                          &#8592; Previous
                        </span>
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        className="next-button opacity-0 hover:opacity-100 transition-opacity right-0"
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                      >
                        <span className="button-text text-xl md:text-3xl right-0 md:-right-10 relative">
                          Next &#8594;{" "}
                        </span>
                      </button>
                    )
                  }
                >
                  {overviews.map((overview) => (
                    <div key={overview.id}>
                      <div className="image-wrapper" key={overview?.image.id}>
                        <Image
                          image={overview?.image}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="flex justify-between pt-5 px-4 sm:px-0">
                        <figcaption className="text-left">
                          <p className="text-lg">{overview.title}</p>
                          <p className="text-lg text-copy-1">
                            {overview.description}
                          </p>
                        </figcaption>
                        <Link href={`/${slug}`} text="Case study" />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
