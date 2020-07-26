const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layout',
  defaultLayout: true,
  fileExtensions: ['mdx'],
})({ pageExtensions: ['js', 'jsx', 'mdx'] });
