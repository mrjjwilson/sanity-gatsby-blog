export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6086c0914935d2a98bd8897b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vqjea4m5",
                  apiId: "e3bb3528-a615-4248-b70d-c4082bbbdaec",
                },
                {
                  buildHookId: "6086c091e2f9abed6a84bf74",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-t2rk4rc2",
                  apiId: "3db4567c-7594-4b68-b6bc-af46426557e7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mrjjwilson/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-t2rk4rc2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
