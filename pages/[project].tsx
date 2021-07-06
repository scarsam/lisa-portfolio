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
      title,
      project,
    },
    revalidate: 15,
  };
}

export default function Project({ title, project }) {
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
    <div className="container mx-auto my-auto">
      <div className="grid-cols-12 grid">
        {project.map((component) => (
          <div key={component.id} className="grid col-start-2 col-span-10">
            {renderComponent(component)}
          </div>
        ))}
      </div>
    </div>
  );
}
