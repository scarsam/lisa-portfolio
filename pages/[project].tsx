import Image from "next/image";
import { ProjectApi, ProjectsApi } from "lib/api";
import HorizontalComponent from "components/horizontal";
import VerticalComponent from "components/vertical";

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
  };
}

export default function Project({ title, project }) {
  return (
    <div className="container mx-auto my-auto">
      <div className="grid-cols-12 grid">
        {project.map((component) =>
          component.__typename === "HorizontalImage" ? (
            <div
              key={component.id}
              className="grid col-start-2 col-span-10  mb-28"
            >
              <HorizontalComponent
                horizontalText={component.horizontalText}
                image={component.image}
              />
            </div>
          ) : (
            <div
              key={component.id}
              className="grid col-start-2 col-span-10 grid-cols-12 mb-28"
            >
              <VerticalComponent
                verticalText={component.verticalText}
                image={component.image}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
