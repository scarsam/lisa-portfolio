import { GetStaticProps } from "next";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import Link from "components/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckm2wkn3bu3sm01xhe9fbat23/master",
    {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
      },
    },
  );

  const query = gql`
    {
      homes {
        title
        link
        description
        images {
          url
          id
        }
      }
    }
  `;

  const { homes } = await graphcms.request(query);

  return {
    props: {
      homes,
    },
  };
}

export default function ServicesPage({ homes }) {
  console.log(homes);

  return (
    <div className="container mx-auto my-auto">
      <div className="grid grid-cols-12">
        {homes.map((project) => (
          <figure className="card mb-28 col-start-2 col-span-10">
            <div>
              <Carousel
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
              >
                {project.images.map((image) => (
                  <div style={{ width: "1135px", height: "635px" }}>
                    <Image
                      key={image.id}
                      src={image.url}
                      alt="Picture of the author"
                      layout="fill"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex justify-between pt-5">
              <figcaption>
                <p className="text-lg">{project.title}</p>
                <p className="text-lg text-copy-1">{project.description}</p>
              </figcaption>
              <Link href={project.link} text="Overview" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
