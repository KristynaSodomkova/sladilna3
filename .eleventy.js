module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("img");
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("data");
  eleventyConfig.addPassthroughCopy("index.js");
  
  return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // jako šablonovací jazyk zvolíme Nunjucks`
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  
 };