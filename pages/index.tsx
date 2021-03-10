import { GetStaticProps } from "next";
import { GraphQLClient, gql } from "graphql-request";

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

export default function ServicesPage(props) {
  console.log(props);
  return (
    <div className="container mx-auto">
      <h1>PROJECTS</h1>
    </div>
  );
}
