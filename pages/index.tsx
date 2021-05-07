import { CSSProperties } from "react";
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
    revalidate: 30,
  };
}

export default function Home({ projects }) {
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: 0,
    bottom: 0,
    width: "50%",
    height: "100%",
  };

  return (
    <div id="work" className="container mx-auto my-auto">
      <div className="grid grid-cols-12">
        {projects.map(({ overview, slug }) => (
          <figure key={slug} className="card mb-28 col-start-2 col-span-10">
            <div className="carousel">
              <Carousel
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{ ...arrowStyles, left: 0 }}
                    />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{ ...arrowStyles, right: 0 }}
                    />
                  )
                }
              >
                {overview.images.map((image) => (
                  <div
                    key={image.id}
                    style={{ width: "1135px", height: "635px" }}
                  >
                    <Image image={image} alt="Picture of the author" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex justify-between pt-5">
              <figcaption>
                <p className="text-lg">{overview.title}</p>
                <p className="text-lg text-copy-1">{overview.description}</p>
              </figcaption>
              <Link href={`/${slug}`} text="Overview" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
