import { GetStaticProps } from "next";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import Link from "components/link";

// export async function getStaticProps() {
//   const graphcms = new GraphQLClient(
//     "https://api-eu-central-1.graphcms.com/v2/ckm2wkn3bu3sm01xhe9fbat23/master",
//     {
//       headers: {
//         authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
//       },
//     },
//   );

//   const query = gql`
//     {
//       homes {
//         title
//         link
//         description
//         images {
//           url
//           id
//         }
//       }
//     }
//   `;

//   const { homes } = await graphcms.request(query);

//   return {
//     props: {
//       homes,
//     },
//   };
// }

export default function About({ homes }) {
  return (
    <div className="container mx-auto my-auto">
      <div className="grid grid-cols-12">
        <h1>About TBD</h1>
      </div>
    </div>
  );
}
