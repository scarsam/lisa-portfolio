import { SitemapStream, streamToPromise } from "sitemap";
import { ProjectsApi } from "lib/api"

export default async (req, res) => {
  try {
    const projects = await ProjectsApi();
    console.log(projects)
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // Create each URL row
    projects.forEach(project => {
      smStream.write({
        url: `/${project.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // Add frontpage
    smStream.write({
      url: "/",
    });
    // Add a static url to ex: about page
    smStream.write({
      url: "/about",
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }

}