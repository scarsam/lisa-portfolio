import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckm2wkn3bu3sm01xhe9fbat23/master",
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
    },
  },
);

const AboutApi = async () => {
  const query = gql`
    query getAbout {
      about(where: { id: "ckqqlrx9s20ez0b04phx874ug" }) {
        id
        about
        images {
          id
          url
        }
      }
    }
  `;

  const { about } = await graphcms.request(query);
  return about;
};

const ProjectsApi = async () => {
  const query = gql`
    query getProjects {
      projects {
        slug
        overviews {
          description
          title
          image {
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
            __typename
            id
            horizontalText
            image {
              id
              url
            }
          }
          ... on HorizontalImageOnlyComponent {
            __typename
            id
            image {
              url
            }
          }
          ... on Headline {
            __typename
            id
            headline
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

export { ProjectApi, ProjectsApi, AboutApi };
