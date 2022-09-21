module.exports = {
  distDir: "../build",
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "/",
    domains: [
      "cdn-e-and-b-solutions.s3.amazonaws.com",
      "cdn-e-and-b-solutions.s3.amazonaws.com/clients/REPLACE_ME__client-name",
      "beta.REPLACE_ME__client-name-url.com",
      "REPLACE_ME__client-name-url.com",
    ],
  },
};
