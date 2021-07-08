import { NextSeo } from "next-seo";
import { ProjectApi, ProjectsApi } from "lib/api";
import HorizontalComponent from "components/horizontal";
import VerticalComponent from "components/vertical";
import Image from "components/image";

export async function getStaticPaths() {
  const projects = await ProjectsApi();

  const paths = projects.map((project) => ({
    params: { project: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { title, project } = await ProjectApi(params.project);

  return {
    props: {
      slug: params.project,
      title,
      project,
    },
    revalidate: 15,
  };
}

export default function Project({ slug, title, project }) {
  const renderComponent = (component) => {
    switch (component.__typename) {
      case "HorizontalImage":
        return (
          <HorizontalComponent
            horizontalText={component.horizontalText}
            image={component.image}
          />
        );
      case "VerticalImage":
        return (
          <VerticalComponent
            verticalText={component.verticalText}
            image={component.image}
          />
        );
      case "HorizontalImageOnlyComponent":
        return (
          <div className="mb-7 md:mb-14">
            <Image
              horiztonal={false}
              image={component.image}
              alt="Picture of the author"
            />
          </div>
        );

      case "Headline":
        return <h2 className="text-3xl">{component.headline}</h2>;
      default:
        return null;
    }
  };

  return (
    <>
      <NextSeo
        title={`Graphic Designer and Art Director Lisa Skole | ${title}`}
        description="She specialize in digital design and the fluid world between product, identity and editorial. Attention to detail and the beauty of the process is essential in her design thinking and she’s striving to make things simple and intuitive."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/lisa-skole-favicon.svg",
          },
        ]}
        openGraph={{
          type: "website",
          url: `https://www.lisaskole.se/${slug}`,
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
        <div className="grid-cols-12 grid">
          {project.map((component) => (
            <div key={component.id} className="grid col-start-2 col-span-10">
              {renderComponent(component)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
