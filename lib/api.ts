import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckm2wkn3bu3sm01xhe9fbat23/master",
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
    },
  },
);

const ProjectsApi = async () => {
  const query = gql`
    query getProjects {
      projects {
        slug
        overview {
          description
          title
          images {
            url
            id
          }
        }
      }
    }
  `;

  const { projects } = await graphcms.request(query);
  return projects;
};

const ProjectApi = async (slug) => {
  const query = gql`
    query getProject($slug: String!) {
      project(where: { slug: $slug }) {
        title

        project {
          __typename
          ... on HorizontalImage {
            id
            horizontalText
            image {
              id
              url
            }
          }
          ... on VerticalImage {
            __typename
            id
            verticalText
            image {
              url
            }
          }
        }
      }
    }
  `;

  const { project } = await graphcms.request(query, { slug });
  return project;
};

export { ProjectApi, ProjectsApi };
