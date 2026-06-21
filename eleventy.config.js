import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // Passthrough copy for stylesheet and assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Custom filter to render Markdown content from front matter
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });
  eleventyConfig.addFilter("markdown", (content) => {
    if (!content) return "";
    return md.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
